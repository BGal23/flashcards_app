import * as pdfjs from "pdfjs-dist";
import { IObject } from "../types/data";

pdfjs.GlobalWorkerOptions.workerSrc =
  "//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js";

const pdfImport = (file: File): Promise<IObject[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (event) => {
      const result = event.target?.result;

      if (result instanceof ArrayBuffer) {
        try {
          const pdf = await pdfjs.getDocument({ data: result }).promise;
          const numPages = pdf.numPages;
          let allText = "";

          for (let pageNum = 1; pageNum <= numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const textContent = await page.getTextContent();
            const textItems = textContent.items as Array<{ str: string }>;
            allText += textItems.map((item) => item.str).join(" ") + "\n";
          }

          const lines = allText
            .split("\n")
            .filter((line) => line.trim() !== "");
          const transformedData = lines
            .map((line) => {
              const parts = line.split("-");
              if (parts.length === 2) {
                return {
                  original: parts[0].trim(),
                  learning: parts[1].trim(),
                  category: "",
                  description: "",
                  active: true,
                  scale: 0,
                };
              }

              return null;
            })
            .filter((item) => item !== null) as IObject[];

          if (transformedData.length === 0) {
            reject("No valid data found in PDF.");
          } else {
            resolve(transformedData);
          }
        } catch (error) {
          reject("Error reading PDF: " + error);
        }
      } else {
        reject("File read failed or data is not in correct format.");
      }
    };

    reader.onerror = () => reject(reader.error);

    reader.readAsArrayBuffer(file);
  });
};

export default pdfImport;
