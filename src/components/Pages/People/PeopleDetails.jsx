import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
import CommonContent from "../commanContent";
import { useNavigate } from "react-router-dom";


function People() {
  const [myData, setData] = useState([]);
  const [isError, setIsError] = useState("");

  // const [title,setTitle] = useState([{
  //   "name" : "",
  //   "birth_year" : "",
  //   "gender ": "",
  //   "height" : "",
  //   "mass" : ""
  // }]);

  const navigate = useNavigate();
  const handleNavigate = (val) => {
    if(val == "grid"){
      navigate("/people")
    }else{
      navigate("/PeopleListView")
    }
  }
  
  const getApiData = async () => {
    try {
      const res = await axios.get("/people/");
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
      <Navbar name={"People"} handleNavigate={handleNavigate} state1={true}/>
      {myData[0] ? (
        "" //Loading animation for api
      ) : (
        <>
          <div className="spinner-border" role="status"></div>
          <span> Fetching Data From Star-war Api</span>
        </>
      )}
      <CommonContent isError={isError} myData={myData} index={0} prop1={"name"} prop2={"birth_year"} prop3={"gender"} prop4={"height"} prop5={"mass"} prop1Val={"Name"}
            prop2Val={"Birth Year"}
            prop3Val={"Gender"}
            prop4Val={"Height"}
            prop5Val={"Mass"}/>
      {/* <SideBar name={"name"} birth_year={birth_year} /> */}
     
    </>
    
  );
}
export default People;
