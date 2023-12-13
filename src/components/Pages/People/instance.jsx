import DropdownList from "../Films/DropDown/Dropdown";
function Instance({ myData ,isError}) {
  return (
    <>
      <div className="list">
        <div className="tableHeading">
          <span>Name </span>
          <span>Birth Year </span>
          <span>Gender </span>
          <span> </span>
        </div>
        {myData.map((ele, index) => {
          const {name,birth_year,gender} = ele;
          return (
            <div key={index}>
              <div className="listCard" key={crypto.randomUUID()}>
                <span className="h2"> {name}</span>
                <span className="h2"> {birth_year}</span>
                <span className="h2">{gender}</span>
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
