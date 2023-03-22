function split_array(array,size){
    let new_arr=[];
    console.log(array)
    for(i=0;i=(array.length/size);i++){
        new_arr.push(array.splice(0,size));
    }
    console.log(new_arr)
}
split_array([1,2,3,4,5,6,7,8,9],3)