import { Request, Response } from "express";
import { UserPrismaRepos } from "../repositories/implements/user-prisma-repos";
import { CreateUserUseCase } from "../usecase/create-user-use-case";

export class CreateAccountController {
  static async execute(req: Request, res: Response) {
    const { name, email, password, income } = req.body;
    const repo = new UserPrismaRepos();
    const result = await new CreateUserUseCase(repo).execute({
      name,
      email,
      password,
      income,
    });
    res.status(result.statusCode).json({ message: result.message });
  }
}
