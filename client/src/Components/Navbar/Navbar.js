import { Link } from "react-router-dom";

import { ProfileThumbnail } from "../Profile/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faGamepad,
  faUserFriends,
  faTrophy,
  faGlobeAmericas,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar({ user }) {
  return (
    <ul className="navbar">
      {/**
         * Home Route not currently not necesary!
         * 
         *    <li className="navbar-item">
                   <Link to="/">
                    Home <FontAwesomeIcon icon={faHome} />
                  </Link>
                </li>
         */}

      <li className="navbar-item">
        <Link to="/singleplayer">
          Single player <FontAwesomeIcon icon={faGamepad} />
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/multiplayer">
          Multiplayer <FontAwesomeIcon icon={faGlobeAmericas} />
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/ranking">
          Ranking <FontAwesomeIcon icon={faTrophy} />
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/compis-list">
          Compis <FontAwesomeIcon icon={faUserFriends} />
        </Link>
      </li>
      <li className="navbar-item">
        <FontAwesomeIcon icon={faBell} />
        <span className="new-notifications-counter">2</span>
      </li>
      <li className="navbar-item">
        <Link to="/profile">
          <ProfileThumbnail avatar={user.avatar} />
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
