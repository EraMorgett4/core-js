/* --------- */
/* Object    */
/* --------- */

// const { isObject } = require('solc/common/helpers');

/*global isObject*/
console.log(isObject);

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css*/ `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: 800,
  height: '40vh',
  minHeight: 280,
  transform: 'translate(-50%, -50%)',
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

authUser = {
  uid: 'user-id-zxk!awkeljfh',
  name: 'tiger',
  email: 'sadf@gmail.com',
  isSignIn: false,
  permission: 'paid',
};

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

console.log(authUser['uid']);
console.log(authUser['name']);
console.log(authUser['email']);
console.log(authUser['isSignIn']);
console.log(authUser['permission']);

//
for (let key in authUser) {
  if ({}.hasOwnProperty.call(authUser, key)) {
    console.log(authUser[key]);
  }
}

// 객체의 key만을 모아놓은 배열을 반환하는 메서드 Object.keys()
const keyList = Object.keys(authUser);
console.log(keyList);

//  객체의  value만을 모앗 배열을 반환하는 메서드 Object.values()
const valueList = Object.values(authUser);
console.log(valueList);

function getPropertiesList(obj) {
  let result = [];

  for (let key in obj) {
    if ({}.hasOwnProperty.call(obj, key)) {
      result.push(key);
    }
  }

  return result;
}

// 프로퍼티 제거 및 삭제
// 제거 : 비워두기 -> null
// 삭제 : 메모리 날림 -> delete

function removeProperty(obj, key) {
  if (isObject(obj)) {
    obj[key] = null;
  }
}

function deleteProperty(obj, key) {
  if (isObject(obj)) {
    delete obj[key];
  }
}

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(name, age, phone) {
  return {
    name: name,
    age: age,
    [calculateProperty]: phone,
  };
}

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제

// 단축 프로퍼티 - 키와 값이 같다면, 값을 생략하여 작성할 수 있음.
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

const arr = [10, 100, 1000, 10_000];
// 위 배열을 구조분해 할당하면 아래와 같다.
const [a0, a1, a2, a3] = arr;

// 특정 위치의 값을 쓰고싶지 않을 땐, 아래와 같이 쓸 수 있다.

const [, , b2] = arr;
// b2 > 1000

const [c0, ...s] = arr;
// s > [100, 1000, 1000]

const [first, second] = document.querySelectorAll('span');
// first == <span class = "first">hello</span>

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

//순서를 고려하지 않으며, key와 변수명이 동일해야함.

const salaries = {
  함정민: 95,
  지유진: 110,
  이진용: 15,
  한상학: 300,
};

console.log(salaries.함정민);
const { 함정민: 함, 지유진, 한상학, 이진용, 장주원 = 500 } = salaries;
//변수명은 재정의 가능하다.

//기본값 설정 및 사용도 가능하다.

function createUserObject(obj) {
  const { name, age, gender, job = '홈프로텍터' } = obj;

  return { name, age, gender, job };
}

const person = createUserObject({
  name: 'beom',
  age: 40,
  gender: 'male',
  job: '개발자',
});
