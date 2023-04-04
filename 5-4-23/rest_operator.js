function sum(...rest){
    let result=rest.reduce((a,b)=>a+b)
    return result*5
    
}
console.log(sum(1,2,3,4,5,6,7,8))