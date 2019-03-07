function validation (){
    var testPass = false;
    var testEmail = false;

    var error = $('#errorMessage');
    var email = $('#username');
    var password = $('#password');

    var emailReg = new RegExp('^[\\w._-]+[+]?[\\w._-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$');
    if(emailReg.test(email.val())) testEmail = true;
    var passReg = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$');
    if(passReg.test(password.val())) testPass = true;

    if(testEmail && testPass) {
        error.text("");
        login();
    }
    else{
        error.text("Wrong email or password!");
    }
}