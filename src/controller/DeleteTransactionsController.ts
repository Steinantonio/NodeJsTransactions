import { Request, Response } from "express";
import { DeleteUserTransactionService } from "../services/DeleteUserTransactionService";



class DeleteTransactionsController {

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteUserTransactionServices = new DeleteUserTransactionService();

    await deleteUserTransactionServices.execute(id);

    return response.json({message: "Deleted successfully"});
  }
}

export { DeleteTransactionsController }
