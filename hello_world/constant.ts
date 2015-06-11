
console.log("Hello World");
//constants 
//const a ;  // not possible in constants because in constants you have to initialize and declare at dev time

// the right way to do it is :

const b : number = 10;
const c : string = a;
const d : any = null;

// const can never be over-ridden in normal variable(s) you can initialize with null and declare later but on constants tou cant do this

// constant functions:

const fn1 = function (a:number):number {
	return a+2;
}

fn1(1);

// constant arrays :
	
const array = [];
array.push(1);

//purpose of using const : 





 