/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  //   setEat(food) {
  //     this.stomach.push(food);
  //   },
  set eat(food) {
    this.stomach.push(food);
  },
  //   getEat() {
  //     return this.stomach;
  //   },
  get eat() {
    return this.stomach;
  },
};

//animal.setEat('고기');
animal.eat;
animal.eat = '고기';

const tiger = {
  pattern: '호랑이무늬',
  hunt(target) {
    this.prey = target;
    return `${target}에게 조용히 접근한다.`;
  },
  __proto__: animal,
};

const 백두산호랑이 = {
  color: 'white',
  name: '백돌이',
  __proto__: tiger,
};

// 생성자 함수

function Animal() {
  this.legs = 4;
  this.tail = true;
  this.stomach = [];
  this.getEat = function () {
    return this.stomach;
  };
  this.setEat = function (food) {
    this.stomach.push(food);
  };
}

const a1 = new Animal();

//아래 Tiger는 상속 연결이 필요하다.
function Tiger(name) {
  Animal.call(this); //이걸 넣어주면 외부에서 굳이 prototype를 연결할 수고를 할 필요 없다.
  this.name = name;
  this.pattern = '호랑이무늬';
  this.hunt = function (target) {
    return `${target}에게 조용히 접근한다.`;
  };
}

Tiger.bark = function (sound) {
  return sound;
};

//객체의 능력을 상속받아야 하므로, Tiger라는 함수 자체가 오면 안된다.
//따라서 객체가 와야하므로,
Tiger.prototype = a1; //혹은 new Animal();이 와야한다.
const 금강산호랑이 = new Tiger('금순이');
