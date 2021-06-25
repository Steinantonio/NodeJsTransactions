import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import {v4 as uuid} from "uuid";

@Entity("users")
class User {

  @PrimaryColumn()
  readonly id: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  name: string;

  @CreateDateColumn()
  birthDate: string;


  constructor(){
    if (!this.id){
      this.id = uuid();
    }
  };
}

export { User }