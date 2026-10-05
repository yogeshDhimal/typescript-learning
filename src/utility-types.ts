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




//3.Pick creates the new type by selecting only the properties we want from existing type. 

type User2 = Pick<User, "age" | "email"> // Now this user 2 contain those types 

const userc: User2 = {
    email: "Yogesh",
    age: 21
};

console.log(userc);


// 4. Omit: it creates a new typ by removung the properties that we do not want.
// example 

interface Fruits {
    name : string;
    price : number;
}

type FruitsWithoutname = Omit<Fruits, "name">

let fruit : FruitsWithoutname = {
    price : 2000
}
console.log(fruit);




// 5. Record
//Record creates the object with specific keys ans specific value type. 

type Age = Record<string, number>; //Here it means key is string and value is number.

const age : Age = {
    age : 35
}

console.log(age)


