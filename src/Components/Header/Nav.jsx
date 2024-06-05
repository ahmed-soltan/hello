import { useState, useContext, useEffect } from "react";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/Auth";
import SideBar from "./SideBar";
import FirstNav from "./FirstNav";
export default function Nav() {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  const handleShow = () => {
    setShow((prevState) => !prevState);
    console.log(show);
  };
  const handleHide = (value) => {
    setShow(value);
  };
  return (
    <>
      <nav
        style={{ backgroundColor: "rgb(32, 61, 75)" }}
        className="py-1 d-flex align-items-center justify-content-between showNav"
      >
        <ul className="mt-2 d-flex align-items-center flex-wrap">
          <SideBar show={show} onHide={handleHide} />
          <div className="d-flex align-items-center justify-content-center">
            <i className="fa-solid fa-braille text-white"></i>
            <h5
              className="text-white mx-2 my-1"
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            >
              CATEGORIES <span className="fs-4">|</span>
            </h5>
          </div>
          <NavLink to="/" className="text-white mx-2 my-1 fs-6">
            HOME
          </NavLink>
          <NavLink to="/products" className="text-white mx-2 my-1 fs-6">
            OUR STORE
          </NavLink>
          <NavLink to="blog" className="text-white mx-2 my-1 fs-6">
            BLOGS
          </NavLink>
          <NavLink to="/contact" className="text-white mx-2 my-1 fs-6">
            CONTACT
          </NavLink>
          {user && user.email === "admin@admin.com" ? (
            <NavLink to="/dashboard" className="text-white mx-2 my-1 fs-6">
              DASHBOARD
            </NavLink>
          ) : null}
        </ul>
      </nav>
      <nav
        style={{ backgroundColor: "rgb(32, 61, 75)" }}
        className="py-1 d-flex align-items-center justify-content-between hideNavbar"
      >
        <ul className="mt-2 d-flex align-items-center flex-wrap">

          <NavLink to="/" className="text-white mx-2 my-1 fs-6">
            HOME
          </NavLink>
          <NavLink to="/products" className="text-white mx-2 my-1 fs-6">
            OUR STORE
          </NavLink>
          {user && user.email === "admin@admin.com" ? (
            <NavLink to="/dashboard" className="text-white mx-2 my-1 fs-6">
              DASHBOARD
            </NavLink>
          ) : null}
                    <NavLink to="/contact" className="text-white mx-2 my-1 fs-6">
            CONTACT
          </NavLink>

        </ul>
      </nav>
    </>
  );
}
