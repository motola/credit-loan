import repay from '../model/repayments';

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
}

export default repayment;
