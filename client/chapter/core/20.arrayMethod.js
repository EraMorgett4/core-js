/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

//call 내부에 들어간 요소의 타입을 알려주는 함수.
console.log(Object.prototype.toString.call([])); //[object Array]

console.log(Object.prototype.toString.call([]).slice(8, -1).toLowerCase()); //array

// function isArray(data) {
//   return (
//     Object.prototype.toString.call([]).slice(8, -1).toLowerCase() === 'array'
//   );
// }

// const isArray = (data) =>
//   Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

// const isNull = (data) =>
//   Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'null';

// // 합치자
// function typeOf(data) {
//   return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
// }
// 합친걸 type.js에 넣을까

const people = [
  {
    id: 0,
    name: '안재명',
    age: 25,
    job: '물음표살인마',
    imgSrc: 'aszfkq',
  },
  {
    id: 1,
    name: '황선우',
    age: 51,
    job: '요식업 사장님',
    imgSrc: 'zvkkrq',
  },
  {
    id: 2,
    name: '유진',
    job: '디스코드 봇',
    age: 12,
    imgSrc: 'gkzqg',
  },
  {
    id: 3,
    name: '김한울',
    job: '비둘기',
    age: 39,
    imgSrc: 'glzqoe',
  },
];

/* 요소 순환 ---------------------------- */

// forEach
people.forEach((user) => {
  console.log(user.job);
});

const span = document.querySelectorAll('span');

span.forEach((tag) => {
  tag.addEventListener('click', function () {
    this.style.color = 'dodgerblue';
  });
});

const first = document.querySelector('.first');
const second = document.querySelector('.second');
first.addEventListener('click', () => {
  console.log('first를 클릭하셨습니다.');
});
second.addEventListener('click', () => {
  console.log('second를 클릭하셨습니다.');
});

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse

// splice
// people.splice(0, 2, '안녕');

// sort
function compare({ age: a }, { age: b }) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

people.sort(compare);
console.log(...people);

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
const toSorted = people.toSorted(compare);
console.log(...toSorted);

// toReversed
const toReversed = people.toReversed();
console.log(...toReversed);

// toSpliced
const toSpliced = people.toSpliced(0, 2);
console.log(...toSpliced);
console.clear();
// map

//이름만 담은 배열 반환
const nameList = people.map((user) => {
  return user.name;
});
console.log(nameList);

const age = people.map((u) => u.age + 2);
console.log(age);

const nameTag = people.map(({ name }) => {
  return `<li> 이름 : ${name}</li>`;
});

nameTag.forEach((tag) => {
  document.body.insertAdjacentHTML('beforeend', tag);
});

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join
