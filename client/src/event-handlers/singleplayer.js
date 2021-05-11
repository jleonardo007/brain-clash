function handleLevelSelection(e, setScore) {
  const value = e.target.value;

  switch (value) {
    case "level-one":
      setScore((prevState) => {
        return {
          ...prevState,
          cols: 8,
          countDown: 7,
        };
      });
      break;

    case "level-two":
      setScore((prevState) => {
        return {
          ...prevState,
          cols: 8,
          countDown: 5,
        };
      });
      break;

    case "level-three":
      setScore((prevState) => {
        return {
          ...prevState,
          cols: 10,
          countDown: 5,
        };
      });
      break;

    case "level-four":
      setScore((prevState) => {
        return {
          ...prevState,
          cols: 12,
          countDown: 7,
        };
      });
      break;

    case "level-five":
      setScore((prevState) => {
        return {
          ...prevState,
          cols: 14,
          countDown: 9,
        };
      });
  }
}

export { handleLevelSelection };
