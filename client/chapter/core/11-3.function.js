/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
  console.log(...rest);
  //for문
  let temp1 = 0;
  for (let i = 0; i < rest.length; i++) {
    temp1 += rest[i];
  }

  // for ... of 문
  let temp2 = 0;
  for (let unit of rest) temp2 += unit;

  // forEach
  let temp3 = 0;
  //rest.forEach(function(item){total+=item;})
  rest.forEach((element) => (temp3 += element));

  //reduce
  let temp4 = rest.reduce((accu, cur) => accu + cur);
  temp4 = rest.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);

  console.log(temp1, temp2, temp3, temp4);

  return rest.reduce((acc, cur) => acc + cur, 0);
};

const result = calcAllMoney(100, 200, 300, 400);
console.log(result);

// 화살표 함수와 this

// JS의 함수는 양면의 얼굴(두가지 기능) => 일반 함수 / 생성자 함수
// 생성자(constructor) 는 new 를 통해 생성

// 생성자에 관한 관례 : 함수의 첫글자를 대문자로 설정한다. -> new 키워드를 통해 생성되었음을 약속
function Button(text) {
  this.content = text;
}

const a = Button('more');
const b = new Button('more');

// arrow function 은 prototype을 내장하고 있지 않기 때문에 constructor로 사용할 수 없다.

// 오늘날 별도의 생성자를 만들기 보다, class 통해 이를 실행한다.

// 일반 함수
//      constructor 내장
//      this : 나를 호출한 대상을 this로 지정
//      concise 함수의 형식으로 객체의 메서드로 사용이 많이 됨 -> this를 찾기 위해

// 화살표 함수
//      constructor 내장하지 않음
//      this: 바인딩 하지 않음(상위 컨택스트에서 찾음. 때문에 윈도우가 출력됨)
//      메서드 안의 함수를 작성해야할 때 활용. 내 상위 this를 가져오기 때문

const user = {
  sayHi: function () {
    console.log(this);
  },

  sayHi2: () => {
    console.log(this);
  },
  sayHi3() {
    console.log(this);
  },
};

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
const pow = (numeric, powerCount) => {
  return Array(powerCount)
    .fill(null)
    .reduce((acc) => {
      return (acc *= numeric);
    }, 1);
};
// repeat(text: string, repeatCount: number): string;

// const repeat = (text, repeatCount) => {
//   let temp = '';
//   for (let i = 0; i < repeatCount; i++) {
//     temp += text;
//   }
//   return temp;
// };

const repeat = (text, repeatCount) => {
  return Array(repeatCount)
    .fill(null)
    .reduce((acc) => {
      return acc + text;
    }, '');
};

console.log(repeat('안녕', 3));
