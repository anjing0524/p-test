import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import Data from '../interfaces/data';
import { PageRequest, PageResponse, TableListItem } from 'src/interfaces/page';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string {
    return this.catsService.findAll();
  }

  @Post('/add')
  async addData(@Body() data: TableListItem): Promise<TableListItem> {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data;
  }

  @Post('/page')
  findByPage(@Body() qBody: PageRequest): PageResponse {
    console.log(qBody);
    const { cursor, size } = qBody;
    return this.catsService.findByPage({ cursor, size }, {});
  }

  @Get('/data')
  findDataSource(): Data[] {
    return [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
      {
        key: '4',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '5',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
      },
      {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
      },
    ];
  }
}
