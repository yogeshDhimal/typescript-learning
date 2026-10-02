//
//Generic : A way to create reusuable code that can work with different data types.



//The problem this functions only works for numbers. 
function getvalue(value : number) : number {
    return value;
};

//Different data types sanga kam garne function banauda , we writye this :
function getvalue2<T> (value :T) : T { // T vaneko placeholder ho. Hamile function use garda define garne T lai
    return value;
}; 

//Like this : 
let numberValue = getvalue2<number>(20);
let stringValue = getvalue2<string>("Yogesh");

console.log(numberValue); // output 20 dinxa
console.log(stringValue); // output Yogesh dinxa

//Note : we do not always need to write getValue<number>(20), jasto maile getValue2(20) matra lekhda pani ts le aafai bujhxa tyo number ho vanera. both are valid. 


// any vanda generic better hunxa because generics greserve type information. any le type safety hataindixa.


// Multiple type parameter in generics. 

function multiple <T, U> (value1 : T, Value2 : U) : [T, U] {
    return [value1, Value2];
};

let result = multiple(12, "Slime");
console.log(result);




//Generics with array

function myValue<T> (items : T[]) : T[] { // purai array retunr garne vane T[], kuai eauta valur return garne vaye T matra
    return items; // kunai eauta value chaiyo vane position specify garne, like itmes[0] 
}

let answer = myValue(["Apple", 10, 67, "Dog"]);
console.log(answer);





//generics with objects
function getObject<T>(obj : T) : T {
    return obj;
}

// aaba yo banauna milxa 

//ts le aafai bujhxa T vaneko name : string, age : number vanera
let user = getObject({
    name : "Yogesh",
    age : "69",
})

console.log(user);





///Generics interfaces
//An interface that can work with different types

interface Box<T> {
    value : T;//yesma chai semi colon use garne
} // yesma semi colon chaiyena. 




//T ko that ma string, number kita junai type in rakhda vayo. 
let result1 : Box<string> = {
    value : "Value",
};
console.log(result1); 


let result2 : Box<number> = {
    value : 222,
}
console.log(result2);



//Generic Type Aliases.
type Animal <T> = {
    name : T;
};

let animal : Animal<string> = {
    name : "Buffalo",
} ;
console.log(animal);

let animal2: Animal<number> = {
    name: 123,
};
console.log(animal2);

//Genrics type aliases and generic interface similar ho. Concept eautai ho. 
