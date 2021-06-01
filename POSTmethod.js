const { getUserRecordsByUserId, getAllUserDetails } = require('./GETmethod');
const { validation } = require('./UserManagementHelper');
const fileSystem = require('fs');

function updateAllChanges(userRecords){
    try {
        userRecords.UserDetails.sort((leftSideUserDetails, rightSideUserDetails) => leftSideUserDetails.userid - rightSideUserDetails.userid);
        fileSystem.writeFileSync('UserRecords.json', JSON.stringify(userRecords));
        return true;
    } catch (e) {
        return "Error Occurred"; 
    }
}

function addUserRecords(userInformation) {
    try {
        let userRecords = getAllUserDetails();
        userRecords.UserDetails.push(userInformation);
        let updationResult = updateAllChanges(userRecords);
        return (updationResult == true) ? "UserDetails Added Successfully" : updationResult;
    } catch (e) {
        return "Service Unavailable";
    }
}

function addNewUserDetails(request, response) {
    let userInformation = request.body;
    let validationResult = validation(userInformation);
    let userRecord = getUserRecordsByUserId(userInformation.userid);
    return (validationResult != true) ? response.status(403).send(validationResult) :
        (userRecord == "Not Founded") ? response.status(201).send(addUserRecords(userInformation)) :
            response.status(200).send("UserId is Already Exist");

}

module.exports = {addNewUserDetails, updateAllChanges}