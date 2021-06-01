const NULL_VALUE = "Null Value Occurred In Your ";
const EMPTY_VALUE = "Please Enter Your ";
const INVALID_CRDENTIAL = "Please Enter Valid ";

function validateCredential(userCredential, credentialName) {
    let validCredential = (userCredential == null) ? NULL_VALUE + credentialName : (userCredential === "") ? EMPTY_VALUE + credentialName : true;

    if (credentialName == "UserId" && validCredential == true)
        validCredential = (Number.isInteger(userCredential)) ? true : INVALID_CRDENTIAL + credentialName;
    if (validCredential == true && (credentialName == "Email Id" || credentialName == "UserName"))
        validCredential = (typeof userCredential != 'string') ? INVALID_CRDENTIAL + credentialName : (userCredential.trim() === "") ? EMPTY_VALUE + credentialName : true; 
    if(validCredential == true && credentialName == "Email Id")
        validCredential = ((userCredential.indexOf("@") < 1) || (userCredential.indexOf(".") < 1))  ? INVALID_CRDENTIAL + credentialName : true; 
    return validCredential;
}

function validation(userInformation) {
    let validCredential;
    validCredential = validateCredential(userInformation.userid, "UserId");
    if (validCredential == true)
        validCredential = validateCredential(userInformation.username, "UserName");
    if (validCredential == true)
        validCredential = validateCredential(userInformation.useremailid, "Email Id");
    return validCredential;
}

module.exports.validation = validation;