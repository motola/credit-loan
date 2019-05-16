import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';


chai.use(chaiHttp);
chai.should();
chai.request(app);
// parent and it functions for req.body
describe('User Authentication', () => {
  // child desciribe and it functions for req.body
  describe('POST/ Create a User Account', () => {
    it('should register user', (done) => {
      const user = {
        firstName: 'ahmed',
        lastName: 'musa',
        email: 'ahumedmusa@gmail.com',
        password: 'hidden',
        address: '6, mobolaji way anthony',
      };
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.an('object');

          done();
        });
    });
    it('should not register user without firstname', (done) => {
      const user = {
        token: 'fh6ff6f6f6f',
        id: 1,
        firstName: '',
        lastName: 'musa',
        email: 'ahumedmusa@gmail.com',
        password: 'hidden',
        address: '6, mobolaji way anthony',
      };
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.an('object');

          done();
        });
    });
    it('should not register user without lastname', (done) => {
      const user = {
        token: 'fh6ff6f6f6f',
        id: 1,
        firstName: 'first',
        lastName: '',
        email: 'ahumedmusa@gmail.com',
        password: 'hidden',
        address: '6, mobolaji way anthony',
      };
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.an('object');

          done();
        });
    });
    it('should not register user without email', (done) => {
      const user = {
        token: 'fh6ff6f6f6f',
        id: 1,
        firstName: 'first',
        lastName: '',
        email: '',
        password: 'hidden',
        address: '6, mobolaji way anthony',
      };
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.an('object');

          done();
        });
    });
    it('should not register user without password', (done) => {
      const user = {
        token: 'fh6ff6f6f6f',
        id: 1,
        firstName: 'first',
        lastName: 'moruff',
        email: 'mosh@gmail.com',
        password: '',
        address: '6, mobolaji way anthony',
      };
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(user)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.an('object');

          done();
        });
    });
  });
  // Sign up unit test ends here
  // signin unit test begins here
  describe('POST/ sign in an account', () => {
    it('should sign in a user', (done) => {
      const email = 'johnmosh@gmail.com';
      const password = 'fhdfkf';
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send({ email, password })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.an('object');

          done();
        });
    });
  });
});
