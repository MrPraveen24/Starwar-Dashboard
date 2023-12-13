import Navbar from "../navbar";
import axios from "../../MainPage/axiosApi";
import { useState, useEffect } from "react";
import EpisodeList from "./episodeList";
// import './episodegrid.css'
import { useNavigate } from "react-router-dom";
function ListEpisode() {
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
    if (val == "grid") {
      navigate("/films");
    } else {
      navigate("/listEpisodes");
    }
  };
  useEffect(() => {
    getFilmsApiData();
  }, []);
  return (
    <div className="listAll">
      <Navbar name={"Films"} handleNavigate={handleNavigate} state1={false}/>
      {isError !== "" && <h2>{isError}</h2>}
      <div className="list">
        {Films[0] ? ( //Loading animation for api
          ""
        ) : (
          <>
            <div className="spinner-border" role="status"></div>
            <span>Fetching Data From Star-war Api</span>
          </>
        )}
        <EpisodeList Films={Films} setFilms={setFilms} />
      </div>
    </div>
  );
}
export default ListEpisode;
