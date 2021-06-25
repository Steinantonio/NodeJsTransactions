import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne} from "typeorm";
import {v4 as uuid} from "uuid";
import { User } from "./User";

@Entity("transactions")
class Transactions {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;

    @JoinColumn({name:"user_id"})
    @ManyToOne(()=> User)
    userID: User;

    @Column()
    birthDate: string;

    @Column()
    income: number;

    @Column()
    outflow: number;

    @Column()
    description: string;

    constructor(){
      if (!this.id){
        this.id = uuid();
      }
    };
}

export {Transactions}