import DropdownList from "./DropDown/Dropdown.jsx";
import "./episodegrid.css";
import movie from "../../../assets/MovieIcon.png";
import SideBar from "./sideBar.jsx";
import { useState } from "react";

function GridEpisode({ Films }) {
  {
    var Array = [
      "https://picsum.photos/id/237/90/50",
      "https://picsum.photos/id/235/90/50",
      "https://picsum.photos/id/200/90/50",
      "https://picsum.photos/id/27/90/50",
      "https://picsum.photos/90/50?grayscale",
      "https://picsum.photos/90/50",
    ];
  }

  const [title,setTitle] = useState([{
    "titleName" : "",
    "opening_crawl" : "",
    "director ": "",
    "producer" : "",
    "release_date" : ""
  }]);


  return (
    <>
      {Films.map((item, index) => {
        const { title,opening_crawl,director,producer,release_date } = item;
        return (
          <div className="gird" key={crypto.randomUUID()}>
            <div className="card">
              <img
                src={Array[index]}
                className="card-img-top"
                alt={Array[index]}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={()=> setTitle([{"titleName" : title ,"opening_crawl" : opening_crawl, "director" : director, "producer" :  producer, "release_date" : release_date}])}
              />

              <div className="card-body" id="MovieDetails">
                <div className="flex-item-left">
                  <img src={movie} id="movieIcon" />
                </div>
                <div className="flex-item-middle">
                  <h5 className="title">{title} </h5>
                </div>
                <div className="flex-item-right">
                  <DropdownList title={title} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {
        <SideBar title={title[0].titleName} opening_crawl={title[0].opening_crawl}  director={title[0].director} release_date={title[0].release_date} producer={title[0].producer} arrayIndex={Array[0]}/>
      }
    </>
  );
}

export default GridEpisode;