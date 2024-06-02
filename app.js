//                object, array
// console.log(person.nickname); throw a error because nickname is not a property of person
// object types explicit
var person2 = {
    name: "Andrea",
    age: 28,
};
// object types explicit with properties
var person3 = {
    name: "Andrea",
    age: 28,
};
// object types - Thi is the best syntax to use
var person = {
    name: "Andrea",
    age: 28,
    hobbies: ["Sports", "Cooking"],
};
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
