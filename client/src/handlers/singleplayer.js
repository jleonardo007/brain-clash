function handleLevelSelection(value, setSingleplayerState, userLevels) {
  switch (value) {
    case "level-two":
      if (userLevels.includes("level-one"))
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            cols: 8,
            deadline: 5,
            currentLevel: value,
            shouldRenderLevel: true,
          };
        });
      else
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            shouldRenderLevel: false,
          };
        });
      break;

    case "level-three":
      if (userLevels.includes("level-two"))
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            cols: 10,
            deadline: 5,
            currentLevel: value,
            shouldRenderLevel: true,
          };
        });
      else
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            shouldRenderLevel: false,
          };
        });
      break;

    case "level-four":
      if (userLevels.includes("level-three"))
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            cols: 12,
            deadline: 7,
            currentLevel: value,
            shouldRenderLevel: true,
          };
        });
      else
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            shouldRenderLevel: false,
          };
        });
      break;

    case "level-five":
      if (userLevels.includes("level-four"))
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            cols: 14,
            deadline: 9,
            currentLevel: value,
            shouldRenderLevel: true,
          };
        });
      else
        setSingleplayerState((prevState) => {
          return {
            ...prevState,
            shouldRenderLevel: false,
          };
        });
      break;

    case "level-one":
    default:
      setSingleplayerState((prevState) => {
        return {
          ...prevState,
          cols: 8,
          deadline: 7,
          currentLevel: "level-one",
          shouldRenderLevel: true,
        };
      });
      break;
  }
}

export { handleLevelSelection };
