import { Request, Response } from "express";
import { CreateTransactionService } from "../services/CreateTransactionService";
import { ListTransactionsByUserService } from "../services/ListTransactionsByUserService";


class ListTransactionController{

    async handle (request: Request, response: Response){
       const {user_id} = request;

       const listUserTransactions = new ListTransactionsByUserService();

       const transactions = await listUserTransactions.execute(user_id);

       return response.json(transactions);
    }

    async listById (request: Request, response: Response) {
      const {id} = request.params;

      const listTransactionsService = new ListTransactionsByUserService();
      
      const list = await listTransactionsService.listById(id);

      return response.json(list);
    }
}


export {ListTransactionController};