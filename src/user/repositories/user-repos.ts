import { UserData } from "../dtos/userDto";

export interface UserRepo {
  save(userData: UserData): Promise<void>;
  emailExist(email: string): Promise<boolean>;
}
