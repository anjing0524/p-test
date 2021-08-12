import { range } from 'lodash';
import { TableListItem } from 'src/interfaces/page';

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];
export default range(0, 1000).reduce((pre: TableListItem[], cur: number) => {
  const item: TableListItem = {
    key: cur,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: Math.floor(Math.random() * 10) % 4,
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * cur,
    progress: Math.ceil(Math.random() * 100) + 1,
    memo:
      cur % 2 === 1
        ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴'
        : '简短备注文案',
  };
  pre.push(item);
  return pre;
}, []);
