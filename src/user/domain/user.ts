import { UserData } from "../dtos/userDto";
import { userEmail } from "./user-emai";
import { UserPassword } from "./user-password";

export class User {
  name: string;
  email: string;
  password: string;
  income: number;

  constructor(userData: UserData) {
    if (!this.validation(userData.name)) {
      throw new Error("Invalid Name");
    }
    this.name = userData.name;
    this.email = new userEmail(userData.email).getValue();
    this.password = new UserPassword(userData.password).getValue();
    this.income = userData.income;
  }

  validation(name: string): boolean {
    const regExpName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    return regExpName.test(name);
  }

  getValue(): UserData {
    return {
      name: this.name,
      email: this.email,
      password: this.password,
      income: this.income,
    };
  }
}
