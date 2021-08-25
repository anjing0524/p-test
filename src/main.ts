import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from 'fastify-helmet';
import fastifyCsrf from 'fastify-csrf';
import fastifyCookie from 'fastify-cookie';
import { AppModule } from './app.module';

async function bootstrap() {
  const fastify = new FastifyAdapter({ logger: true });
  fastify.register(helmet);
  fastify.register(fastifyCookie);
  fastify.register(fastifyCsrf);

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastify,
  );
  await app.listen(4000);
}
bootstrap();
