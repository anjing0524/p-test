import { Module } from '@nestjs/common';
import { AuthorResolver } from './AuthorResolver';
import { AuthorService } from './AuthorsService';

@Module({
  providers: [AuthorService, AuthorResolver],
})
export class AuthorsModule {}
