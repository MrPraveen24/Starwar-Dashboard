import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
// import '../common.css'
import CommonContent from "../commanContent";
import { useNavigate } from "react-router-dom";

function Species() {
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
      <Navbar name={"Species"} handleNavigate={handleNavigate} state1={true}/>
      {myData[0] ? (
        "" //Loading animation for api
      ) : (
        <>
          <div className="spinner-border" role="status"></div>
          <span> Fetching Data From Api</span>
        </>
      )}
      <CommonContent isError={isError} myData={myData} index={2} prop1={"name"} prop2={"classification"} prop3={"designation"} prop4={"average_height"} prop5={"average_lifespan"} prop1Val={"Name"}
            prop2Val={"Classification"}
            prop3Val={"Designation"}
            prop4Val={"Average Height"}
            prop5Val={"Average Lifespan"}/>
    </>
  );
}
export default Species;
