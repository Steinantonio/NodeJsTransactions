import { getCustomRepository } from "typeorm"
import { TransactionsRepositories } from "../repositories/TransactionsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface ITransactionRequest {
  user_id: string;
  birthDate: string;
  income: number;
  outflow: number;
  description: string
}

class CreateTransactionService {
  async execute({ user_id, birthDate, income, outflow, description }: ITransactionRequest) {

    const usersRepositories = await getCustomRepository(UsersRepositories);
    const userExist = usersRepositories.findOne(user_id);
    if (!userExist) {
      throw new Error("Cannot Create Transaction")
    }

    const transactionRepository = await getCustomRepository(TransactionsRepositories);

    const transaction = transactionRepository.create({
      user_id,
      birthDate,
      income,
      outflow,
      description
    })

    await transactionRepository.save(transaction)

    return transaction;
  }
}

export { CreateTransactionService }