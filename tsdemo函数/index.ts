// 定义一个接口
interface DBI<T> {
  add(info: T): boolean;
  update(info: T, id: number): boolean;
  delete(id: number): boolean;
  get(id: number): any[];
}

// 定义一个操作mysql数据库的类
// 注意：要实现泛型接口 这个类也应该是一个泛型类

class MySqlDb<T> implements DBI<T> {
  constructor() {
    console.log("数据库建立连接");
  }
  add(info: T): boolean {
    console.log("mysql", info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    var list = [
      {
        id: id,
        title: "xxxx",
        desc: "xxxxxxxxxx",
      },
    ];
    return list;
  }
}

// 定义一个操作mssql数据库的类
class MsSqlDb<T> implements DBI<T> {
  constructor() {
    console.log("数据库建立连接");
  }
  add(info: T): boolean {
    console.log("mssql", info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
}

class MongoDb<T> implements DBI<T>{
  constructor() {
    console.log("数据库建立连接");
  }
  add(info: T): boolean {
    console.log("mongoDb", info);
    return true;
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.");
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.");
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.");
  }
  
}

//操作用户表   定义一个User类和数据表做映射

class User {
  username: string | undefined;
  password: string | undefined;
}

var u = new User();
u.username = "张三111";
u.password = "123456";

var oMySql = new MySqlDb<User>();
oMySql.add(u);
console.log(oMySql.get(1));

var oMsSql = new MsSqlDb<User>();
oMsSql.add(u);

var oMongoDb = new MongoDb<User>();
oMongoDb.add(u);
