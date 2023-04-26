function check(myVar){
  if (myVar== null) {
    console.log("The variable is undefined or null");
  } else {
    console.log("The variable is neither undefined or null");
  }
  }
  check(null)
  check(undefined)
  check("indhu")
  check(6)