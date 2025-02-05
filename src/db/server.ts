export const DBConfig = {
  name: "MyDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "data",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "original", keypath: "original", options: { unique: true } },
        { name: "learning", keypath: "learning", options: { unique: true } },
        { name: "category", keypath: "category", options: { unique: false } },

        {
          name: "description",
          keypath: "description",
          options: { unique: false },
        },
        { name: "active", keypath: "active", options: { unique: false } },
        { name: "scale", keypath: "scale", options: { unique: false } },
      ],
    },
  ],
};
