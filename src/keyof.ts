

//keyof : keyof give names of allproperties from type. 

interface User {
    name : string;
    age : number;
}

type keys1 = keyof User; //we start with type. //yesle user ko sabai properties dinxa





// interface User {
//     name: string;
//     age: number;
// }
  
const user: User = {
    name: "Yogesh",
    age: 21
};

type keys = keyof User;

// let key1 : keys = "name";
// let key2 : keys = "age";

// console.log(user[key1]); //This goives yogesh. 


function getValue(user : User, key : keys) {
    return user[key];
}

let age = getValue(user, "age");
console.log(age);