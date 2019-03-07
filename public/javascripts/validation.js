function validation (){
    var testName = false;
    var testLName = false;
    var testNum = false;
    var testPass = false;
    var testConfirm = false;
    var testCountry = false;
    var testCity = false;
    var testEmail = false;

    var errorName = $('#errorMessageName');
    var errorLName = $('#errorMessageLName');
    var errorMail = $('#errorMessageEmail');
    var errorPhone = $('#errorMessagePhoneNum');
    var errorPass = $('#errorMessagePass');
    var errorConf = $('#errorMessageConfirm');
    var errorSelect = $('#errorMessageSelect');

    var name = $('#name');
    var lastName = $('#last_name');
    var email = $('#email');
    var phoneNum = $('#phone_num');
    var country = $('#country :selected').text();
    var city = $('#city :selected').text();
    var password = $('#password');
    var confirmPass = $('#confirm');

    var nameReg = new RegExp('^[a-zA-Z ]{3,}[a-zA-Z-]*$');
    if(nameReg.test(name.val())) testName = true;
    var lastNameReg = new RegExp('^[a-zA-Z]{5,}[a-zA-Z-]*$');
    if(lastNameReg.test(lastName.val())) testLName = true;
    var emailReg = new RegExp('^[\\w._-]+[+]?[\\w._-]+@[\\w.-]+\\.[a-zA-Z]{2,6}$');
    if(emailReg.test(email.val())) testEmail = true;
    var phoneNumReg = new RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.\/]?[0-9]{3}[-\s\.]?[0-9]{3,6}$');
    if(phoneNumReg.test(phoneNum.val())) testNum = true;
    if(country != "Select Country") testCountry = true;
    if(city != "Select City") testCity = true;
    var passReg = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$');
    if(passReg.test(password.val())) testPass = true;
    if(confirmPass.val() == password.val()) testConfirm = true;

    if(testName) errorName.text("");
    if(testName) errorLName.text("");
    if(testName) errorMail.text("");
    if(testName) errorPhone.text("");
    if(testName) errorPass.text("");
    if(testName) errorConf.text("");
    if(testName) errorSelect.text("");
    if(testName && testNum && testLName && testPass && testConfirm && testEmail && testCountry && testCity){
        register();
    }
    else{
        if(name.val().length == 0) errorName.text("Name is required!");
        else if(!testName)  errorName.text("Invalid name entered!");
        else if(lastName.val().length == 0)  errorLName.text("Last name is required!");
        else if(!testLName)  errorLName.text("Invalid last name entered!");
        else if(email.val().length == 0)  errorMail.text("Email is required!");
        else if(!testEmail)  errorMail.text("Invalid email format entered!");
        else if(phoneNum.val().length == 0)  errorPhone.text("Phone number is required!");
        else if(!testNum)  errorPhone.text("Invalid number format entered!");
        else if(!testPass) {
            if(password.val().length == 0)  errorPass.text("Password is required!");
            else if(password.val().length < 8)  errorPass.text("Password must be at least 8 characters long!");
            else  errorPass.text("Password must contain at least one upper case letter, one lower case letter and one number!");
        }
        else if(confirmPass.val().length == 0)  errorConf.text("Please confirm your password!");
        else if(!testConfirm)  errorConf.text("Different passwords entered!");
        else if(!testCountry)  errorSelect.text("Country must be selected!");
        else if(!testCity)  errorSelect.text("City must be selected!");
    }
}