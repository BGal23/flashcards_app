import * as XLSX from "xlsx";
import { IObject } from "../types/data";

const excelImport = (file: File): Promise<IObject[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const result = event.target?.result;

      if (result instanceof ArrayBuffer) {
        const data = new Uint8Array(result);
        const workbook = XLSX.read(data, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json<IObject>(sheet);

        const transformedData = jsonData.map((row) => {
          const lowerCaseRow = Object.fromEntries(
            Object.entries(row).map(([key, value]) => [
              key.toLowerCase(),
              value,
            ])
          );

          return {
            category: lowerCaseRow.category || "",
            original: lowerCaseRow.original || "",
            learning: lowerCaseRow.learning || "",
            active: lowerCaseRow.active ?? true,
            scale: lowerCaseRow.scale || 0,
          };
        });

        resolve(transformedData);
      } else {
        reject("File read failed or data is not in correct format.");
      }
    };

    reader.onerror = () => reject(reader.error);

    reader.readAsArrayBuffer(file);
  });
};

export default excelImport;
