import { LogEntity } from './modules/log/models/log.entity';
import { User } from './modules/user/models/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

const typeOrmPostgresConfig: DataSourceOptions = {
  type: 'postgres',
  host: '0.0.0.0',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [User],
  synchronize: false,
};

const typeOrmPostgresMigrationConfig: DataSourceOptions = {
  ...typeOrmPostgresConfig,
  migrations: ['./src/migrations/*.ts'],
  migrationsTableName: 'migrations',
};

const typeOrmMongoConfig: DataSourceOptions = {
  type: 'mongodb',
  host: '127.0.0.1',
  port: 27017,
  database: 'mongo',
  entities: [LogEntity],
};

export const PostgresDataSource = new DataSource(typeOrmPostgresConfig);
export const PostgresMigrationDataSource = new DataSource(
  typeOrmPostgresMigrationConfig,
);
export const MongoDataSource = new DataSource(typeOrmMongoConfig);
