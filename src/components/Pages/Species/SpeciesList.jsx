import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
import Instance from "./instance";
// import '../common.css'
import { useNavigate } from "react-router-dom";
function SpeciesList() {
  const [myData, setData] = useState([]);
  const [isError, setIsError] = useState("");

  const navigate = useNavigate();
  const handleNavigate = (val) => {
    if (val == "grid") {
      navigate("/species");
    } else {
      navigate("/SpeciesList");
    }
  };

  const getApiData = async () => {
    try {
      const res = await axios.get("/species/");
      setData(res.data.results);
    } catch (err) {
      setIsError(err.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      {isError ? console.log("Error In Api Call") : ""}
      <Navbar name={"Species"} handleNavigate={handleNavigate} state1={false}/>
      {myData[0] ? (
        "" //Loading animation for api
      ) : (
        <>
          <div className="spinner-border" role="status"></div>
          <span> Fetching Data From Star-war Api</span>
        </>
      )}
      <Instance myData={myData} isError={isError} />
    </>
  );
}
export default SpeciesList;
