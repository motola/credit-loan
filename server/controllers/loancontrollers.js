import loans from '../model/loans';


class LoanController {
  static getallLoans(req, res) {
    return res.status(200).json({
      message: 'All loans retrieved sucesfully',
      loans,
    });
  }
}

export default LoanController;
