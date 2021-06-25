import { Request, Response } from 'express';
import { CreateUserService } from '../services/CreateUserService';


class CreateUserController {

  async handle(request: Request, response: Response) {
    const { login, password, email, name, birthDate } = request.body;
    
    const createUserService = new CreateUserService();

    const user = await createUserService.execute({login, password, email, name, birthDate});

    return response.json(user);
  }

}

export { CreateUserController }
