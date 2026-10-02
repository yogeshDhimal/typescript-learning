
//Telling TypeScript to treat a value as a specific type when you know what its type is

//example 

let value : unknown = "hello";

let result = value as string;// value as string vaneko, value lai aaba string treat garne
// let result = <string>value; mathi ko line lai yesari ni lekhna sakinxa tara preffered chai mathi kai  ho     



console.log(typeof result); // this will give the tyoe as string  
 //as string le valur lai convert nai garne chai haina. kasari treat garne vanne matra ho.
//It is used when we dont know the type at first, but we know it afterwards or later. 




//Practical example

// lets say eauta ai respose xa aarey jun ko type malai tha xaina aarey suppose

let data : unknown = {
    name : "Yogesh",
    age : 21
}

//aaba malai paxi tha vayo aarey ki yesma user ko data xa vanera. 

//so

interface User {
    name : string;
    age : number;
}

let user = data as User;
console.log(user);


