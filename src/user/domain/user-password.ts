import "dotenv/config";
import bcrypt from "bcrypt";

export class UserPassword {
  private password: string;
  constructor(password: string) {
    if (this.validator(password)) {
      throw new Error("Invalid Password");
    }

    this.password = this.hashPassword(password);
  }

  hashPassword(password: string): string {
    const salt = parseInt(process.env.HASH_SALT as string);
    return bcrypt.hashSync(password, salt);
  }

  validator(password: string): boolean {
    const regEx = /ew/;
    return regEx.test(password);
  }

  getValue() {
    return this.password;
  }
}
