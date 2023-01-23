import "dotenv/config";
import { HttpResponse } from "../../infra/response/HttpResponse";
import { User } from "../domain/user";
import { UserData } from "../dtos/userDto";
import { createJwt } from "../helpers/create-jwt";
import { InternalError } from "../repositories/implements/InternalError";
import { UserRepo } from "../repositories/user-repos";

export class CreateUserUseCase {
  repo: UserRepo;
  constructor(repo: UserRepo) {
    this.repo = repo;
  }
  async execute(userData: UserData) {
    try {
      const user = new User(userData).getValue();
      if (await this.repo.emailExist(user.email)) {
        return HttpResponse.badRequest("Email in use");
      }
      await this.repo.save(user);

      const payLoad = {
        name: user.name,
        email: user.email,
      };
      const token = createJwt(payLoad);
      return HttpResponse.ok(token);
    } catch (error: any) {
      if (error instanceof InternalError) {
        return HttpResponse.ServerError();
      }
      return HttpResponse.badRequest(error.message);
    }
  }
}
