"use client";
import Login_panel from "@/components/login";
import React, { useEffect, useState } from "react";
import Megamenu from "./megamenu";
import { Tooltip } from "react-bootstrap";
import Link from "next/link";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {
  ShoppingCart, User, MapPin, Search, Heart, House, Grip, CircleUserRound, ShoppingBag,
  BadgePercent, Package
} from "lucide-react";
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
          <nav className="navbar navbar-expand-lg py-0">
            <div className="container-fluid main-menu">
              <Link href="/">
                <img src="https://react.marketpro.wowtheme7.com/assets/images/logo/logo.png" style={{
                  backgroundSize: "contain"
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

                    </div>
                    <div
                      className="user-icon px-3"
                      onClick={handleLoginClick}
                      style={{
                        cursor: "pointer",
                        display: "inline-flex"
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

        {
          /* mobile menu */
          <nav class="skew-menu">
            <ul>
              <li><a class="mobile-menu" href="#"><House /> <h6>Home</h6></a></li>
              <li><a class="mobile-menu" href="#"><Grip /><h6>Catrgories</h6></a></li>
              <li><a class="mobile-menu" href="#"><CircleUserRound /><h6>Account</h6></a></li>
              <li><a class="mobile-menu" href="#"><BadgePercent /><h6>Offers</h6></a></li>
              <li><a class="mobile-menu" href="#"><Package /><h6>My Order</h6></a></li>
            </ul>
          </nav>
        }

        {
          <div className="mobile-top-header">
            <div className="top-bar">
              <img src="https://react.marketpro.wowtheme7.com/assets/images/logo/logo.png" />

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

                </div>
              </div>

            </div>

            <div className="second-bar">
              <div id="mobiletogglethanks">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Info</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        }

      </div>
      {islogin && <Login_panel />}
    </header>
  );
};

export default HeaderFile;
