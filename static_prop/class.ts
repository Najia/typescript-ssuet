class Human {
	
	name = "jia";
	static age = 25;
	
}

alert(Human.age); // if we dont write static while declaring the class variable we wont be able to access age via this line of code 

// then we'd have to write these lines of code, if we dont write static 

var h = new Human();
h.age;

// you can use the method or variable without creating an object/instance using the static keyword 
// practical use :
// you can make a configuration class and add all static variable to it and use the variables anywhere without the need of creating an object

class config{
	
	static Dburl = "some url";
} 

class dbconnec{
	connectDB(){
		config.Dburl;
	}}
	
// static keyword variables can be accessed with class names only 
// others can be accessed using instance/object
// other benefits of static keyword 

// the employee salary example : there are some classes where you dont need to create instances for instance math class : sum subtract...

class employee {
	
	name: string;
	salary:number;	
}	

class mathclass{
	
	static sum (a:number, b:number){
		return(a+b);
	}
	
	static subtract(a:number, b:number){
		return(a-b);
	}
}

mathclass.sum(3,4);
mathclass.subtract(6,8);


//INTERFACES :



interface humanInterface {
	name : string;
	age: number;
	sleep(hours:number) : void;	 // return type void
}

class HumanI implements humanInterface {
	
	name : string = "personI";
	age:number = 23;
	sleep(hours:number = 8){
		console.log(hours);
	}
	
	eat(){}		
}

interface myobj{
	name: string;
	age:number;
}


// or access via object

var obj2 : myobj;
obj2.name = "nnn";
obj2.age = 23;

// in functions we had to give the optional paramter from right most where as in objects there's no such restriction

var ob : {age?: number , name:string} = {name: "jia"}

//optional parameters in interface 

interface myopt {
	name?: string;
	age: number;
}


class muclass implements myopt {	
	age:number;
}

interface Dictionary {
	
	[index:string] : string;
}

 let myDictionary : Dictionary={"first": "Bobo", "second":"Fred"};
 var first : Dictionary = {"firstname" : "lo"};
 
 
 // interface can inherit interface using the extends keyword
 
 interface clockinterface {}
 
 interface clockinterface2 extends clockinterface {}

// multiple inheritance in typescript : it isnt possible however we can  make classes dependent on each other 

class A{}

class B extends A {}

class C extends B {}

// multiple inheritance in interfaces 

interface A1{ A1: string}
interface B1{B1:string}
interface C1 extends A1,B1 {}

class ABC implements A1 {
	A1 = 'asd';
}

class ABC2 implements B1 {
	B1 = 'asd';
}

class ABC3 implements C1 {
	A1 = 'asd';
	B1 = 'bss';
}


