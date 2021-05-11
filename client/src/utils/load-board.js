import cardsCollection from "./cards-collection";

function loadBoard(boardCols) {
  const BOARD_ROWS = 8;
  const cardsAmound = boardCols * BOARD_ROWS;
  const cardsCollectionSlice = cardsAmound / 2;
  const boardSlice1 = cardsCollection.slice(0, cardsCollectionSlice);
  const boardSlice2 = cardsCollection.slice(0, cardsCollectionSlice).reverse();

  return [...boardSlice1, ...boardSlice2];
}

export default loadBoard;
