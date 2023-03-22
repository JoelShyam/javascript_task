function check(myVar){
if (myVar === undefined || myVar === null) {
  console.log("The variable is undefined or null");
} else {
  console.log("The variable is neither undefined or null");
}
}
check(null)
check(a=undefined)
check("indhu")
check(6)