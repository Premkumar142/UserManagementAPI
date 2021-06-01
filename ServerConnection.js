const express = require('express');
const app = express();
const PORT = 8081;
const cors = require('cors')
const { selectUserDetailsByUserId, allUserDetails } = require('./GETmethod');
const { addNewUserDetails } = require('./POSTmethod');
const { deleteUserRecords } = require('./DELETEmethod')
const { updateUserDetails } = require('./PUTmethod');
app.use(cors())
app.use(express.json())

app.get('/userrecords', allUserDetails)
app.get("/userrecords/:id", selectUserDetailsByUserId)
app.post("/userrecords", addNewUserDetails)
app.delete("/userrecords/:id", deleteUserRecords)
app.put("/userrecords", updateUserDetails)
function getAllUserDetails(){
    console.log("prem");
}

app.listen(PORT, () => { console.log(`Server Connected Successfully ${PORT}`); })
module.exports = app;


