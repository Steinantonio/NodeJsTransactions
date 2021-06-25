import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";

interface IUserRequest {
  login: string,
  password: string,
  email: string,
  name: string,
  birthDate: string
}

class CreateUserService {

  async execute({ login, password, email, name, birthDate }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories);

    if (!login) {
      throw new Error("Login Invalid")
    }

    const userExists = await usersRepository.findOne({
      login
    });

    if (userExists) {
      throw new Error("User Already Exists")
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepository.create({
      login,
      password: passwordHash,
      email,
      name,
      birthDate
    })

    await usersRepository.save(user);

    return user;
  }

}

export { CreateUserService }