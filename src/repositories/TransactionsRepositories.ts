import {Repository, EntityRepository} from 'typeorm';
import {Transactions} from '../entity/Transactions';

@EntityRepository(Transactions)
class TransactionsRepositories extends Repository<Transactions> {
  
}

export{TransactionsRepositories}