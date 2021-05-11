import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import validateImage from "../../utils/validateImage";
import "./AvatarUploader.css";

function AvatarUploader({ avatar }) {
  const fileRef = useRef(null);
  const [uploaderState, setUploaderState] = useState({
    avatar: "",
    toggleButton: true,
  });

  function handleMouseHover(e) {
    if (e.type === "mouseleave" && fileRef.current.files[0])
      setUploaderState((prevState) => {
        return {
          ...prevState,
          toggleButton: false,
        };
      });
    if (e.type === "mouseenter")
      setUploaderState((prevState) => {
        return {
          ...prevState,
          toggleButton: true,
        };
      });
  }

  function handleAvatarUpload(e) {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", (e) => {
      setUploaderState((prevState) => {
        return {
          ...prevState,
          avatar: e.target.result,
        };
      });
    });

    if (file) {
      if (validateImage(file)) reader.readAsDataURL(file);
      else alert("Upload a image only!");
    }
  }

  return (
    <div
      className="avatar-preview"
      style={{
        backgroundImage: `url(${!uploaderState.avatar ? avatar : uploaderState.avatar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={(e) => handleMouseHover(e)}
      onMouseLeave={(e) => handleMouseHover(e)}
    >
      {uploaderState.toggleButton && (
        <button
          type="button"
          className="avatar-upload-btn"
          title="Upload an avatar"
          onClick={() => fileRef.current.click()}
        >
          <FontAwesomeIcon icon={faCamera} />
        </button>
      )}
      <input
        type="file"
        name="avatar"
        accept=".png, .jpeg,.jpg, .webp"
        style={{ display: "none" }}
        ref={fileRef}
        onChange={(e) => handleAvatarUpload(e)}
      />
    </div>
  );
}

export default AvatarUploader;
