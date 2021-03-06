import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createEmployees1615056285438 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'employees',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "name",
          type: "varchar",
        },
        {
          name: "bornDate",
          type: 'varchar',
        },
        {
          name: "salary",
          type: 'decimal',
        },
        {
          name: "position",
          type: 'varchar',
        }
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employees')
  }

}
