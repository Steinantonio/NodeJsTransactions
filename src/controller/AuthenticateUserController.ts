import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";



class AuthenticateUserController{
    async handle(request: Request, response: Response){
        const {login, password} = request.body;

        const authUserService = new AuthenticateUserService();

        const token = await authUserService.execute({login, password});

        return response.json(token);
    }

    async check(request: Request, response: Response){
        const {user_id} = request; 

        const authUserService = new AuthenticateUserService();
        
        const {name} = await authUserService.search(user_id);

        return response.json({user_id,name});
        
    }
}

export {AuthenticateUserController}