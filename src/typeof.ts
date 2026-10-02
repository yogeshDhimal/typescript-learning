

//typeof can create type from existing variable

//examole

const user = {
    name : "Yogesh Dhimal",
    email : "test@gmail.com",
    age : 21,
}

type User = typeof user;

const user2 : User = {
    name : "Apple",
    email : "ball",
    age : 33
}
console.log(user2);