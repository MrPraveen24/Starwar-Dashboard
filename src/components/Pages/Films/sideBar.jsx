import './sidebar.css'
export default function SideBar({title,opening_crawl,director,release_date,producer,arrayIndex}){
  return (
        <>
        <div
        className="offcanvas offcanvas-end"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">{title}</h5>
          <button
            type="button" id="closeCanvas"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
            

<div className="card" id="sidebar-details" style={{width: "18rem"}}>
<label>Image</label>
  <img src={arrayIndex} className="card-img-top" alt="..." />
  <div>
    <h3>Title</h3>
  <input type="text" className="form-control" placeholder={title} aria-label="Username" aria-describedby="basic-addon1" />
        <h3>Director</h3>
        <input type="text" className="form-control" placeholder={director} aria-label="Username" aria-describedby="basic-addon1" />
        <h3>Producer</h3>
        <input type="text" className="form-control" placeholder={producer} aria-label="Username" aria-describedby="basic-addon1" />
        <h3>Release Date</h3>
        <input type="text" className="form-control" placeholder={release_date} aria-label="Username" aria-describedby="basic-addon1" />
        <h3>Opening Crawl</h3>
        <input type="text" className="form-control" placeholder={opening_crawl.slice(0,50)} aria-label="Username" aria-describedby="basic-addon1" />
        
  </div>
</div>
            
        </div>
      </div>
      </>
    )
}