import { Request, Response } from "express";
import { CreateTransactionService } from "../services/CreateTransactionService";


class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const { 
      birthDate,
      income,
      outflow,
      description } = request.body;

      const {user_id} = request;

    const createTransaction = new CreateTransactionService();

    const transaction = await createTransaction.execute({ user_id, birthDate, income, outflow, description });

    return response.json(transaction);

  }
}
export { CreateTransactionController }