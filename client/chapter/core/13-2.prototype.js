/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

//1. 객체의 상속
//2. 생성자 함수의 상속
//3. 생성자 함수 모던 방식 class

class Animal {
  constructor() {
    this.legs = 4;
    this.tail = true;
    this.stomach = [];
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.stomach.push(food);
  }
}

const a = new Animal('포동이');

class Tiger extends Animal {
  constructor(name) {
    super(name);
    this.pattern = '호랑이무늬';
  }

  static options = {
    version: '1.0.0',
    company: '8b-studio',
    ceo: '심선범',
  };

  static setOptions(version, company, ceo) {
    this.options.version = version;
    this.options.company = company;
    this.options.ceo = ceo;
  }

  static bark(sound) {
    return sound + '🐯';
  }

  hunt(target) {
    return `${target}에게 조용히 접근한다.`;
  }
}

const 호랑이 = new Tiger('호돌이');
