export default function orderByProps(object, setings) {
  function sravn(a, b) {
    const indA = setings.indexOf(a.key);
    const indB = setings.indexOf(b.key);
    if ((indA === -1) && (indB === -1)) { // Оба параметра не найдены в порядке сортировки
      return a.key.localeCompare(b.key);
    } if (indB === -1) { // Не найден параметр B
      return -1;
    } if (indA === -1) { // Не найден параметр A
      return 1;
    }
    return indA - indB; // Оба параметра найдены, сравниваем их индексы
  }
  const result = [];

  Object.entries(object).forEach((element) => {
    result.push({ key: element[0], value: element[1] });
  });

  result.sort(sravn);

  return result;
}
