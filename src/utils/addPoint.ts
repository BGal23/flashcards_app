import { IFinalObject } from "../types/data";
import { getFromLocalStorage } from "./localStorage";

const addPoint = async (id: string, isAddPoint: boolean) => {
  const array: IFinalObject[] = await getFromLocalStorage("data");
  const index: number | undefined = array.findIndex(
    (element) => element.id === id
  );

  const newElement: IFinalObject = {
    ...array[index],
    scale: isAddPoint ? array[index].scale + 1 : array[index].scale - 1,
  };

  if (index !== -1) {
    array.splice(index, 1, newElement);
    return localStorage.setItem("data", JSON.stringify(array));
  } else {
    return console.error("Data error");
  }
};

export default addPoint;
