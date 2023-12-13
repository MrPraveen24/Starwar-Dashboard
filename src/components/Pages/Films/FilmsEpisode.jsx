import GridEpisode from "./episodeGrid";
import Navbar from "../navbar";
import axios from "../../MainPage/axiosApi";
import { useState } from "react";
import "./episodegrid.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FilmsEpisode() {
  const [Films, setFilms] = useState([]);
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();

  const getFilmsApiData = async () => {
    try {
      const res = await axios.get("/films/");
      setFilms(res.data.results);
    } catch (err) {
      setIsError(err.message);
    }
  };

  const handleNavigate = (val) => {
    if(val == "grid"){
      navigate("/films")
    }else{
      navigate("/listEpisodes")
    }
  }

  useEffect(() => {
    getFilmsApiData();
  }, []);

  return (
    <>
      <Navbar name={"Films"} handleNavigate={handleNavigate} state1={true}/>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="film-grid">
        {Films[0] ? ( //Loading animation for api
          ""
        ) : (
          <>
            <div className="spinner-border" role="status"></div>
            <span> Fetching Data From Star-war Api</span>
          </>
        )}
        <GridEpisode Films={Films} />
      </div>
    </>
  );
}
export default FilmsEpisode;
