// let count=0;
// let result=setInterval(() => {
//     console.log("joel Shyam");
//     count++;
//     if(count>=5){
//         clearInterval(result);
//         }
// },5000);

let count=0;
let result=setInterval((name) => {
    console.log(name);
    count++;
    if(count>=5){
        clearInterval(result);
        }
},5000,"joel shyam");