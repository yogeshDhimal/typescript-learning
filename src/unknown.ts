


//unknown and any similar ho
//It can have any type just like any


let value: unknown = "Hello";

// value.toUpperCase(); // yo any ma garda hunthyo tara unknown ma mildaina. 

//Unknown ma first ma tyo value ko type check garnu partxa anu matra tyo type ko method use garna milxa. 

//example

if (typeof value === "string") {
    console.log(value.toUpperCase());
}// yo cahi correct ho 

// any     → value directly use garna milxa
// unknown → should check the type first :  type check garera matra value use garna milxa



// Note : We prefer unknown when we don't know the type because it can hold any value but still keeps type safety.
// Before using the value, TypeScript forces us to check its type, unlike any.

//type tha xaina vane any ko satta unknown use garne