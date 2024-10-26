import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeUserPasswordHashToPassword1729965382712 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE "user" RENAME COLUMN password_hash TO password;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE "user" RENAME COLUMN password TO password_hash;
        `);
    }

}
