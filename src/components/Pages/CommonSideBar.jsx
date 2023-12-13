import './CommonSideBar.css'
export default function CommonSideBar({prop1,prop2,prop3,prop4,prop5,arrayIndex,prop1Val,prop2Val,prop3Val,prop4Val,prop5Val}){
    return (
        <>
        
        <div
        className="offcanvas offcanvas-end"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">{prop1}</h5>
          <button id="closeCanvas"
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
            

<div className="card" id="sidebar-details" style={{width: "18rem"}}>
<label>Image</label>
  <img src={arrayIndex}  className="card-img-top" alt="..." />
  <div>
    <h3>{prop1Val}</h3>
  <input type="text" className="form-control" placeholder={prop1} aria-label="Username" aria-describedby="basic-addon1" />
        <h3>{prop2Val}</h3>
        <input type="text" className="form-control" placeholder={prop2} aria-label="Username" aria-describedby="basic-addon1" />
        <h3>{prop3Val}</h3>
        <input type="text" className="form-control" placeholder={prop3} aria-label="Username" aria-describedby="basic-addon1" />
        <h3>{prop4Val}</h3>
        <input type="text" className="form-control" placeholder={prop4} aria-label="Username" aria-describedby="basic-addon1" />
        <h3>{prop5Val}</h3>
        <input type="text" className="form-control" placeholder={prop5} aria-label="Username" aria-describedby="basic-addon1" />
        
  </div>
</div>
            
        </div>
      </div>
      </>
    )
}