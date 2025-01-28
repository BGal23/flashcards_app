const checkTotal = async (
  dbName: string,
  storeName: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName);

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const countRequest = store.count();

      countRequest.onsuccess = () => {
        resolve(countRequest.result > 0);
      };

      countRequest.onerror = () => {
        reject(countRequest.error);
      };
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
};

export default checkTotal;
