import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624603576682 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                "name": "users",
                "columns": [
                    {
                        "name":"id",
                        "type":"uuid",
                        isPrimary:true
                    },
                    {
                        "name":"login",
                        "type":"varchar"
                    },
                    {
                        "name":"password",
                        "type":"varchar"
                    },
                    {
                        "name":"email",
                        "type":"varchar"
                    },
                    {
                        "name":"name",
                        "type": "varchar",
                    },
                    {
                        "name":"birthDate",
                        "type": "varchar"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");

    }

}
