function greater_than_18(){
    let numbers=[5,10,15,20,25,30,35];
    let arr=[];
for(i=0;i<numbers.length;i++){
    if(numbers[i]>=18){
        arr.push(numbers[i]);
    }
}console.log(arr);
}
greater_than_18()