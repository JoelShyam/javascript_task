function deleteElement(array,num){
    for(let i=0;i<array.length;i++){
    if(array[i] == num){
         array.splice(i,1);
        }
    } 
    return array;
}
console.log(deleteElement([1, 2, 3, 4, 3, 5, 6, 3, 7],3));