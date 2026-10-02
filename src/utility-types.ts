//



interface User {
    name : string;
    age : number;
    email : string;
}


//1.Partial
let user : Partial<User> = { //This means all the properties are optional
    name : "User A"
}
console.log(user);


//2.Required
let user2 : Required<User> = { //This means all the property are compulsary.even if they were optional in the interface, they are compuilsary here beause of Required
    name : "User B",
    age : 22,
    email : "userb@gmail.com"
}
console.log(user2);