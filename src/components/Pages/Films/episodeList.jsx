import DropdownList from './DropDown/Dropdown';
import './episodegrid.css'
function EpisodeList({Films}) {
    return (
      <>
        <div className="list">
        <div className="tableHeading">
                <span>Name </span>
                <span>Director </span>
                <span>Release Date </span>
                <span> </span>
            </div>
          {Films.map((ele,index) => {
            const { title,director,release_date } = ele;
            return (
              <div key={index}>
                <div className="listCard" key={title}>
                <span className="h2" id="movieName"> {title}</span>
                <span className="h2"> {director}</span>
                <span className="h2">{release_date}</span>
                <span className="h2"><DropdownList title={title}/></span>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  
  export default EpisodeList;