function perform_arithmetic_operation(num1,num2,operator){
    if(operator=="+"){
        console.log(num1+num2)
    }
    else if(operator=="-"){
        console.log(num1-num2)
    }
    else if(operator=="*"){
        console.log(num1*num2)
    }
    else if(operator=="/"){
        console.log(num1/num2)
    }
    else{
        console.log("invalid")
    }
}
perform_arithmetic_operation(2,6,"+")
perform_arithmetic_operation(7,3,"-")
perform_arithmetic_operation(5,4,"*")
perform_arithmetic_operation(8,2,"/")
perform_arithmetic_operation(2,5,"%")