//                object, Array, Tuple
/*
// object types explicit
const person2: object = {
  name: "Andrea",
  age: 28,
};

// object types explicit with properties
const person3: {
  name: string;
  age: number;
} = {
  name: "Andrea",
  age: 28,
};

// object types - Thi is the best syntax to use
const person = {
  name: "Andrea",
  age: 28,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// console.log(person.nickname); throw a error because nickname is not a property of person

// you can push a new value to the tuple, but not assign a complete new tuple to the tuple, because the tuple has a fixed length (except if you use push)

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
*/
//                Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Andrea",
    age: 28,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
