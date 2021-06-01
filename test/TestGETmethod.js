const chai = require('chai');
const { getAllUserDetails, getUserRecordsByUserId } = require('../GETmethod');
chai.should();

describe('Test UserDetails GET Functions',()=>{

    it('Get All UserRecords',()=>{
        let userRecords = getAllUserDetails();
        userRecords.should.be.a('object');
    });

    it('Get Selected UserRecord',()=>{
        let userRecord = getUserRecordsByUserId(2);
        userRecord.should.be.a('object');
        userRecord.should.have.property('userid').equal(2);
    });
    it('Pass Invalid UserId to Get UserRecord',()=>{
        let userRecord = getUserRecordsByUserId(-3);
        userRecord.should.equal('Not Founded');
    })
});