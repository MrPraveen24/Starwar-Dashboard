import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
// import '../common.css'
import CommonContent from "../commanContent";
import { useNavigate } from "react-router-dom";

function Starships() {
  const [myData, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();
  const handleNavigate = (val) => {
    if (val == "grid") {
      navigate("/starships");
    } else {
      navigate("/StarshipList");
    }
  };
  const getApiData = async () => {
    try {
      const res = await axios.get("/starships/");
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
      <Navbar name={"Starships"} handleNavigate={handleNavigate} state1={true}/>
      {myData[0] ? (
        "" //Loading animation for api
      ) : (
        <>
          <div className="spinner-border" role="status"></div>
          <span> Fetching Data From Star-war Api</span>
        </>
      )}
      <CommonContent isError={isError} myData={myData} index={3} prop1={"name"} prop2={"model"} prop3={"manufacturer"} prop4={"length"} prop5={"passengers"} prop1Val={"Name"}
            prop2Val={"Model"}
            prop3Val={"Manufacturer"}
            prop4Val={"Length"}
            prop5Val={"Passengers"}/>
    </>
  );
}
export default Starships;
