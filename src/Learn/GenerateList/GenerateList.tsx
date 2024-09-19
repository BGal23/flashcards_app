import { useState } from "react";
import { FixedSizeList } from "react-window";

type List = {
  id: number;
};

const GenerateList = () => {
  const [selectedNumber, setSelectedNumber] = useState<number>(10000);
  const [selectedType, setSelectedType] = useState<string>("normal");
  const [list, setList] = useState<List[]>([]);

  const getList = (number: number) => {
    const newList = [];
    for (let i = 0; i < number; i++) {
      newList.push({ id: i });
    }
    setList(newList);
  };

  const resetList = () => {
    setList([]);
  };

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style?: React.CSSProperties;
  }) => <div style={{ ...style, height: 20 }}>Item {list[index].id}</div>;

  const handleChangeNumber = (event: React.ChangeEvent<HTMLSelectElement>) => {
    resetList();
    setSelectedNumber(Number(event.target.value));
  };

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    resetList();
    setSelectedType(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="number-select">
          Select the number of generated items:
        </label>{" "}
        <select
          id="number-select"
          onChange={handleChangeNumber}
          value={selectedNumber}
        >
          <option value={10000}>10,000</option>
          <option value={20000}>20,000</option>
          <option value={50000}>50,000</option>
        </select>
        <br />
        <br />
        <label htmlFor="render-type">Choose how to render items:</label>{" "}
        <select
          id="render-type"
          onChange={handleChangeType}
          value={selectedType}
        >
          <option value={"normal"}>Normal</option>
          <option value={"window"}>Window</option>
        </select>
        <br />
        <br />
        <div>
          <button onClick={() => getList(selectedNumber)} type="button">
            Generate!
          </button>{" "}
          <button onClick={resetList} type="button">
            Reset!
          </button>
        </div>
      </div>
      <br />
      <div
        style={{
          width: 300,
          height: 500,
          padding: 3,
          border: "1px solid black",
        }}
      >
        {selectedType === "normal" ? (
          <div style={{ height: 500, width: "100%", overflowY: "auto" }}>
            {list.map((element, index) => (
              <Row key={element.id} index={index} />
            ))}
          </div>
        ) : (
          <FixedSizeList
            height={500}
            itemCount={list.length}
            itemSize={20}
            width={300}
          >
            {({ index, style }) => <Row index={index} style={style} />}
          </FixedSizeList>
        )}
      </div>
    </>
  );
};

export default GenerateList;
