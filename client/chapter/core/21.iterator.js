/* ---------------------------------------------------------------------- */
/* Iterable Object                                                        */
/* ---------------------------------------------------------------------- */

// 배열을 일반화 한 객체
// for-of 문을 사용할 수 있는 객체
// Symbol.Iterator 메서드가 필히 구현되어야 함
// Symbol.Iterator 메서드는 이터레이터 객체를 반환하며
// 이터레이터 객체는 next() 메서드를 가짐 ({ done: Boolean, value: any } 타입 반환)

const arr = '1 2 3 4 5 6'.split(' ');

const iter = arr[Symbol.iterator]();

// for (const a of iter) {
//   console.log(a);
// }

// 순환이 끝나면 iter 는 다음 순환떄 동작하지 않는다.
console.log(iter.next().value); //1
console.log(iter.next().value); //2
console.log(iter.next().value); //3
console.log(iter.next().value); //4
console.log(iter.next().value); //5
console.log(iter.next().value); //6
console.log(iter.next().value); //더이상 iter 내엔 내놓을 요소가 없으므로 undefined를 반환한다.

const range = {
  from: 1,
  to: 5,
  length: 5,
  [Symbol.iterator]() {
    let current = this.from;
    let last = this.to;

    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const gene = gen();

const customIter = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const a of customIter) {
  console.log(a);
}

// 유사배열 vs. 이터러블
// - 유사배열 : 인덱스 키와 length 속성을 가진 객체
// - 이터러블 : Symbol.Iterator 메서드를 가지는 객체

function* idGenerator() {
  let id = 1;
  while (true) {
    yield `user-${crypto.randomUUID()}`;
  }
}

const id = idGenerator();

// 유사배열, 이터러블 배열화

//1. 일관된 반복 동작 제공( for..of)
//2. 커스텀 반복제어 가능 (객체를 반복 가능한 상태로)
//3. 지연 계산(필요할 때 마다 반복을 돌림)
// 4. 무한 시퀀스 생성 (무한대의 값 생성)
// 5. 비동기 반복 작업
// 6. 다양한 데이터 소스와의 통합 ( Map, Set )
