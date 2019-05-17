import repay from '../model/repayments';
import loans from '../model/loans';
// import users from '../model/user';

class repayment {
  static viewHistory(req, res) {
    const { loanId } = req.params;
    if (loanId) {
      const LoanById = repay.filter(data => data.loanId === JSON.parse(loanId));
      return res.status(200).send({
        status: 200,
        data: LoanById,
      });
    }

    return res.status(404).send({
      status: 404,
      error: 'invalid loanid',
    });
  }

  static loanRecord(req, res) {
    const paidAmount = parseInt(req.body.paidAmount);
    const { id } = req.params;
    const confirmLoan = loans.find(loan => loan.id === parseInt(id, 10));
    const createdOn = new Date();
    const loanAmount = confirmLoan.amount;
    const balance = confirmLoan.balance - paidAmount;
    const monthlyInstallment = (loanAmount + confirmLoan.interest) / confirmLoan.tenor;

    const loan = {
      id: repay.length,
      createdOn,
      loanId: confirmLoan.loanId,
      loanAmount,
      monthlyInstallment,
      balance,
      paidAmount,
    };
    loans.push(loan);
    return res.status(200).send({
      status: 200,
      message: 'loan create',
      data: loan,
    });
  }
}

export default repayment;
