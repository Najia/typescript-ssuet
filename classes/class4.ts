var a = {p1: 2, p2:3};
var b = {p1: 2, p2:3};

// explicit type-casting :

// using <any> you can use explicit type casting 

// purpose : if there's a situation in which you create an object and in that particular situation you dont need all the properties so we can 
//use this <any> in the object to override it instead of creating a new obj for that partcular situation
// example :

var obj =  {id: 1, name: "property1"};
obj = <any> {id:2};


// ENUMS: if you dont define the values so it will asssign values in numbers (ascending form),
// it basically means assigning numbers to items. 
//ENUMS are used to create data-types of your own type, to define libraries 

enum Vechicle {
	reverse = 9,
	forward=8,
	stop =7}

if (Vechicle.stop == 7){alert("true");}

else {alert("false");}

// anonymous self calling functions ( recursive functions)- in javascript we use this because there isnt any concept of modules 
// why modules are needed : to make sure that different code snippets dont interact with each other causing chaos 

// Js anonymous self calling functions :

(function(){}) ();

(function(num){})(1);

// Const ENUMS : saves performance/memory, makes your program efficient 
//i.e if a property isnt being used so it won't generate it in javascript 

const enum VehicleA{
	reverse = 9,
	forward=8,
	stop =7}
	
	alert(VehicleA.forward);



// Functions 

// type-safety in type-script

function sum(a: number,b: string){
	return a+b;
}

alert(sum(1,"1"));

alert(sum(1,<any>2)); // for this particular line only 


function sumB(a: number,b: number) : number{  // this is the return type of function
	return a+b;
}

var result = sumB(1,1).toString(); // the result was "2" it added two integers and converted the result to string 

// Anonymous Functions 

// how to call anonymous funcs : save the func in a varibale like this 

var anonymous = function(){}


// whenever a page is loaded the js file loads all functions in memory but doesnt load all variables 

// explicit type casting

// can do like as <string>, <number> as well 



// Optional parameter 

function concat_string(a : string, b: string, c?:string) { /// the question mark makes the variable optional and we should always add ? from right side 
	
	return a+b+c;
	// or we can handle like this as well
	
	//return (a || "") + (b || "") + (c || "")
	
}

concat_string("a","b");
