const chai = require('chai');
const chaiHttp = require('chai-http');
// const { response } = require('../ServerConnection');
chai.should();
chai.use(chaiHttp);
const server = require('../ServerConnection');

describe('UserRecords API Testing', () => {

    describe('POST Method Testing ', () => {
        it('Passinging Empty UserId', (done) => {
            let newUserRecord = JSON.stringify({
                userid: "",
                username: "HariHaran",
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Your UserId');
                    done();
                });
        });
        it('Passinging Invalid UserId ', (done) => {
            let newUserRecord = JSON.stringify({
                userid: "Prem",
                username: "HariHaran",
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Valid UserId');
                    done();
                });
        });

        it('Passinging Null Value In UserId ', (done) => {
            let newUserRecord = JSON.stringify({
                userid: null,
                username: "HariHaran",
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Null Value Occurred In Your UserId');
                    done();
                });
        });

        it('Passing Empty UserName', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: "",
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Your UserName');
                    done();
                });
        });
        it('Passing Empty UserName', (done) => {
            let newUserRecord = JSON.stringify({
                userid: "sjkhd",
                username: "Prem",
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Valid UserId');
                    done();
                });
        });

        it('Passinging Null Value In UserName ', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: null,
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Null Value Occurred In Your UserName');
                    done();
                });
        });

        it('Passing Sapce in UserName', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: " ",
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Your UserName');
                    done();
                });
        });

        it('Passinging Integer Value in UserName', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username:123,
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Valid UserName');
                    done();
                });
        });

        it('Passing Empty Value in UserEmailId', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: "Hari",
                useremailid: ""
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Your Email Id');
                    done();
                });
        });

        it('Passing Integer Value in UserEmailId', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: "Hari",
                useremailid: 1245
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Valid Email Id');
                    done();
                });
        });


        it('Passing Space in UserEmailId', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: "Hari",
                useremailid: "    "
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Your Email Id');
                    done();
                });
        });

        it('Passing Null Value in UserEmailId', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: "Hari",
                useremailid: null
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Null Value Occurred In Your Email Id');
                    done();
                });
        });
        it('It should Upload the UserDetails ', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: "Premkumar",
                useremailid: "premkumar.r-123@gmail.com"
            });
            chai.request(server)
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
        it('Try to Upload Invalid Emaild ', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: "Premkumar",
                useremailid: "premkumarr-123gmail.com"
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(403);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Valid Email Id');
                    done();
                });
        });

        it('Try to Upload the Duplicate UserDetails', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: "HariHaran",
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
                .post('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.text.should.be.a('string');
                    response.text.should.equal('UserId is Already Exist');
                    done();
                });
        });

    });


    describe('GET Method Testing ', () => {
        it('It should Return All User Details', (done) => {
            chai.request(server)
                .get('/userrecords')
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                    done();
                });
        });

        it('It should Not Return All User Details', (done) => {
            chai.request(server)
                .get('/userrecords/user')
                .end((error, response) => {
                    response.should.have.status(404);
                    done();
                });
        });

        it('It should Return UserDetails by UserId', (done) => {
            const userid = -1;
            chai.request(server)
                .get('/userrecords/' + userid)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('userid');
                    response.body.should.have.property('username');
                    response.body.should.have.property('useremailid');
                    response.body.should.have.property('username').equal('Premkumar');
                    done();
                });
        });
        
        it('Passinging Invalid UserId', (done) => {
            const userid = -2;
            chai.request(server)
                .get('/userrecords/' + userid)
                .end((error, response) => {
                    response.should.have.status(404);
                    response.text.should.be.a('string');
                    response.text.should.equal('UserId -2 Not Exist');
                    done();
                });
        });
    });

    describe('Update Method Testing', () => {
        it('Update UserDetails with InValid UserId', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -2,
                username: "HariHaran",
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
                .put('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(404);
                    response.text.should.be.a('string');
                    response.text.should.equal('UserRecord Not There to Update');
                    done();
             });
        });
        it('Update UserDetails with InValid UserName', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: "  ",
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
                .put('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Your UserName');
                    done();
             });
        });
        it('Update UserDetails with InValid EmailId', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: "HariHaran",
                useremailid: ""
            });
            chai.request(server)
                .put('/userrecords')
                .type("json")
                .send(newUserRecord)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.text.should.be.a('string');
                    response.text.should.equal('Please Enter Your Email Id');
                    done();
             });
        });
        it('Update UserDetails', (done) => {
            let newUserRecord = JSON.stringify({
                userid: -1,
                username: "HariHaran",
                useremailid: "Hari@gmail.com"
            });
            chai.request(server)
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

        it('It Should Return Updated UserRecord', (done) => {
            const userid = -1;
            chai.request(server)
                .get('/userrecords/' + userid)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('userid');
                    response.body.should.have.property('username');
                    response.body.should.have.property('useremailid');
                    response.body.should.have.property('username').equal('HariHaran');
                    done();
                });
        });

    });
       
    describe('DELETE Method Testing', () => {
        it('DELETE UserDetails Using User Id', (done) => {
            let UserId = -1;
            chai.request(server)
                .delete('/userrecords/' + UserId)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.text.should.be.a('string');
                    response.text.should.equal('UserRecord is Deleted Successfully');
                    done();
                });
        });
        it('Passinging Invalid UserId To Delete UserRecord', (done) => {
            let UserId = -2;
            chai.request(server)
                .delete('/userrecords/' + UserId)
                .end((error, response) => {
                    response.should.have.status(200);
                    response.text.should.be.a('string');
                    response.text.should.equal('UserRecord is Not there to Delete');
                    done();
                });
        });

    });

});



