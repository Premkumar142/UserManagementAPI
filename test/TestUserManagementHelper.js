let chai = require('chai');
chai.should();
const { validation } = require('../UserManagementHelper')

describe('Validate User Credentials', () => {

    describe('Validate UserId', () => {
        it('Passing Empty UserId', () => {
            const userReord = {
                userid: ""
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Your UserId");
        });

        it('Passing Space` UserId', () => {
            const userReord = {
                userid: "   "
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Valid UserId");
        });

        it('Passing Null Value in UserId', () => {
            const userReord = {
                userid: null
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Null Value Occurred In Your UserId");
        });


        it('Passing String UserId', () => {
            const userReord = {
                userid: "able"
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Valid UserId");
        });

        it('Passing Valid UserId', () => {
            const userReord = {
                userid: 1,
                username : ""
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Your UserName");
        });
    });
    describe('Validate UserName', () => {
        it('Passing Empty UserName', () => {
            const userReord = {
                userid: 1,
                username : ""
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Your UserName");
        });

        it('Passing Space UserName', () => {
            const userReord = {
                userid: 1,
                username : "  "
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Your UserName");
        });

        it('Passing Null Value in UserName', () => {
            const userReord = {
                userid :1,
                username: null
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Null Value Occurred In Your UserName");
        });


        it('Passing Integer UserName', () => {
            const userReord = {
                userid : 1,
                username: 123
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Valid UserName");
        });

        
        it('Passing Integer UserName', () => {
            const userReord = {
                userid : 1,
                username: "Prem",
                useremailid : ""
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Your Email Id");
        });
    });
 
    describe('Validate Email Id', () => {
        it('Passing Empty Email Id', () => {
            const userReord = {
                userid: 1,
                username : "Prem",
                useremailid : ""
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Your Email Id");
        });

        it('Passing Space Email Id', () => {
            const userReord = {
                userid: 1,
                username : "Prem",
                useremailid : "  "
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Your Email Id");
        });

        it('Passing Null Value in Email Id', () => {
            const userReord = {
                userid :1,
                username : "Prem",
                useremailid : null
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Null Value Occurred In Your Email Id");
        });

        it('Passing Integer Email Id', () => {
            const userReord = {
                userid : 1,
                username : "Prem",
                useremailid : 123
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Valid Email Id");
        });

        it('Passing Email Id Without @ Symbol', () => {
            const userReord = {
                userid : 1,
                username : "Prem",
                useremailid : "premkumargmail.com"
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Valid Email Id");
        });

        it('Passing Email Id Without . Symbol', () => {
            const userReord = {
                userid : 1,
                username : "Prem",
                useremailid : "premkumar@gmailcom"
            }
            let validationResult = validation(userReord);
            validationResult.should.equal("Please Enter Valid Email Id");
        });
    });

    describe('Validate All Credentials',()=>{
        it('Passing All Valid UserDetails',()=>{
            const userReord = {
                userid : 1,
                username : "PremKumar",
                useremailid : "premkumar@gmail.com"
            }
            let validationResult = validation(userReord);
            validationResult.should.equal(true);
        })
    })


});