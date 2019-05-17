import bcrypt from 'bcrypt';


class hash {
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

  static async verifyPassword(password, hashPassword) {
    const match = await bcrypt.compare(password, hashPassword);
    return match;
  }
}
export default hash;
