import * as XLSX from "xlsx";
import { IObject } from "../types/data";

const excelExport = (newExcelFile: IObject[]) => {
  if (newExcelFile.length === 0) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([[]]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Empty");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    return new Blob([excelBuffer], { type: "application/octet-stream" });
  }

  const filteredData = newExcelFile.map((item) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...rest } = item;
    return rest;
  });

  const worksheet = XLSX.utils.json_to_sheet(filteredData);
  const headers = Object.keys(filteredData[0] || {}).map(
    (key) => key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()
  );

  XLSX.utils.sheet_add_aoa(worksheet, [headers], { origin: "A1" });

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

  const excelBuffer = XLSX.write(workbook, {
    bookType: "xlsx",
    type: "array",
  });
  return new Blob([excelBuffer], { type: "application/octet-stream" });
};

export default excelExport;
