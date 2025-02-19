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

        const jsonData = XLSX.utils.sheet_to_json<Record<string, undefined>>(
          sheet,
          {
            header: 1,
          }
        );

        if (jsonData.length === 0) {
          reject("Sheet is empty.");
          return;
        }

        jsonData.shift();

        const transformedData = jsonData
          .filter((row) => row[0] && row[1])
          .map((row) => {
            const transformedRow: IObject = {
              original: row[0] || "",
              learning: row[1] || "",
              category: row[2] || "",
              description: row[3] || "",
              active: correctActiveValue(row[4]),
              scale: Number(row[5]) || 0,
            };

            return transformedRow;
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

const correctActiveValue = (value: string | boolean | undefined) => {
  if (typeof value === "string") {
    console.log(typeof value);

    const lowerCaseValue = value.toLowerCase().trim();
    if (lowerCaseValue === "false") {
      return false;
    } else return true;
  } else if (value === true) return true;
  else return false;
};

export default excelImport;
