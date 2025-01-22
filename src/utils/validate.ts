const validate = (word: string) => {
  if (word.length === 0) {
    return "Is empty";
  }
  if (word.length > 30) {
    return "Is to long";
  }
  return "";
};

export default validate;
