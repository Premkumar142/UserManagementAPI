const fileSystem = require('fs');
function getAllUserDetails() {
    try {
        let userRecords = JSON.parse(fileSystem.readFileSync('UserRecords.json', 'utf-8'));
        return userRecords;
    } catch (e) {
        return "Something Went Wrong While Fetching Data";
    }
}
function getUserRecordsByUserId(userIdForSearch) {
    let userRecords = getAllUserDetails();
    for (const user of userRecords.UserDetails) {
        if (user.userid == userIdForSearch)
        return user;
    }
    return "Not Founded";
}
function selectUserDetailsByUserId(request, response){
    let userRecord = getUserRecordsByUserId(request.params.id);
    return (userRecord == "Not Founded") ? response.status(404).send(`UserId ${request.params.id} Not Exist`) :
    response.status(200).json(userRecord);
}
function allUserDetails(request, response){
    let userRecords = getAllUserDetails();
    response.status(200).json(userRecords.UserDetails);
}
module.exports = { getAllUserDetails, getUserRecordsByUserId, allUserDetails, selectUserDetailsByUserId };