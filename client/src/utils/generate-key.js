import { v4 as uuid } from "uuid";

function generateKey(itemName, index) {
  /* if (typeof itemName === "string") return `${itemName}_index:${index}_${new Date().getTime()}`;
  else throw new Error("Item name must be a string"); */

  return uuid();
}

export default generateKey;
