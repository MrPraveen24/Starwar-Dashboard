import DropdownList from "../Pages/Films/DropDown/Dropdown";
import Users from ".././../assets/Users.png";
import "../Pages/common.css";
import { useState } from "react";
import CommonSideBar from "./CommonSideBar";
function CommonContent(props) {
  {
    var Array = [
      "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      "https://img.freepik.com/premium-psd/imagery-imaginary-planets-your-cosmic-image-ai-generated_103740-2416.jpg?w=2000",
      "https://www.nicepng.com/png/detail/227-2279199_elite-pirate-metroid-fusion-alien-species.png",
      "https://clipart-library.com/images/8ixKx8XLT.png",
      "https://w7.pngwing.com/pngs/591/74/png-transparent-cars-towmater-art-cars-mater-national-championship-lightning-mcqueen-pixar-cars-vintage-car-car-vehicle-thumbnail.png",
    ];
  }
  const [title, setTitle] = useState([
    {
      prop1: "",
      prop2: "",
      prop3: "",
      prop4: "",
      prop5: "",
    },
  ]);
  return (
    <>
      {/* {isError !== "" && <h2>{isError}</h2>}  */}
      <div className="grid" id="MainGrid">
        {props.myData.map((ele) => {
          console.log(title);
          return (
            <div className="card" key={crypto.randomUUID()}>
              <img
                src={Array[props.index]}
                className="card-img-top"
                alt={Array[props.index]}
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={() =>
                  setTitle([
                    {
                      prop1: ele[props.prop1],
                      prop2: ele[props.prop2],
                      prop3: ele[props.prop3],
                      prop4: ele[props.prop4],
                      prop5: ele[props.prop5],
                    },
                  ])
                }
              />

              <div className="card-body" id="gridOfAll">
                <div className="flex-item-left">
                  <img src={Users} id="movieIcon" />
                </div>
                <div className="flex-item-middle">
                  <h5 className="title">{ele[props.prop1]} </h5>
                </div>
                <div className="flex-item-right">
                  <DropdownList title={ele[props.prop1]} />
                </div>
              </div>
            </div>
          );
        })}

        {
          <CommonSideBar
            
            prop1={title[0].prop1}
            prop2={title[0].prop2}
            prop3={title[0].prop3}
            prop4={title[0].prop4}
            prop5={title[0].prop5}
            arrayIndex={Array[props.index]}
            prop1Val={props.prop1Val}
            prop2Val={props.prop2Val}
            prop3Val={props.prop3Val}
            prop4Val={props.prop4Val}
            prop5Val={props.prop5Val}
            


          />
        }
      </div>
    </>
  );
}

export default CommonContent;
