import { getCustomRepository } from "typeorm";
import { TransactionsRepositories } from "../repositories/TransactionsRepositories";
import { Request, Response } from "express";
import { CreateTransactionService } from "./CreateTransactionService";


class ListTransactionsByUserService {
  async execute(userId: string) {
    const transactionRepository = getCustomRepository(TransactionsRepositories);

    const transactions = await transactionRepository.find({
      where: {
        user_id: userId
      },
    });
    return transactions;
  }

  async listById(id: string) {
    const transactionRepository = getCustomRepository(TransactionsRepositories);

    const list = await transactionRepository.findOne({
      where: { id }
    });
    return list;
  };
}

export { ListTransactionsByUserService }