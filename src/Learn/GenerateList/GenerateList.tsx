import { useState } from "react";
import { VariableSizeList } from "react-window";
import image_1 from "../../images/375x210_744869dc-81ab-4bb7-9051-37e824929797.jpeg";
import image_2 from "../../images/425x239_744869dc-81ab-4bb7-9051-37e824929797.jpeg";
import image_3 from "../../images/700x394_744869dc-81ab-4bb7-9051-37e824929797.jpeg";
import image_4 from "../../images/1000x563_744869dc-81ab-4bb7-9051-37e824929797.jpeg";
import image_5 from "../../images/1300x731_744869dc-81ab-4bb7-9051-37e824929797.jpeg";
const images = [image_1, image_2, image_3, image_4, image_5];

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
  }) => (
    <div style={{ ...style }}>
      <p>Item {list[index].id}</p>
      <img src={images[2]} alt={`photo-${index}`} />
    </div>
  );

  const handleChangeNumber = (event: React.ChangeEvent<HTMLSelectElement>) => {
    resetList();
    setSelectedNumber(Number(event.target.value));
  };

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    resetList();
    setSelectedType(event.target.value);
  };

  const getItemSize = (index: number) => {
    const imgHeights = [210, 239, 394, 563, 731];
    const baseTextHeight = 54;
    const imgHeight = imgHeights[index];
    return baseTextHeight + imgHeight;
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
      {selectedType === "normal" ? (
        <div style={{ width: "100%", overflowY: "auto" }}>
          {list.map((element, index) => (
            <Row key={element.id} index={index} />
          ))}
        </div>
      ) : (
        <VariableSizeList
          height={1000}
          itemCount={list.length}
          itemSize={() => getItemSize(2)}
          width="100%"
        >
          {({ index, style }) => {
            return <Row index={index} style={style} />;
          }}
        </VariableSizeList>
      )}
    </>
  );
};

export default GenerateList;
