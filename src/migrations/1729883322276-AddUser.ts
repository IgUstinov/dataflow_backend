import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUser1729883322276 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            INSERT INTO "user" (username, email, password_hash) VALUES
            ('Alice', 'alice@example.com', 'hash123'),
            ('Bob', 'bob@example.com', 'hash123'),
            ('Charlie', 'charlie@example.com', 'hash123');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DELETE FROM "user" WHERE username IN (Alice, Bob, Charlie);
        `);
    }

}
