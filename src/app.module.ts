import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from './cats/cats.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: () => ({
        typePaths: ['./**/*.graphql'],
      }),
    }),
    CatsModule,
    AuthModule,
    UsersModule,
  ],
  // controllers: [AppController, CatsController],
  controllers: [AppController],
  providers: [AppService, CatsService],
})
export class AppModule {}
