import { useNavigate } from "react-router-dom";
import "./sidemenu.css";
import MovieIcon from ".././../assets/MovieIcon.png";
import Users from ".././../assets/Users.png";
import Planet from ".././../assets/Planet.png";
import Alien from ".././../assets/Alien.png";
import RocketLaunch from ".././../assets/RocketLaunch.png";
import CarProfile from ".././../assets/CarProfile.png";
import { useState } from "react";
function MenuItems({ nameOfMenu,Films,People,Planets,Species,StarShips,Vehicles,isError }) {
  const navigate = useNavigate();
  const [state,setState] = useState(false);
  return (
    <div>
      <div className="">
        <button 
          className="button  MenuTitle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"

          onClick={() => {
            setState(!state)
          }}
        >
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
   <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
  </svg><h6>{nameOfMenu}</h6>
  { state ? ( <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
</svg></span>) : (<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
</svg></span>)}
        </button>
        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
          
          {Films[0] ? 
            "" //Loading animation for api
           : 
           <>
            <div className="spinner-border" role="status">
              
            </div>
            <span > Loading...</span>
            </>
          }

          {nameOfMenu == "Films" &&
            Films.map((films, index) => {
              const { title } = films;
              return (
                <li key={index}>
                  <button
                  id="insideButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/films");
                    }}
                  >
                   <img src={MovieIcon} className="menuLogo"></img> {title}
                   <span>〉</span>
                  </button>
                </li>
              );
            })}

          {nameOfMenu == "People" &&
            People.map((people, index) => {
              const { name } = people;
              return (
                <li key={index}>
                  <button
                  id="insideButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/PeopleListView");
                    }}
                  >
                    <img src={Users} className="menuLogo" />{name}
                    <span>〉</span>
                  </button>
                </li>
              );
            })}

          {nameOfMenu == "Planets" &&
            Planets.map((planets, index) => {
              const { name } = planets;
              return (
                <li key={index}>
                  <button
                  id="insideButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/planetList");
                    }}
                  >
                    <img src={Planet} className="menuLogo"></img>{name}
                    <span>〉</span>
                  </button>
                </li>
              );
            })}

          {nameOfMenu == "Species" &&
            Species.map((species, index) => {
              const { name } = species;
              return (
                <li key={index}>
                  <button
                  id="insideButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/SpeciesList");
                    }}
                  >
                    <img src={Alien} className="menuLogo"></img>{name}
                    <span>〉</span>
                  </button>
                </li>
              );
            })}

          {nameOfMenu == "Starships" &&
            StarShips.map((starships, index) => {
              const { name } = starships;
              return (
                <li key={index}>
                  <button
                  id="insideButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/StarshipList");
                    }}
                  >
                    <img src={RocketLaunch} className="menuLogo"></img>{name} 
                    <span>〉</span>
                  </button>
                </li>
              );
            })}

          {nameOfMenu == "vehicles" &&
            Vehicles.map((vehicles, index) => {
              const { name } = vehicles;
              return (
                <li key={index}>
                  <button id="insideButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/VehiclesList");
                    }}
                  >
                    <img src={CarProfile} className="menuLogo"></img>{name} 
                    <span>〉</span>
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
export default MenuItems;
