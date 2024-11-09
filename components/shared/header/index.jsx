"use client";
import Login_panel from "@/components/login";
import React, { useEffect, useState } from "react";
import Megamenu from "./megamenu";
import { Tooltip } from "react-bootstrap";
import Link from "next/link";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ShoppingCart, User, MapPin ,Search,Heart,PhoneCall   } from "lucide-react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faUser , faMap  } from '@fortawesome/free-solid-svg-icons';

const HeaderFile = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [islogin, setloginopen] = useState(false);
  const [username, Setusername] = useState(null);
  const [userprofile, Setprofilename] = useState();

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      This is the icon tooltip
    </Tooltip>
  );

  useEffect(() => {
    Setprofilename(window.localStorage.getItem("userdata"));
    if (userprofile) {
      const user = JSON.parse(userprofile);
      Setusername(user.username);
    } else {
      console.log("No user data found in localStorage");
    }
  }, [userprofile]);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const handleLoginClick = () => {
    setloginopen(true);
    let ans = document.getElementsByClassName("login-container")[0];
    ans.style.display = "block";
  };

  const handleLogout = async () => {
    try {
      const res = await fetch(
        "https://dish.najmainternational.com/api/user/logout",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(
          `HTTP error! status: ${res.status} - ${res.statusText}`
        );
      }

      window.localStorage.removeItem("token");
      window.localStorage.removeItem("userdata");
      Setusername(null);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <header className="good-advsior-header-section">
      <div className="container-fluid m-0 p-0">

        <div className="top-bar-header">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-side-topbar">
                <span>Become A Seller | </span>
                <span>About us | </span>
                <span>Free Delivery | </span>
                <span>Return Policy</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-side-topbar text-end">
                <span>Help Center | </span>
                <span>My Account</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg py-4 main-menu">
            <div className="container-fluid">
              <Link href="/">
                <img src="https://react.marketpro.wowtheme7.com/assets/images/logo/logo.png" style={{
                  backgroundSize:"contain"
                }} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {!isMenuOpen ? (
                ""
              ) : (
                <div className="collapse navbar-collapse" id="navbarNav">
                  <div className="map-icon">
                    <MapPin strokeWidth={0.5} />
                    <h6>noida up india</h6>
                  </div>
                  <div class="form-group has-search-right search-bar">
                  <span class="fa fa-search form-control-feedback"></span>
                  <input type="text" class="form-control" placeholder="Search" />
                  </div>
                  <div className="other-details">
                    <div
                      className="cart-icon px-3"
                      style={{
                        position: "relative",
                        display: "inline-flex",
                      }}
                    >
                      <span>
                      <ShoppingCart strokeWidth={0.5} />
                      <label>23</label>
                      </span>
                      
                      <span>Cart</span>

                      {/* <FontAwesomeIcon icon={faShoppingCart} size="2x"  /> */}
                    </div>
                    <div
                      className="cart-icon px-3"
                      style={{
                        position: "relative",
                        display: "inline-flex",
                      }}
                    >

                      <span>
                      <Heart strokeWidth={0.5} />
                      <label>23</label>
                      </span>
                     
                      <span>Wishlist</span>

                      {/* <FontAwesomeIcon icon={faShoppingCart} size="2x"  /> */}
                    </div>
                    <div
                      className="user-icon px-3"
                      onClick={handleLoginClick}
                      style={{
                        cursor: "pointer",
                        display:"inline-flex"
                      }}
                    >
                      {username != null ? (
                        <>
                          <span>Welcome, {username}</span>
                          <button
                            onClick={handleLogout}
                            className="btn btn-link"
                          >
                            Logout
                          </button>
                        </>
                      ) : (
                        <>
                        <User strokeWidth={0.5} />
                        <span>User Account</span>
                        </>
                        
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* <div className="col-lg-12">
          <div className="categories-bar">
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              
              {!isMenuOpen ? (
                ""
              ) : (
                <div className="w-100 d-flex justify-content-start">
                <div className=" collapse navbar-collapse">
                  <ul className="navbar-nav mt-2">
                    <li className="nav-item item-data">
                      <a className="nav-link" href="#">
                        Farm
                      </a>
                    </li>
                    <li className="nav-item item-data">
                    <a className="nav-link" href="#">
                      Wholeshale
                    </a>
                    </li>
                    <li className="nav-item item-data">
                      <a className="nav-link" href="#">
                        Skilled Resource 
                      </a>
                    </li>
                    <li className="nav-item item-data">
                      <a className="nav-link">Resturant</a>
                    </li>
                    <li className="nav-item item-data">
                      <a className="nav-link">Real State</a>
                    </li>
                    <li className="nav-item item-data">
                      <a className="nav-link">Industrial Capcity</a>
                    </li>
                  </ul>
                </div>

                <div className="contact-us">
                  <span className="p-2 m-2 border rounded">
                  <PhoneCall />
                  </span>
                   <span className="fs-5 d-flex justify-content-center">
                    +89 852471571
                   </span>
                   
                </div>
                </div>
              )}
            </div>
          </nav>
          </div>
          
        </div> */}
      </div>
      {islogin && <Login_panel />}
    </header>
  );
};

export default HeaderFile;
