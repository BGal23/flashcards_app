import {
  FaCamera,
  FaFileExcel,
  FaFilePdf,
  FaRegFileExcel,
} from "react-icons/fa";
import useStyles from "./styles";
import Filters from "../Filters/Filters";
import { useEffect, useState } from "react";
import { ISort } from "../../types/data";
import color from "../../assets/colors";
import FileElement from "./FileElement/FileElement";
import FileExport from "./FileExport/FileExport";

const filesArray: ISort[] = [
  {
    id: 1,
    activate: "import-excel",
    icon: <FaFileExcel size={"2.5em"} color={color.fontBlack} />,
  },
  {
    id: 2,
    activate: "import-pdf",
    icon: <FaFilePdf size={"2.5em"} color={color.fontBlack} />,
  },
  {
    id: 3,
    activate: "import-camera",
    icon: <FaCamera size={"2.5em"} color={color.fontBlack} />,
  },
  {
    id: 4,
    activate: "export-excel",
    icon: <FaRegFileExcel size={"2.5em"} color={color.fontBlack} />,
  },
];

const Files = () => {
  const [usedFilter, setUsedFilter] = useState<string>("import-excel");
  const classes = useStyles();

  const sortList = (sort: string) => {
    switch (sort) {
      case "import-excel":
        return (
          <FileElement
            type={"Excel"}
            formats={["xlsx", "xls", "numbers"]}
            template={"https://bgal23.github.io/flashcards_app/Excel_Temp.xlsx"}
            icon={<FaFileExcel size="1.2em" />}
          />
        );
      case "import-pdf":
        return (
          <FileElement
            type={"Pdf"}
            formats={["pdf"]}
            template={"https://bgal23.github.io/flashcards_app/Pdf_Temp.pdf"}
            icon={<FaFilePdf size="1.2em" />}
          />
        );
      case "import-camera":
        return (
          <h3 style={{ textAlign: "center", color: color.fontBlack }}>
            Coming soon
          </h3>
        );
      case "export-excel":
        return <FileExport />;
      default:
        break;
    }
  };

  useEffect(() => {
    if (usedFilter) sortList(usedFilter);
  }, [usedFilter]);

  return (
    <div className={classes.container}>
      <Filters
        usedFilter={usedFilter}
        setUsedFilter={setUsedFilter}
        element={filesArray}
      />
      {sortList(usedFilter)}
    </div>
  );
};

export default Files;
