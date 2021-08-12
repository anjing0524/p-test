import { Injectable } from '@nestjs/common';
import { PageResponse } from 'src/interfaces/page';
import mockData from './mock-page';

@Injectable()
export class CatsService {
  findAll(): string {
    return 'some cats';
  }

  // 分页查询
  findByPage({ cursor, size }, param = {}): PageResponse {
    console.log(cursor, size, param);
    return {
      data: mockData,
      total: 100,
      hasMore: true,
    };
  }
}
