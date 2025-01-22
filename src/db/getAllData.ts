type GetAllFunction<T> = () => Promise<T[]>;

const getAllData = async <T>(getAll: GetAllFunction<T>): Promise<T[]> => {
  try {
    const list = await getAll();
    return list;
  } catch (error) {
    console.error("error", error);
    return [];
  }
};

export default getAllData;
