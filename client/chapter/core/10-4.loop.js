/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return '난 누굴까';
  },
};

//in?

Object.prototype.nickName = '호랑이';

// console.log('valueOf' in javaScript);
//true로 출력됨. 왜? 해당 객체 안의 prototype 내부 메소드에 valueOf, toString 등이 있기 때문.
//이 때문에 확인을 위한다면 in 대신 of로 사용 대체중

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

//console.log(javaScript.hasOwnProperty('nickName')); //Do not access Object.prototype method 'hasOwnProperty' from target object

//내가 원하는 값만 찾으려면 hasOwnProperty를 통해 해야하는데, 이는
//객체를 훼손할 가능성이 있음. 때문에 자신의 조상의 method를 사용하여 이를 방지한다.

//메서드 빌려쓰기
Object.prototype.hasOwnProperty.call(javaScript, 'nickName');
console.log({}.hasOwnProperty.call(javaScript, 'nickName')); //위의 코드와 비슷하게 동작한다.

//call()은 조상이 아니더라도 해당 객체의 기능을 빌려 사용 가능하다.

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// for ~ in 문
// - 객체 자신의 속성만 순환하려면? //of를 사용해야함.
// - 배열 객체 순환에 사용할 경우?

//for in : 객체를 넣으면 객체의 key를 순환

for (let key in javaScript) {
  if (Object.prototype.hasOwnProperty.call(javaScript, key)) {
    console.log(key);
  }
}

//enumerable : 열거 가능한
//절대 불변하게 설정 : Object.freeze()

//javaScript['creator'] == javaScript.creator

//점 표기법 => 변수 설정 불가능
//대괄호 표기법 => 변수 설정 가능

const tens = [10, 100, 1000, 10_000];
for (let key in tens) {
  console.log(tens[key]);
}

// for in 은 순서가 중요한 배열에, 순서에 따른 인덱스를 반환하는 정확성을 보장하지 않으므로 사용하지 않는다.
// for in은 객체에게 양보하자.
