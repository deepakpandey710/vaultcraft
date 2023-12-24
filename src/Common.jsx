import React from "react";
import { Nav } from "react-bootstrap";

function Common({ name, imgsrc, visit, btname, content }) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {name}
                    <strong className="brand-name"> VaultCraft Innovations </strong>
                  </h1>

                  <h2 className="my-3">
                    {content}
                  </h2>

                  <div className="mt-3">
                  <Nav.Link href={visit} className="btn-get-started">{btname}</Nav.Link>
                    {/* <NavLink to={visit} className="btn-get-started">
                      {btname}
                    </NavLink> */}
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={imgsrc}
                    className="img-fluid animated"
                    alt="HomeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
