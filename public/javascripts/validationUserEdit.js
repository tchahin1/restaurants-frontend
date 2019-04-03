function validation (){
    var testName = false;
    var testLName = false;
    var testNum = false;
    var testCountry = false;
    var testCity = false;
    var testEmail = false;

    var errorName = $('#errorMessageName');
    var errorLName = $('#errorMessageLName');
    var errorMail = $('#errorMessageEmail');
    var errorPhone = $('#errorMessagePhoneNum');
    var errorSelect = $('#errorMessageSelect');

    var name = $('#name');
    var lastName = $('#last_name');
    var email = $('#email');
    var phoneNum = $('#phone_num');
    var country = $('#country :selected').text();
    var city = $('#city :selected').text();

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

    if(testName) errorName.text("");
    if(testName) errorLName.text("");
    if(testName) errorMail.text("");
    if(testName) errorPhone.text("");
    if(testName) errorPass.text("");
    if(testName) errorConf.text("");
    if(testName) errorSelect.text("");
    if(testName && testNum && testLName && testEmail && testCountry && testCity){
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
        else if(!testCountry)  errorSelect.text("Country must be selected!");
        else if(!testCity)  errorSelect.text("City must be selected!");
    }
}