function emptyArray(array){
 array.length=0;
}
let myArray=[1,2,3,4,5];
console.log("before emptying:",myArray);
emptyArray(myArray);
console.log("after emptying:",myArray)
