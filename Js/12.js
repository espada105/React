function addProperty(obj, key, value) {
    obj[key] = value;
}

let obj = {};

addProperty(obj, "a", 1);
addProperty(obj, "b", 2);
addProperty(obj, "c", 3);


console.log(obj)

// let cat = {
//     name:"치삼이",
//     age: 4
// };

// delete cat.name;
// delete cat["age"];

// console.log(cat);
