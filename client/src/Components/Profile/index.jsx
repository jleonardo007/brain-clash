import { useState } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import ProfileSettings from "../ProfileSettings";
import User from "../User";
import "./Profile.css";

const modalroot = document.getElementById("modal-root");

export function ProfileThumbnail({ avatar }) {
  return (
    <div
      className="profile-thumbnail"
      style={{
        backgroundImage: `url(${avatar.url})`,
      }}
    ></div>
  );
}

export function Profile({ user, token, Navbar, dispatch }) {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <section className="profile">
      {Navbar}
      <User user={user}>
        <div className="settings-btn-container">
          <button
            className="profile-settings-btn"
            title="Profile settings"
            onClick={handleShowModal}
          >
            <FontAwesomeIcon icon={faCog} size="2x" />
          </button>
        </div>
      </User>
      {showModal &&
        createPortal(<ProfileSettings user={user} handleShowModal={handleShowModal} />, modalroot)}
    </section>
  );
}
