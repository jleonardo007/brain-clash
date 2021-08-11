import { Link } from "react-router-dom";
import { ProfileThumbnail } from "../Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export default function Navbar({ user }) {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/">
          Single player <FontAwesomeIcon icon={faGamepad} />
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/multiplayer">
          Multiplayer <FontAwesomeIcon icon={faGlobeAmericas} />
        </Link>
      </li>
      <li className="navbar-item">
        <Link to="/profile">
          <ProfileThumbnail avatar={user.avatar} />
        </Link>
      </li>
    </ul>
  );
}
