import bcrypt from 'bcrypt';


class hash {
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  static verifyPassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  }
}
export default hash;
