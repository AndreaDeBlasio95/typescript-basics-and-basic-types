//                number, string, boolean

function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const result = num1 + num2;
  if (showResult === true) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// Type inference
const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

// Type assignment
let number3: number;
number3 = 5;

add(number1, number2, printResult, resultPhrase);
