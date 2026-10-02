
//yo normal generic function ho 
function getValues<T>(value : T) : void {
    console.log(value);
}
//yo function ma aaile kunai pani constraints/restriction xaina. T juani type pani huna sakxa



//genereic constraints. constrainst ko lagi extends use hunxa
function getValues2<T extends { name : string }>(Value : T) : void {
    console.log(Value);
}
//{ name : string } . yo vaneko T eauta object ho, jasma name vanne property hunai parxa


getValues2({ name : "Yogesh" }); // name yesma constraints ho. Matlab, yesma aaru j hos ya nahos, name chai hunai parxa
getValues2({age : 10, name : "Sanket"});//yo pani correct xa. 
// getValues2({age : 22}); yesle error dinxa. Beause trhere is no name property here

//T is flexible, but it must have name: string






//Restricting whole generics to a on type. 
//T extends string ko matlab k ho vane, sabai stringhunu parxa
function getValues3<T extends string>(value : T) : void {
    console.log(value);
}
getValues3("Apple");
getValues3("Ball");


//This will not work
// getValues3(21);//Because 21 is not a string and we already said that t must be a string