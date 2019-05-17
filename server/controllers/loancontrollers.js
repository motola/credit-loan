import loans from '../model/loans';
import users from '../model/user';


class LoanController {
  static postLoans(req, res) {
    const {
      firstName, lastName, email, tenor, amount,
    } = req.body;
    const accountOwner = users.find(user => user.email === email);
    console.log(accountOwner);
    const loanId = loans.length + 1;
    const createdOn = new Date();
    const balance = amount;
    const interest = amount * (5 / 100);
    const paymentInstallment = (amount + interest) / tenor;

    const loan = {

      loanId,
      createdOn,
      firstName,
      lastName,
      email: req.body.email,
      status: 'pending',
      tenor: parseInt(tenor, 10),
      amount: parseInt(amount, 10),
      paymentInstallment,
      balance,
      interest,
    };
    loans.push(loan);
    return res.status(200).send({
      status: 200,
      message: 'loan create',
      data: loan,
    });
  }

  static getallLoans(req, res) {
    // get single loans
    const { status, repaid } = req.query;
    if (status || repaid) {
      const response = loans.filter(data => data.status === status && data.repaid
        === JSON.parse(repaid));
      return res.status(200).send({ response });
    }
    // get loans
    return res.status(200).json({
      message: 'All loans retrieved sucesfully',
      loans,
    });
  }

  static getSingleLoan(req, res) {
    // getting a single Loan
    const { id } = req.params;
    if (id) {
      const LoanById = loans.filter(data => data.id === parseInt(id, 10));
      return res.status(200).send({ LoanById });
    }
    return res.status(404).json({
      message: 'loan not found',
    });
  }

  static checkStatus(req, res) {
    const { id } = req.params;
    const { status } = req.body;
    const checkStatus = loans.find(loan => loan.id === parseInt(id, 10));
    if (checkStatus.status === 'pending') {
      checkStatus.status = status;
      return res.status(200).send({
        status: 200,
        data: checkStatus,
      });
    }
    return res.status(404).send({
      status: 404,
      Message: 'already approved',
    });
  }
}

export default LoanController;
