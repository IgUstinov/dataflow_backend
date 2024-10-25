import { User } from 'src/modules/user/models/user.entity';
import { DataSource } from 'typeorm';

export default new DataSource({
    type: "postgres",
    host: "0.0.0.0",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [User],
    synchronize: false,
    migrations: ["./src/migrations/*.ts"],
    migrationsTableName: "migrations"
});