function validate(email){
    let mail_format=/^\S+@\S+\.+\S/;
    if(mail_format.test(email)){
        console.log("the email address is valid");
    }
    else{
        console.log("the email is not valid");
    }
}
validate("joel77gmail.com")
validate("joel77@gmail.com")
validate("joel77@gmailcom")
validate("joel77@gmail.")