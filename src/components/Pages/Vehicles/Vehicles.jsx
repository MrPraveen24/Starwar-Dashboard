import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
import CommonContent from "../commanContent";
import { useNavigate } from "react-router-dom";

function Vehicles() {
  const [myData, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();

  const getApiData = async () => {
    try {
      const res = await axios.get("/vehicles/");
      setData(res.data.results);
    } catch (err) {
      setIsError(err.message);
    }
  };

  const handleNavigate = (val) => {
    if (val == "grid") {
      navigate("/vehicles");
    } else {
      navigate("/VehiclesList");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
    {isError ? console.log("Error In Api Call") : ""}
      <Navbar name={"Vehicles"} handleNavigate={handleNavigate} />
      {myData[0] ? (
        "" //Loading animation for api
      ) : (
        <>
          <div className="spinner-border" role="status"></div>
          <span> Fetching data from StarWar Api</span>
        </>
      )}
      <CommonContent isError={isError} myData={myData} index={4} prop1={"name"} prop2={"model"} prop3={"manufacturer"} prop4={"length"} prop5={"passengers"} prop1Val={"Name"}
            prop2Val={"Model"}
            prop3Val={"Manufacturer"}
            prop4Val={"Length"}
            prop5Val={"Passengers"}/>
    </>
  );
}
export default Vehicles;
