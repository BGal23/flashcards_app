import getAllCategories from "./getAllCategories";

const checkCategories = async () => {
  try {
    return await getAllCategories("MyDB", "data");
  } catch (error) {
    console.error("Error checking store data:", error);
  }
};

export default checkCategories;
