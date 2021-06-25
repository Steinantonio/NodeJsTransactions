import { getCustomRepository } from "typeorm";
import { Transactions } from "../entity/Transactions";
import { TransactionsRepositories } from "../repositories/TransactionsRepositories"

interface ITransactionUpdate {
  birthDate: string;
  income: number;
  outflow: number;
  description: string
}

class UpdateUserTransactionService {

  async execute(id: string, {birthDate, income, outflow, description }: ITransactionUpdate) {

    const transactionRepository = getCustomRepository(TransactionsRepositories);

    await transactionRepository.createQueryBuilder()
    .update(Transactions)
    .set({birthDate,income,outflow,description})
    .where("id = :id", {id})
    .execute();

  };

}

export { UpdateUserTransactionService }