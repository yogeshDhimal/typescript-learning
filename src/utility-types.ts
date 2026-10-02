//


//1.Partial
interface User {
    name : string;
    age : number;
    email : string;
}

let user : Partial<User> = { //This means all the properties are optional
    name : "User A"
}
console.log(user);


