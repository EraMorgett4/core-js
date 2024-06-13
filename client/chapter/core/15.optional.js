/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
if ('photos' in portableFan) {
  if ('animate' in portableFan.photos) {
    console.log(portableFan.photos.animate);
  }
}

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

portableFan && portableFan.photos && portableFan.photos.animate;

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

portableFan.photos?.animate;

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.
const fullName = portableFan.getFullName?.();
console.log(fullName);

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

// sync(동기)
// async(비동기) webAPI로 구현된 멀티쓰레드 공간

const button = document.querySelector('.my-button');

const id = setTimeout(() => {
  const template = /* html */ `
    <button type="button" class="my-button">my-nutton</button>
  `;
  document.body.insertAdjacentHTML('beforeend', template);
}, 3000);

console.log(id);

clearTimeout(id);

console.log(id);

button?.addEventListener('click', () => {
  console.log('clicked');
});

//연산 오래 거릴는 작업

let count = 0;

const id2 = setInterval(() => {
  console.log(++count);

  document.querySelector(
    '.first'
  ).style.transform = `translateY(${count}px) rotate(${count}deg)`;

  if (count >= 300) {
    clearInterval(id2);
  }
}, 10);

let counter = 0;
function animation() {
  console.log(++counter);
  document.querySelector(
    '.second'
  ).style.transform = `translateY(${counter}px) rotate(${counter}deg)`;
  const id = requestAnimationFrame(animation);
  if (counter >= 300) {
    cancelAnimationFrame(id);
  }
}

animation();
