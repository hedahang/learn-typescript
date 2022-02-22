interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

//定义一个操作mysql数据库的类

export class MySqlDb<T> implements DBI<T> {
  constructor() {
    console.log("数据库建立连接");
  }
  add(info: T): boolean {
    console.log("添加数据成功：" + JSON.stringify(info));
    return true;
  }

  update(info: T, id: number): boolean {
    console.log("更新数据id:" + id + "成功：" + JSON.stringify(info));
    return true;
  }
  delete(id: number): boolean {
    console.log("删除数据id:" + id + "成功");
    return true;
  }
  get(id: number): any[] {
    console.log("获取数据id:" + id + "成功");
    return [
      {
        title: "xxxx",
      },
    ];
  }
}
