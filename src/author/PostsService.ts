import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  async findAll({ authorId }) {
    return [{ authorId }, { authorId }, { authorId }];
  }
}
