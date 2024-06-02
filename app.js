//                Union Types, Literal Types, Type Aliases
function combine(input1, // Union Types
input2, // Type Alias
resultConversion // Literal Types
) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine(30, 26, "as-number");
console.log(combinedStringAges);
var combinedNames = combine("Andrea", "Giulia", "as-text");
console.log(combinedNames);
//  Type Alias Example
// from this
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function greetWithAlias(user) {
    console.log("Hi, I am " + user.name);
}
function isOlderWithAlias(user, checkAge) {
    return checkAge > user.age;
}
