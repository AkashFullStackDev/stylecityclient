import "./navbar.css";
import { Link } from "react-router-dom"; // To use navigation
import { FiMenu } from "react-icons/fi"; // To use menu icon (npm install react-icons)
import { MdClose } from "react-icons/md"; // To use close menu icon (npm install react-icons)
import { PiShoppingCart } from "react-icons/pi"; // To use cart icon (npm install react-icons)
import { useSelector, useDispatch } from "react-redux";
import { validateUser } from "../../store/slices/userSlice";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useState } from "react";
import { removeUser } from "../../store/slices/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const storageUser = JSON.parse(localStorage.getItem("userData"));
  storageUser && !user.isLoggedIn ? dispatch(validateUser(storageUser)) : null;

  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };
  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };

  const toggleProfileDropdown = (e) => {
    console.log("show");
    setProfileDropdown(!profileDropdown);

  };

  const handleLogout = () => {
    console.log("Logout");
    localStorage.removeItem("userData");
    dispatch(removeUser());
    toggleProfileDropdown();
  }


  return (
    <nav>
      {/* *********************Sidebar**************************** */}
      <ul className="sidebar nav">
        <li onClick={hideSidebar}>
          <Link to="#">
            <MdClose fontSize={25} />
          </Link>
        </li>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/product">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
        {user.isLoggedIn ? (
            <HiOutlineUserCircle
              className="user-icon"
              onClick={toggleProfileDropdown}
            />
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
          {profileDropdown?<ul className="profile-dropdown">
            <li>Profile</li>
            <li onClick={handleLogout}>Logout</li>
          </ul>: null}
        </li>
        <li>
          <Link to="/cart">
            <PiShoppingCart fontSize={25} />
          </Link>
        </li>
      </ul>

      {/* *******************Top Navigation Bar************************************* */}
      <ul className="nav">
        <li>
          <Link to="/">
            <h1>S</h1>TYLE <h1>C</h1>ITY
          </Link>
        </li>
        <li className="hideOnMobile">
          <Link to="/">HOME</Link>
        </li>
        <li className="hideOnMobile">
          <Link to="/product">PRODUCTS</Link>
        </li>
        <li className="hideOnMobile">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="hideOnMobile">
          <Link to="/contact">CONTACT</Link>
        </li>
        <li className="hideOnMobile">
          {user.isLoggedIn ? (
            <HiOutlineUserCircle
              className="user-icon"
              onClick={toggleProfileDropdown}
            />
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
          {profileDropdown?<ul className="profile-dropdown hideOnMobile">
            <li>Profile</li>
            <li onClick={handleLogout}>Logout</li>
          </ul>: null}
        </li>
        <li className="hideOnMobile">
          <Link to="/cart">
            <PiShoppingCart fontSize={25} />
          </Link>
        </li>
        <li className="menu-button" onClick={showSidebar}>
          <Link to="#">
            <FiMenu fontSize={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
