import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import "./AvatarUploader.css";

function AvatarUploader() {
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
    const allowedExtensions = ["jpeg", "jpg", "png", "webp"];
    const file = e.target.files[0];
    let name = null;
    let fileExtension = null;

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
      reader.readAsDataURL(file);
      name = file.name;
      fileExtension = name.split(".").pop();

      console.log(fileExtension);

      if (!allowedExtensions.includes(fileExtension)) {
        alert("file type not allowed");
      }
    }
  }

  return (
    <div
      className="avatar-preview"
      style={{
        backgroundImage: `url(${uploaderState.avatar})`,
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
