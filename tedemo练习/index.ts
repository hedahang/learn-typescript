// 属性装饰器
function logProperty(params: any) {
  return function (target: any, attr: any) {
    console.log(target); // 类的原型对象: {getData: ƒ, constructor: ƒ}
    console.log(attr); // apiUrl
    target[attr] = params;
  };
}
class HttpClient {
  @logProperty("http://www.baidu.com")
  public apiUrl: string | undefined;
  constructor() {}
  getData() {
    console.log(this.apiUrl);
  }
}

var http = new HttpClient();
http.getData(); // "http://www.baidu.com "