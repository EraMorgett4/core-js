import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './type.js';
import { xhrPromise } from './xhr.js';
import { insertLast } from '../dom/insert.js';

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');

first.style.top = '-100px';
first.style.transform = 'rotate(360deg)';

delay(() => {
  first.style.top = '-100px';
  second.style.top = '100px';
  delay(() => {
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';
    delay(() => {
      first.style.top = '0px';
      second.style.top = '0px';
    });
    second.style.transform = 'rotate(-360deg)';
  });
  second.style.top = '100px';
});

const shouldRejected = false;

const p = new Promise((resolve, reject) => {
  if (!shouldRejected) {
    resolve('성공!!');
  } else {
    reject('실패!');
  }
});
// console.log(p);

// 객체 합성
const defaultOptions = {
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }
  // const {shouldRejected,data,errorMessage,timeout} = options;

  //믹스인
  // const config = {...defaultOptions, ...options}
  // console.log(`config:${config}`);
  const { shouldRejected, data, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldRejected) {
        resolve(data);
      } else {
        reject({ message: errorMessage });
      }
    }, timeout);
  });
}

delayP({
  shouldRejected: false,
  data: '성공',
  errorMessage: '알 수 없는 오류',
  timeout: 1000,
});

delayP()
  .then((res) => {
    // console.log(res);
    first.style.top = '-100px';
    second.style.top = '100px';

    return delayP();
  })

  .then((res) => {
    // console.log(res);
    first.style.transform = 'rotate(360deg)';
    second.style.transform = 'rotate(-360deg)';

    return delayP();
  })
  .then((res) => {
    first.style.top = '0px';
    second.style.top = '0px';
    // console.log(res);
  });

//async / await

//await 2가지 기능 수행
//    1. result 꺼내오기. await만 붙이더라도 바로 data를 꺼낼 수 있다.
//      이는 Promise 객체여만 꺼내 쓸 수있다.

async function delayA(data) {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공!');
    }, 2000);
  });

  const result = await p; //result에 값이 담기기 전까지 await는 대기하고 있다.
  // console.log(result);
  return;
}

// console.log(delayA('지연'));
delayA('지연').then((res) => {
  // console.log(res);
});

const data = await delayA('지연');
// console.log(`data:${data}`);

async function 라면끓이기() {
  await delayP();
  console.log('물');
  await delayP();
  console.log('스프');
  await delayP();
  console.log('면');
  await delayP();
  console.log('그릇');

  const a = await delayP({ data: '물' });
  console.log(a);

  const b = await delayP({ data: '스프' });
  console.log(b);

  const c = await delayP({ data: '면' });
  console.log(c);

  const d = await delayP({ data: '그릇' });
  console.log(d);
}

// 라면끓이기();

async function getData() {
  const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/172');

  insertLast(
    document.body,
    `<img src="${data.sprites.other.showdown['front_default']}" alt="" />`
  );
}

getData();
