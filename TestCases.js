const chai = require('chai');
const chaiHttp = require('chai-http');
const serialiser = require('node-serialize')
const should = chai.should();
chai.use(chaiHttp);
let server = require('../src/index');



describe("Get Homepage" , () => {

    it("should simply test the home page loads or not", (done) => {

        chai.request(server).get("/").end((err, res) => {
            res.should.have.status(200);
            done();

        })
    })
})



describe("Add two numbers", () => {

    it('should test a post request with two numbers and add and return a result', (done) => {
        const requestBody = {
            num1: 1000,
            num2: 20000

        }
        chai.request(server).post('/add').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('the sum of given two numbers');
            res.body.should.have.property('sum').eql(21000);
            done();
        })
    })

})


describe("Add two  negative numbers", () => {

    it('should test a post request with two numbers and add and return a result', (done) => {
        const requestBody = {
            num1: -1000,
            num2: -20000

        }
        chai.request(server).post('/add').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('the sum of given two numbers');
            res.body.should.have.property('sum').eql(-21000);
            done();
        })
    })

})


describe("Add two strings", () => {

    it('should test a post request with two numbers and add and return a result', (done) => {
        const requestBody = {
            num1: "test",
            num2: "test"

        }
        chai.request(server).post('/add').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Invalid data types');
            done();
        })
    })

})

describe("Add two floating point number", () => {

    it('should test a post request with two numbers and add and return a result', (done) => {
        const requestBody = {
            num1: 1.2,
            num2: 2.3

        }
        chai.request(server).post('/add').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('the sum of given two numbers');
            res.body.should.have.property('sum').eql(3.5);
            done();
        })
    })

})


describe("Adding two numbers over 10 lakh", () => {
    it('should test a post request with two numbers and add and return a result', (done) => {
        const requestBody = {
            num1: 950000,
            num2: 60000

        }
        chai.request(server).post('/add').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Overflow');
            done();
        })
    })

})


describe("Sub two numbers", () => {

    it('should test a post request with two numbers and substract them and return a result', (done) => {
        const requestBody = {
            num1: 10000,
            num2: 200

        }
        chai.request(server).post('/sub').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('the difference of given two numbers');
            res.body.should.have.property('difference').eql(9800);
            done();
        })
    })

})


describe("substract two  negative numbers", () => {

    it('should test a post request with two numbers and substract and return a result', (done) => {
        const requestBody = {
            num1: -1000,
            num2: -20000

        }
        chai.request(server).post('/sub').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('the difference of given two numbers');
            res.body.should.have.property('difference').eql(19000);
            done();
        })
    })

})


describe("substract two strings", () => {

    it('should test a post request with two numbers and substract and return a result', (done) => {
        const requestBody = {
            num1: "test",
            num2: "test"

        }
        chai.request(server).post('/sub').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Invalid data types');
            done();
        })
    })

})

describe("substract two floating point number", () => {

    it('should test a post request with two numbers and add and return a result', (done) => {
        const requestBody = {
            num1: 4.2,
            num2: 2.2

        }
        chai.request(server).post('/sub').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('the difference of given two numbers');
            res.body.should.have.property('difference').eql(2.0);
            done();
        })
    })

})


describe("substract two numbers less  10 lakh", () => {
    it('should test a post request with two numbers and add and return a result', (done) => {
        const requestBody = {
            num1: -1150000,
            num2: 60000

        }
        chai.request(server).post('/sub').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Underflow');
            done();
        })
    })

})



describe("Multiply two numbers", () => {

    it('should test a post request with two numbers and multiply and return a result', (done) => {
        const requestBody = {
            num1: 3,
            num2: 4

        }
        chai.request(server).post('/multiply').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('The product of given numbers');
            res.body.should.have.property('result').eql(12);
            done();
        })
    })

})


describe("Multiply two strings", () => {

    it('should test a post request with two numbers and multiply and return a result', (done) => {
        const requestBody = {
            num1: "some test",
            num2: "another"

        }
        chai.request(server).post('/multiply').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Invalid data types');
            done();
        })
    })

})

describe("Multiply two float numbers", () => {

    it('should test a post request with float numbers and return a result', (done) => {
        const requestBody = {
            num1: 2.5,
            num2: 2.5

        }
        chai.request(server).post('/multiply').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('The product of given numbers');
            res.body.should.have.property('result').eql(6.25);
            done();
        })
    })

})


describe("Multiply two large numbers", () => {

    it('should test a post request with two large numbers and return a result', (done) => {
        const requestBody = {
            num1: 1000,
            num2: 10000,

        }
        chai.request(server).post('/multiply').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Overflow');
            done();
        })
    })

})


describe("Divide two numbers", () => {

    it('should test a post request with two numbers and return a result', (done) => {
        const requestBody = {
            num1: 1000,
            num2: 10,

        }
        chai.request(server).post('/divide').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('The division of given numbers');
            res.body.should.have.property('result').eql(100);
            done();
        })
    })

})


describe("Divide two float numbers", () => {

    it('should test a post request with two float and return a result', (done) => {
        const requestBody = {
            num1: 4.0,
            num2: 2.5,

        }
        chai.request(server).post('/divide').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('The division of given numbers');
            res.body.should.have.property('result').eql(1.6);
            done();
        })
    })

})



describe("Divide number by zero", () => {

    it('should test a post request with two num and divide it by 0 and return a result', (done) => {
        const requestBody = {
            num1: 4.0,
            num2: 0,

        }
        chai.request(server).post('/divide').set('content-type', 'application/json').send(requestBody).end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql("Cannot divide by zero");
            done();
        })
    })

})


