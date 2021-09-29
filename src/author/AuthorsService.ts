import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  async findOneById(id: number) {
    return { id };
  }
}
