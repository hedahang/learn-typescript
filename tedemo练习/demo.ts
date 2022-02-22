class Xiao {
  constructor(private _age: number) {}
  get age() {
    return this._age - 10;
  }
  set age(age: number) {
    this._age = age + 3;
  }
}

const dajiao = new Xiao(28);
dajiao.age = 25;
console.log(dajiao.age);

class Girls {
  static sayLove() {
    return "I see you";
  }
}

console.log(Girls.sayLove());

class Person {
  constructor(public readonly name: string) {}
}
const person = new Person("张三");
// person.name = "李白";
console.log(person.name);

// 抽象类
abstract class Girl {
  abstract skill();
}

class Water extends Girl {
  skill() {
    console.log("大爷，请喝水！");
  }
}
class BaseTeacher extends Girl {
  skill() {
    console.log("大爷，来个泰式按摩吧！");
  }
}

class seniorTeacher extends Girl {
  skill() {
    console.log("大爷，来个SPA全身按摩吧！");
  }
}

interface Water {
  anjiao: boolean;
  say: () => {};
}
interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

function judgeWho(animal: Water | Teacher) {
  if (animal.anjiao) {
    (animal as Teacher).skill();
  } else {
    (animal as Water).say();
  }
}

function judgeWhoTwo(animal: Water | Teacher) {
  if ("skill" in animal) {
    animal.skill();
  }
  if ("say" in animal) {
    animal.say();
  }
}

function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}

class NumberObj {
  count: number;
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  } else {
    return 0;
  }
}

enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN,
}
function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "SPA";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}
const result = getServe(Status.SPA);
console.log(Status.MASSAGE, Status[1]);
console.log(result);

function join<JSDBI>(first: JSDBI, second: JSDBI) {
  return `${first}${second}`;
}
console.log(join<number>(2, 1));

function myFun<T>(params: T[]) {
  return params;
}
console.log(myFun<string>(["123", "456"]));

function myFun2<T, P>(params: T, name: P) {
  return `${params}+${name}`;
}

console.log(myFun2<string, number>("123", 456));

class SelectGirls<T extends string | number> {
  constructor(private girls: T[]) {}
  getGrils(index: number): T {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirls<string>(["大脚", "刘英", "晓红", "小月"]);
console.log(selectGirl.getGrils(1));

interface GirlFace {
  name: string;
}
class SelectGirlsTwo<T extends GirlFace> {
  constructor(private girls: T[]) {}
  getGrils(index: number): string {
    return this.girls[index].name;
  }
}

const selectGirlTwo = new SelectGirlsTwo<GirlFace>([
  { name: "大脚" },
  { name: "刘英" },
  { name: "晓红" },
  { name: "小月" },
]);
console.log(selectGirlTwo.getGrils(3));

namespace Home {  
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}