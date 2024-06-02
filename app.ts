//                object, Array

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
};

// console.log(person.nickname); throw a error because nickname is not a property of person

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
