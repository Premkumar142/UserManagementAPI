const { getAllUserDetails } = require('./GETmethod');
const { updateAllChanges } = require('./POSTmethod');
const fileSystem = require('fs');
function deleteUserRecords(request, response) {
    let userRecords = getAllUserDetails();
    try {
        for (let indexValue = 0; indexValue < userRecords.UserDetails.length; indexValue++) {
            if (userRecords.UserDetails[indexValue].userid == request.params.id) {
                userRecords.UserDetails.splice(indexValue, 1);
                let updationResult = updateAllChanges(userRecords);
                return (updationResult == true ) ? response.status(200).send("UserRecord is Deleted Successfully") 
                : response.status(403).send(updationResult);
            }
        }
        response.status(200).send("UserRecord is Not there to Delete");
    } catch (e) {
        response.status(500).send("Service Unavailable Please Try Again Later");
    }
}

module.exports = { deleteUserRecords };