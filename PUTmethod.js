const { getAllUserDetails } = require('./GETmethod');
const { updateAllChanges } = require('./POSTmethod');
const { validation } = require('./UserManagementHelper')

const fileSystem = require('fs');

function updateUserDetails(request, response) {
    let userInformation = request.body;
    let userRecords = getAllUserDetails();
    let validationResult = validation(userInformation);
    if (validationResult == true)
        return findAndUpdateUserDetails(userRecords, userInformation, response);
    response.status(200).send(validationResult);
}

function findAndUpdateUserDetails(userRecords, userInformation, response) {
    try {
        for (let user of userRecords.UserDetails) {
            if (user.userid == userInformation.userid) {
                user.username = userInformation.username;
                user.useremailid = userInformation.useremailid;
                let updationResult = updateAllChanges(userRecords);
                return (updationResult == true ) ? response.status(200).send("UserDetails Updated Successfully") 
                : response.status(403).send(updationResult);
            }
        }
    } catch (e) {
        return response.status(500).send("Service Unavailable");
    }
    response.status(404).send("UserRecord Not There to Update");
}

module.exports = { updateUserDetails }