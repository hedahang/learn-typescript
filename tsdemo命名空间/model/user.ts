import { MySqlDb } from "../modules/db";

//定义数据库的映射
class UserClass {
  username: string;
  password: string;
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

var UserModel = new MySqlDb<UserClass>();
export { UserClass, UserModel };
