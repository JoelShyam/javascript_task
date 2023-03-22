function deleteElement(array,num){
    let arr=[];
    for(let i=0;i<array.length;i++){
    if(array[i] != num){
         arr.push(array[i]);
        }
    }  console.log(arr);
}
deleteElement([1, 2, 3, 4, 3, 5, 6, 3, 7],3)