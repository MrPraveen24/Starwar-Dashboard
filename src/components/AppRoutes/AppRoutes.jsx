import { Route, Routes } from "react-router-dom";
import FilmsEpisode from "../Pages/Films/FilmsEpisode";
import PeopleDetails from "../Pages/People/PeopleDetails";
import Planets from "../Pages/Planets/Planets";
import Species from "../Pages/Species/Species";
import StarShips from "../Pages/Starships/Starships";
import Vehicles from "../Pages/Vehicles/Vehicles";
import Dashboard from "../Pages/Dashboard";
import ListEpisode from "../Pages/Films/listEpisode";
import PeopleList from "../Pages/People/PeopleListView";
import PlanetList from "../Pages/Planets/PlanetList";
import SpeciesList from "../Pages/Species/SpeciesList";
import StarshipList from "../Pages/Starships/StarshipList";
import VehiclesList from "../Pages/Vehicles/VehiclesList";


function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/listEpisodes" element={<ListEpisode />}></Route>
        <Route path="/films" element={<FilmsEpisode />}></Route>
        <Route path="/people" element={<PeopleDetails />}></Route>
        <Route path="/planets" element={<Planets />}></Route>
        <Route path="/planetList" element={<PlanetList />}></Route>
        <Route path="/starships" element={<StarShips />}></Route>
        <Route path="/StarshipList" element={<StarshipList />}></Route>
        <Route path="/species" element={<Species />}></Route>
        <Route path="/SpeciesList" element={<SpeciesList />}></Route>
        <Route path="/vehicles" element={<Vehicles />}></Route>
        <Route path="/VehiclesList" element={<VehiclesList />}></Route>
        <Route path="/PeopleListView" element={<PeopleList />}></Route>
      </Routes>
    );
  }
  export default AppRoutes;