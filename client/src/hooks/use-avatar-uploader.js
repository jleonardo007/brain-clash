import { useState, useRef } from "react";
import { mouseHover, avatarUpload } from "../handlers/avatar-uploader";

export default function useAvatarUploader() {
  const fileRef = useRef(null);
  const [uploaderState, setUploaderState] = useState({
    avatar: "",
    toggleButton: true,
  });

  return {
    uploaderState,
    fileRef,
    mouseHover: (e, fileRef) => mouseHover(e, fileRef, setUploaderState),
    avatarUpload: (e) => avatarUpload(e, setUploaderState),
  };
}
