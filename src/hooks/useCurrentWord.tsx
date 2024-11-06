import { useEffect, useState } from "react";

const useCurrentWord = (
  key: string,
  currentWord: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const getWordFromLocalStorage = async () => {
      const JSONstorageWord = localStorage.getItem(key);

      if (JSONstorageWord !== null) {
        const storageWord = JSON.parse(JSONstorageWord);

        console.log(storageWord, "storage");

        setValue(storageWord);
      }
    };

    getWordFromLocalStorage();
  }, [key]);

  console.log(currentWord, "current");

  // useEffect(() => {
  //   console.log(value);

  //   localStorage.setItem(key, JSON.stringify(value));
  // }, [key, value]);

  return [value, setValue];
};

export default useCurrentWord;
