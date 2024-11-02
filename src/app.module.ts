import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { LogModule } from './modules/log/log.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongoDataSource, PostgresDataSource } from './typeorm.config';
import { KafkaModule } from './brokers/kafka/kafka.module';
import { RabbitMQModule } from './brokers/rabbitmq/rabbitmq.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      name: 'MONGO_CONNECTION',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ...MongoDataSource.options,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      name: 'POSTGRES_CONNECTION',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        ...PostgresDataSource.options,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    LogModule,
    KafkaModule,
    RabbitMQModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
