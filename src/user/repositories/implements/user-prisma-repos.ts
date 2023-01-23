import { UserData } from "../../dtos/userDto";
import { UserRepo } from "../user-repos";
import { PrismaClient } from "@prisma/client";
import { InternalError } from "./InternalError";

const prisma = new PrismaClient();

export class UserPrismaRepos implements UserRepo {
  async save(userData: UserData): Promise<void> {
    try {
      const user = await prisma.user.create({
        data: userData,
      });
    } catch (error: any) {
      throw new InternalError(error.message);
    }
  }
  async emailExist(email: string): Promise<boolean> {
    try {
      const emailExist = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (emailExist) {
        return true;
      }
      return false;
    } catch (error: any) {
      throw new InternalError(error.message);
    }
  }
}
