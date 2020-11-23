import numeral from "numeral";

export function currencyFormat(number) {
  return numeral(number).format("$ 0,0[.]00");
}

export function sortByName(arr) {
  arr.sort((b, a) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
}
