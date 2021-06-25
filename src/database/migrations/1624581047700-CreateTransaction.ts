import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransaction1624581047700 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "transactions",
                columns: [
                    {
                        "name": "id",
                        "type": "uuid",
                        isPrimary: true
                    },
                    {
                        "name": "user_id",
                        "type": "uuid"
                    },
                    {
                        "name": "birthDate",
                        "type": "varchar"
                    },
                    {
                        "name": "income",
                        "type": "float"
                    },
                    {
                        "name": "outflow",
                        "type": "float"
                    },
                    {
                        "name": "description",
                        "type": "string"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transactions");
    }

}
