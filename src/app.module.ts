import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/user/models/user.entity';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "0.0.0.0",
      port: 5432,
      username: "postgres",
      password: "postgres",
      database: "postgres",
      entities: [User],
      synchronize: false,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
