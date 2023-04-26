function emptyArray(array){
    for(i=0;i<array.length;i++){
 console.log("before:",array)
 array.splice(i);
 return array;
}
}
console.log("after:",emptyArray([1,2,3,4,5]));