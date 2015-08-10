enum doorstate {
	open,
	close
	
}

// advantages of enum : enables human readable declarations 
 // if we dont give any values while declaring an enum its by default set in the sequence of 0,1 .....
 // we cant re-declare the enums , thats one differnce between enums and objects 
 // you can however extend an enum :
 
 enum doorstate {
	A=2,
	B1=3
	
}

// if you are giving values then you should assign values to all elements otherwise you might end up creating ambiguity 

// for examle we have an ad enum 

enum AD{
	pending = 0,
	approved = 1,
	blocked = 2,
	deletedbyuser=3,
	deletedbyadmin=3,
	
}

// ENUM arrays

var a  = [doorstate,doorstate,doorstate,doorstate]
a[0].close,

// const enums 

// type-script functions are strongly typed and has strong return types unlike js 
function f1(a:number,b:number):number { // after ) with a : we declare the return type of a function 
	
	return a+b;
}

function f2(a:number,b:number):string { // after ) with a : we declare the return type of a function 
	
	return (a+b).toString();
}

// OR

function f3(a:number,b:number):string { // after ) with a : we declare the return type of a function 
	
	return <any>(a+b); // the return type will be string 
}


//Number(variable) : converts the variable to number

// anonynymous func

var af = function(){}
af();

//usage of anonymous function : its being saved in a variable
// where as in normal functions they are loaded in the memory whenever you webpage loads 
// you can nullify the variable 

var ab : Function; // thats a function data-type with capital F now var a's type is function

// function-type 

var a1 : ()=>number; // there should be a function returning number 

a1=function():number{
	return 1;
}

/// error : beacuse the pattern is different 
a1=function():string{
	return "avf";
}
// optional parameters 

//from the right side, first there are required then optional..

// default parameters from R-L

function sum (a,b=0,c=0,d=0,e=0){
	alert ("a:" +a)
	alert ("b:" +b)
	alert ("c:" +c)
	alert ("d:" +d)
	alert ("e:" +e)
	
}

sum(1,2); // result a and b will be 1,2 and the rest will be 0

// example : slider function 

function slider (height,width,bgcolor){}

slider(100,100,"blue");

//if user does this 

//slider(); // it wont work so we can use default parameters in this case 

function slider2(height=330,width=200,bgcolor="blue"){}

slider2(200,150); // output will be 200,150,blue

slider2(undefined,540,undefined); /// it will fetch the default values inplace of undefined this way we can change the width only 

// rest parameters:

function sumparams(a,b){}

sumparams(1,2);

// in typescript we can add additional parameters

function sumparameters2(...Args){
	
	alert(Args);
}

sumparameters2(1,2,3,4,4,5);

function calculations(op,...Args){
	
	console.log(Args);
}