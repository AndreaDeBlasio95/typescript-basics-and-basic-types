//                Union Types, Literal Types, Type Aliases

type Combinable = number | string; // Type Alias
type ConversionDescriptor = "as-number" | "as-text"; // Literal Types

function combine(
  input1: number | string, // Union Types
  input2: Combinable, // Type Alias
  resultConversion: ConversionDescriptor // Literal Types
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine(30, 26, "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Andrea", "Giulia", "as-text");
console.log(combinedNames);

//  Type Alias Example
// from this
function greet(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

// to this
type User = { name: string; age: number };

function greetWithAlias(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlderWithAlias(user: User, checkAge: number) {
  return checkAge > user.age;
}
