const getAllCategories = async (
  dbName: string,
  storeName: string
): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName);

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(storeName, "readonly");
      const store = transaction.objectStore(storeName);
      const index = store.index("category");

      const uniqueKeys: Set<string> = new Set();

      const cursorRequest = index.openKeyCursor();

      cursorRequest.onsuccess = (event: Event) => {
        const cursor = (event.target as IDBRequest<IDBCursor>).result;

        if (cursor) {
          if (cursor.key !== "") uniqueKeys.add(cursor.key as string);
          cursor.continue();
        } else {
          resolve(Array.from(uniqueKeys));
        }
      };

      cursorRequest.onerror = () => {
        reject(new Error("Error during cursor iteration"));
      };

      transaction.onerror = () => {
        reject(new Error("Transaction error"));
      };
    };

    request.onerror = () => {
      reject(new Error("Failed to open the database"));
    };
  });
};

export default getAllCategories;
