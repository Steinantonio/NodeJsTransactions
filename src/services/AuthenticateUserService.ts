import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
  login: string,
  password: string
}

class AuthenticateUserService {

  async execute({ login, password }: IAuthenticateRequest) {

    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({
      login
    });

    if (!user) {
      throw new Error("Email/Password incorrect")
    }

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new Error("Email/Password incorrect")
    }

    const token = sign({login: user.login}, 'e4cd96753ea7b327d0ee08bb23b9193d',{ subject : user.id, expiresIn: "1d"});

    return token;
  }

  async search(user_id) {

    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne(user_id);

    return user;
  }
}

export { AuthenticateUserService }