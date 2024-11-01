const validateWord = (word: string) => {
  if (word.length === 0) {
    return "Is empty";
  }
  if (word.length < 2) {
    return "Is to short";
  }
  if (word.length > 30) {
    return "Is to long";
  }
  return "";
};

export default validateWord;
