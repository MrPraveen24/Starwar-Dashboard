import './App.css'
import { useEffect, useState } from "react";
import axios from "./components/MainPage/axiosApi";
import Header from './components/Header/Header'
import SideMenu from './components/MainPage/SideMenu'
import PageContent from './components/MainPage/PageContent'
import FilmsEpisode from './components/Pages/Films/FilmsEpisode';
function App() {
  const [Films, setFilms] = useState([]);
  const [People, setPeople] = useState([]);
  const [Planets, setPlants] = useState([]);
  const [Species, setSpecies] = useState([]);
  const [StarShips, setStarships] = useState([]);
  const [Vehicles, setVehicles] = useState([]);
  const [isError, setIsError] = useState("");  

  const getFilmsApiData = async () => {
    try {
      const res = await axios.get("/films/");
      setFilms(res.data.results);
    } catch (err) {
      setIsError("Slow Internet");
    }
  };

  const getSpeciesApiData = async () => {
    try {
      const res = await axios.get("/species/");
      setSpecies(res.data.results);
    } catch (err) {
      setIsError("Slow Internet");
    }
  };

  const getPeopleApiData = async () => {
    try {
      const res = await axios.get("/people/");
      setPeople(res.data.results);
    } catch (err) {
      setIsError("Slow Internet");
    }
  };

  const getStarshipsApiData = async () => {
    try {
      const res = await axios.get("/starships/");
      setStarships(res.data.results);
    } catch (err) {
      setIsError("Slow Internet");
    }
  };

  const getPlantsApiData = async () => {
    try {
      const res = await axios.get("/planets/");
      setPlants(res.data.results);
    } catch (err) {
      setIsError("Slow Internet");
    }
  };

  const getVehiclesApiData = async () => {
    try {
      const res = await axios.get("/vehicles/");
      setVehicles(res.data.results);
    } catch (err) {
      setIsError("Slow Internet");
    }
  };


    useEffect(()=> {
    getFilmsApiData();
    getPeopleApiData();
    getPlantsApiData();
    getSpeciesApiData();
    getStarshipsApiData();
    getVehiclesApiData();
    },[]);


  return (
    <div className="App">
      <Header />
      <div className="SideMenuAndPageContent">
        <SideMenu Films={Films} People={People} Planets={Planets} Species={Species} StarShips={StarShips} Vehicles={Vehicles} isError={isError}></SideMenu>
        <PageContent ></PageContent>
      </div>
    </div>
  )
}

export default App;

