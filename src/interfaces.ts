

// interface : A way to define what an object should have
//object ko structure define garxa


//type vs interface
// type can be used for objects, union, tuples, literals, etc. 
//interface are mainly for objects.


interface User {
    uid : number,
    name : string,
    email : string,
};

let user : User = {
    name : "Yogesh Dhimal",
    uid : 100001,    // jasto order ma dida paniu hunxa. kei farak pardaina. 
    email : "yogesh@mail.com"
};
console.log(user);

//interfaces are reusuble also
let user2 : User = {
    uid : 100002,
    name : "user2",
    email : "user2@gmail.com"
};
console.log(user2);



//Optional properties in intetfaces
//interface ma pani optional parameter dina milxa

interface Book {
    name : string,
    releaseYear : number,
    author : string,
    price? : number,
};

let book : Book = {
    name : "The Lost Beauty",
    releaseYear : 1998,
    author : "Unknown", 
    // price : 2765, here we do not get any error since price is optional property.
};
console.log(book);





//Interface extension
// one interface can inherit propertis from another interface

interface User3 {
    name : string,
    email : string,
};

//aarko interface jun ma user ma vako proiperties pani chaiyeko xa vane, we can do the following : 
interface Admin extends User3 {
    permissions : string[],
};
//yeti garepaxi User3 ma vako properties Admin ma pani aauxa. 
//example


//yo tala ko ma kei error aaudaina
let admin : Admin = {
    name : "Admin Admin",
    email : "admin@admin.com",
    permissions : ["permissioon1", "Permission2"],
};
console.log(admin);