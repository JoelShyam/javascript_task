const result=new Promise((resolve,reject)=>{
  let result=true;
  if(result){
    resolve("success")
  }
  else{
    reject("failure")
  }
})
result.then((res)=>console.log(res)).catch((err)=>console.log(err))