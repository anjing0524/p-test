import { Injectable } from '@nestjs/common';
import { PageResponse } from 'src/interfaces/page';
import mockData from './mock-page';

@Injectable()
export class CatsService {
  findAll(): string {
    return 'some cats';
  }

  // 分页查询
  findByPage({ cursor, size }, param: any): PageResponse {
    console.log(cursor, size, param);
    const { status } = param;
    let fList = mockData;
    if (status) {
      // 模拟过滤数据
      fList = mockData.filter((e) => e.status === status);
    }
    // 模拟分页查询
    const rList = fList.slice(cursor, cursor + size);
    return {
      data: rList,
      total: fList.length,
      hasMore: cursor + size < fList.length,
    };
  }
}
