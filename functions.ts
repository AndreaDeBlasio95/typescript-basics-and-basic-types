//                functions
// ------------------------------
// return number
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// void: no return
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));
// ------------------------------

//                function types
let combinedValues: (a: number, b: number) => number;
combinedValues = add;

console.log(combinedValues(10, 10));
// ------------------------------

//                function types and callbacks
// cb: callback, a function that is passed to another function
function addAndHandle(num1: number, num2: number, cb: (num: number) => void) {
  const result = num1 + num2;
  cb(result);
}

addAndHandle(20, 50, (result) => {
  console.log(result);
});
