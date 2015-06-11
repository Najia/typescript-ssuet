var obj = { name: "jia", age: 25 };
obj = { name: "teh", name1: "Tehmina", age: 25 };
obj["class"] = 23;
var obj2 = { name: "lil", age: 23 };
obj = {}; /// this <any> allows you to overwrite the mandatory requirements of this object if such a condition occurs 
// where as if we create a blank object it treats it as any you can enter whatever you want in it 
var a = {};
// where as if we specify the data type while creating a null object it wont let us enter anything 
var b1 = { name: "bill" };
// number type arrat 
var numarray = [1, 2, 3];
// if we create an array of type any, we can add values belonging to any data type 
var anyarray = [1, "class"];
