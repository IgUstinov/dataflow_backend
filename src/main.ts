import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  const port: number = Number(process.env.PORT ?? 3000);
  await app.listen({ port: port, host: '0.0.0.0' }, function (err, address) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`server listening on ${address}`);
  });
}
bootstrap();
