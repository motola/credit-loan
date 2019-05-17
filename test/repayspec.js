import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';


chai.use(chaiHttp);
chai.should();
chai.request(app);
// parent and it functions for req.body
describe('get repayment', () => {
  describe('GET/ loans', () => {
    it('should repayment history', (done) => {
      chai.request(app)
        .get('/api/v1/loans/:loanId/repayments')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.an('object');

          done();
        });
    });
  });
});
