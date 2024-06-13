/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;
console.log('AandB :', AandB);

//논리곱 + 할당 연산자

// a &&= b;

// 논리합(또는) 연산자
let AorB = a || b;
console.log('AorB :', AorB);

//논리합 + 할당연산자
// a||=b;

// 부정 연산자
let reverseValue = !value;
console.log('reverseValue : ', reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
//let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };
// console.log('whichFalsy:', whichFalsy);
// //let ar = true && [];
// console.log('ar:', ar);

// 첫번째 Truthy를 찾는 연산 (||)
//let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

function login() {
  let isEscPressed = false;
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      isEscPressed = true;
    }
  });

  let userName = prompt('누구세요?', '');

  if (userName == '' || userName == null || isEscPressed == true) alert('취소');
  else if (userName.toLowerCase() == 'admin') {
    let password = prompt('비번:', '');
    password = password.toLowerCase();
    if (userName.toLowerCase() == 'admin') alert('환영');
    else if (password == '' || password == null || isEscPressed == true)
      alert('취소');
    else alert('비번 틀림');
  } else alert('진짜 누구임?');
}

login();

// replace(/\s*/g, '')
