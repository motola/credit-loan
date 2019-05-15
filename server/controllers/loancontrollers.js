import loans from '../model/loans';


class LoanController {
  static getallLoans(req, res) {
    return res.status(200).json({
      message: 'All loans retrieved sucesfully',
      loans,
    });
  }

  static getSingleLoan(req, res) {
    // getting a single Loan
    const { id } = req.params;
    if (id) {
      const LoanById = loans.filter(data => data.id === JSON.parse(id));
      return res.status(200).send({ LoanById });
    }
    return res.status(404).json({
      message: 'loan not found',
    });
  }
}

export default LoanController;
