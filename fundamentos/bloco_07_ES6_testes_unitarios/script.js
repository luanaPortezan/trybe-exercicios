//const sum = (value1, value2) => value1 + value2;

// const sum = (value1, value2) => value1 + value2;
// console.log(sum(2, 3));

// const sum = (value1, value2) => value1 + value2;
// console.log(sum(2, '3')); // resultado: 23

const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};
console.log(sum(2, '3'));