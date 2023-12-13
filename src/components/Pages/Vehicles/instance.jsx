import DropdownList from "../Films/DropDown/Dropdown";
function Instance({ myData }) {
  return (
    <>
      <div className="list">
        <div className="tableHeading">
          <span>Name </span>
          <span>Model </span>
          <span>Manufacturer </span>
          <span> </span>
        </div>
        {myData.map((ele, index) => {
          const { name, model, manufacturer } = ele;
          return (
            <div key={index}>
              <div className="listCard" key={crypto.randomUUID()}>
                <span className="h2"> {name}</span>
                <span className="h2"> {model}</span>
                <span className="h2">{manufacturer}</span>
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
