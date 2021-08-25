import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from 'fastify-helmet';
import fastifyCsrf from 'fastify-csrf';
import fastifyCookie from 'fastify-cookie';
import { AppModule } from './app.module';
import rateLimit from 'fastify-rate-limit';

async function bootstrap() {
  const fastify = new FastifyAdapter({ logger: true });
  await fastify.register(helmet);
  await fastify.register(fastifyCookie);
  await fastify.register(fastifyCsrf);
  await fastify.register(rateLimit, { max: 100, timeWindow: '1 minute' });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastify,
  );
  await app.listen(4000);
}
bootstrap();
