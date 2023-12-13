import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
// import '../common.css'
import CommonContent from "../commanContent";
import { useNavigate } from "react-router-dom";

function Planet() {
  const [myData, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();
const handleNavigate = (val) => {
  if(val == "grid"){
    navigate("/planets")
  }else{
    navigate("/planetList")
  }
}

  const getApiData = async () => {
    try {
      const res = await axios.get("/planets/");
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
      <Navbar name={"Planets"} handleNavigate={handleNavigate} state1={true} />
      {myData[0] ? 
            "" //Loading animation for api
           : 
           <>
            <div className="spinner-border" role="status">
              
            </div>
            <span > Fetching Data From Star-war Api</span>
            </>
          }
      <CommonContent isError={isError} myData={myData} index={1} prop1={"name"} prop2={"rotation_period"} prop3={"climate"} prop4={"diameter"} prop5={"population"} prop1Val={"Name"}
            prop2Val={"Rotation Period"}
            prop3Val={"Climate"}
            prop4Val={"Diameter"}
            prop5Val={"Population"}/>
    </>
  );
}
export default Planet;
