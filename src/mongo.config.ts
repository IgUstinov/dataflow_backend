import { LogEntity } from './modules/log/models/log.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

const typeOrmMongoConfig: DataSourceOptions = {
  type: 'mongodb',
  host: '127.0.0.1',
  port: 27017,
  database: 'mongo',
  entities: [LogEntity],
};
export const MongoDataSource = new DataSource(typeOrmMongoConfig);
