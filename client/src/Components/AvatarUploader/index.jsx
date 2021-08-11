import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import useAvatarUploader from "../../hooks/use-avatar-uploader";
import "./styles.css";

export default function AvatarUploader({ avatar }) {
  const { fileRef, uploaderState, ...handlers } = useAvatarUploader();

  return (
    <div
      className="avatar-preview"
      style={{
        backgroundImage: `url(${!uploaderState.avatar ? avatar : uploaderState.avatar})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={(e) => handlers.mouseHover(e, fileRef)}
      onMouseLeave={(e) => handlers.mouseHover(e, fileRef)}
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
        onChange={(e) => handlers.avatarUpload(e)}
      />
    </div>
  );
}
