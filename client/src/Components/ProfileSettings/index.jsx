import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import AvatarUploader from "../AvatarUploader";
import "./ProfileSettings.css";

export default function ProfileSettings({ user, handleShowModal }) {
  const { username, email, avatar } = user;

  return (
    <div className="modal-container">
      <div className="profile-settings-container">
        <form className="profile-settings">
          <div className="avatar-settings">
            <AvatarUploader avatar={avatar.url} />
          </div>
          <div className="form-control">
            <label>New Username</label>
            <input type="text" name="user" placeholder={username} className="new-email-input" />
          </div>
          <div className="form-control">
            <label>New Email</label>
            <input type="email" name="email" placeholder={email} className="new-email-input" />
          </div>
          <div className="form-control">
            <label>Old Password</label>
            <input type="password" name="password" className="new-password-input" />
          </div>
          <div className="form-control">
            <label>New Password</label>
            <input type="password" name="password" className="new-password-input" />
          </div>
          <div className="settings-buttons">
            <button type="submit">Save</button>
            <button type="button">Logout</button>
            <button type="button">Delete Account</button>
          </div>
        </form>
        <button onClick={handleShowModal} className="close-settings-btn">
          <FontAwesomeIcon icon={faTimesCircle} size="2x" />
        </button>
      </div>
    </div>
  );
}
