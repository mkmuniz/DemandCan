import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatingDemandEntity1696881576925 implements MigrationInterface {
    name = 'CreatingDemandEntity1696881576925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "demand_entity" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "description" varchar NOT NULL, "sku" varchar NOT NULL, "status" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "demand_entity"`);
    }

}
