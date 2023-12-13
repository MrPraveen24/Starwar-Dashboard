import './sidemenu.css';
import MenuItems from './MenuItems';
function SideMenu({Films,People,Planets,Species,StarShips,Vehicles,isError}) {
  const Menu = ["Films","People","Planets","Species","Starships","vehicles"];

  return (
    <div className='sideMenu'>
      <div className="smallScreen"> 
        <button 
          className="btn smallScreen border border-primary "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Categories
        </button>

        <div className="collapse" id="collapseExample">
          <div className="card card-body">
          {
      Menu.map((items,index) => {
        return (
        <div key={index}>
       <MenuItems key={index} nameOfMenu={items} Films={Films} People={People} Planets={Planets} Species={Species} StarShips={StarShips} Vehicles={Vehicles} isError={isError} />
        </div>
        )
      })
    }
          </div>
        </div>
      </div>


      <div className='fullscreen'>
    {
      Menu.map((items,index) => {
        return (
        <div key={index}>
       <MenuItems key={index} nameOfMenu={items} Films={Films} People={People} Planets={Planets} Species={Species} StarShips={StarShips} Vehicles={Vehicles} isError={isError} />
        </div>
        )
      })
    }
    </div>
    </div>
  )
}
export default SideMenu;