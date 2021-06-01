const chai = require('chai')
const chaiHttp = require('chai-http')
const nock = require('nock');
const server = require('../ServerConnection').getAllUserDetails;
chai.use(chaiHttp);
chai.should();

describe("Mocing API", () => {

    let userRecord = {
        userid: 1,
        username: "HariHaran",
        useremailid: "Hari@gmail.com"
    };

    beforeEach(() => {
        nock('http://localhost:8081')
            .get('/userrecords/1')
            .reply(201, userRecord);
    });

    it('It should Return UserDetails by UserId', async() => {
        const userid = 1;
       let response = await chai
            .request('http://localhost:8081')
            .get('/userrecords/' + userid)

                response.should.have.status(201);
                response.body.should.be.a('object');
                response.body.should.have.property('userid');
                response.body.should.have.property('username');
                response.body.should.have.property('useremailid');
                response.body.should.have.property('userid').equal(1);
                response.body.should.have.property('username').equal('HariHaran');
    });
    it('It should Return UserDetails by UserId', async() => {
        const userid = 1;
       let response = await chai
            .request('http://localhost:8081')
            .get('/userrecords/' + userid)

                response.should.have.status(201);
                response.body.should.be.a('object');
                response.body.should.have.property('userid');
                response.body.should.have.property('username');
                response.body.should.have.property('useremailid');
                response.body.should.have.property('userid').equal(1);
                response.body.should.have.property('username').equal('HariHaran');
    });

    
    it('Get all UserDetails', async () => {
        var allUserRecords = [
            {
            
                userid: 1,
                username: "Premkumar",
                useremailid: "premkumar.@gmail.com"
            },
            {
                userid: 2,
                username: "Dinesh",
                useremailid: "dinesh.@gmail.com"

            }
        ]

        nock('http://localhost:8081')
        .get('/userrecords')
        .reply(201, allUserRecords);

        let response = await chai
            .request('http://localhost:8081')
            .get('/userrecords')
        response.should.have.status(201);
        response.body.should.be.a('array');
    });


    it('It should Upload the UserDetails ', (done) => {

        nock('http://localhost:8081')
        .post('/userrecords')
        .reply(201, "UserDetails Added Successfully");

        let newUserRecord = JSON.stringify({
            userid: -1,
            username: "Premkumar",
            useremailid: "premkumar.r-123@gmail.com"
        });

        chai.request('http://localhost:8081')
            .post('/userrecords')
            .type("json")
            .send(newUserRecord)
            .end((error, response) => {
                response.should.have.status(201);
                response.text.should.be.a('string');
                response.text.should.equal('UserDetails Added Successfully');
                done();
            });
    });

    it('Update UserDetails', (done) => {

        nock('http://localhost:8081')
        .put('/userrecords')
        .reply(200, "UserDetails Updated Successfully");

        let newUserRecord = JSON.stringify({
            userid: -1,
            username: "HariHaran",
            useremailid: "Hari@gmail.com"
        });
        chai.request('http://localhost:8081')
            .put('/userrecords')
            .type("json")
            .send(newUserRecord)
            .end((error, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('UserDetails Updated Successfully');
                done();
         });
    });

    it('DELETE UserDetails Using User Id', (done) => {

        nock('http://localhost:8081')
        .delete('/userrecords/1')
        .reply(200, "UserRecord is Deleted Successfully");

        let UserId = 1;
        chai.request('http://localhost:8081')
            .delete('/userrecords/' + UserId)
            .end((error, response) => {
                response.should.have.status(200);
                response.text.should.be.a('string');
                response.text.should.equal('UserRecord is Deleted Successfully');
                done();
            });
    });



    

});