export class userEmail {
  private email: string;
  constructor(email: string) {
    if (!this.validator(email)) {
      throw new Error("Invalid Email");
    }
    this.email = email;
  }

  validator(email: string): boolean {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regEx.test(email);
  }

  getValue() {
    return this.email;
  }
}
