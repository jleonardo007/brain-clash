import validateImage from "../utils/validateImage";

export function mouseHover(e, fileRef, setUploaderState) {
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

export function avatarUpload(e, setUploaderState) {
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
