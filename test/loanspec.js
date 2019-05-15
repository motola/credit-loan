import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';


chai.use(chaiHttp);
chai.should();
chai.request(app);
// parent and it functions for req.body
describe('get loans endpoint', () => {
  describe('GET/ loans', () => {
    it('should get all loans', (done) => {
      chai.request(app)
        .get('/api/v1/loans')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.an('object');

          done();
        });
    });
  });
});
