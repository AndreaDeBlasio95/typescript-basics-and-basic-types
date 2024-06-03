//                Type: unknown
// Description: Unknown type is a type that we can assign any value to it.
// It is similar to the any type, but it is more restrictive.
// We can't assign unknown type to other types without explicit type checking.
// We can't call methods on unknown type.
// We can't access properties on unknown type.
// We can't assign unknown type to other types without explicit type checking.
// unknown type is better than any type because it is more restrictive, and it helps us to avoid errors.
var userInput;
var userName;
userInput = 5;
userInput = "Andrea";
if (typeof userInput === "string") {
    userName = userInput;
}
//                Type: never
// Description: Never type represents the type of values that never occur.
// It is used when we know that something is never going to occur.
// For example, a function that throws an error or a function that never returns.
// function that throws an error
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
