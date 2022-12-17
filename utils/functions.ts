export const getError = (obj: any, key: string) => {
  return obj[key];
};

export const capitalizeFieldName = (str: string) => {
  let match = str.match(/[A-Z]/g);
  if (match !== null) {
    let idxMatch = str.indexOf(match[0]);
    let splitTxt = str.split(str[idxMatch]);
    return capitalizeFirstLetter(splitTxt[0]) + " " + str[idxMatch] + splitTxt[1];
  }
  return capitalizeFirstLetter(str);
};

const capitalizeFirstLetter = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};
