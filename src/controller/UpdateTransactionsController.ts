import { Request, Response } from "express";
import { UpdateUserTransactionService } from "../services/UpdateUserTransactionService";


class UpdateTransactionsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { birthDate, income, outflow, description } = request.body;

    const updateTransactionService = new UpdateUserTransactionService();

    const transaction = await updateTransactionService.execute(id, {birthDate,income,outflow,description});

    return response.json({message:"Updated Successfully"});
  }
}

export { UpdateTransactionsController }