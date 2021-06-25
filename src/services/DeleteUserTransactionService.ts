import { createQueryBuilder, getConnection, getCustomRepository, TransactionRepository } from "typeorm"
import { Transactions } from "../entity/Transactions";
import { TransactionsRepositories } from "../repositories/TransactionsRepositories";


class DeleteUserTransactionService {

  async execute(id: string) {
    const transactionRepository = getCustomRepository(TransactionsRepositories);

    await transactionRepository.createQueryBuilder()
    .delete()
    .from(Transactions)
    .where("id = :id", { id })
    .execute()
  }
}
export { DeleteUserTransactionService }