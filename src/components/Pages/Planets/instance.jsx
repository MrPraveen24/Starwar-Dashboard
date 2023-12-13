import DropdownList from "../Films/DropDown/Dropdown";
function Instance({ myData }) {
  return (
    <>
      <div className="list">
        <div className="tableHeading">
          <span>Name </span>
          <span>Rotation Period </span>
          <span>Climate </span>
          <span> </span>
        </div>
        {myData.map((ele, index) => {
          const { name, rotation_period, climate } = ele;
          return (
            <div key={index}>
              <div className="listCard" key={crypto.randomUUID()}>
                <span className="h2"> {name}</span>
                <span className="h2"> {rotation_period}</span>
                <span className="h2">{climate}</span>
                <span className="h2">
                  <DropdownList title={name} />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Instance;
