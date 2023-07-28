
var numbers = [12, 34, 45, 23, 6, 78, 54, 90];

var evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// Printing output
console.log(`Filtered Even Numbers : ${evenNumbers}`);
