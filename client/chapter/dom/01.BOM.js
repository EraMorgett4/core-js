/* ------------------------------ */
/* Browser Object Model           */
/* ------------------------------ */

/*
JavaScript가 작동하는 플랫폼은 호스트(host)라고 불립니다. 
호스트는 브라우저, 웹서버, 심지어는 커피 머신이 될 수도 있습니다. 

각 플랫폼은 해당 플랫폼에 특정되는 기능을 제공하는데, JavaScript 명세서에는 
이를 호스트 환경(host environment) 이라고 부릅니다.

호스트 환경은 JavaScript 코어에 더해 플랫폼에 특정되는 객체와 함수를 제공합니다. 
웹 브라우저는 웹 페이지를 제어하기 위한 수단을 제공하고, Node.js는 서버를 포함해 
애플리케이션 개발에 필요한 다양한 기능을 제공합니다.

브라우저 객체 모델(Browser Object Model, BOM)은 문서 이외의 모든 것을 
제어하기 위해 브라우저(호스트 환경)가 제공하는 추가 객체를 나타냅니다.
*/

/* Window 객체 ----------------------------------------------------------- */

const { alert, confirm, prompt, setTimeout, setInterval } = window;

/* Location 객체 --------------------------------------------------------- */
// http://localhost:5500/index.html?type=listing&page=2#title

const { href, protocol, host, port, search, hash, replace, reload } = location;

console.log(href); // 주소 전체
console.log(protocol); //http
console.log(host); //localhost:5500
console.log(port); //5500
console.log(search); // parameter를 전달받아서 쿼리를 갖고옴
console.log(hash); //#이하의 내용을 갖고옴

const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`);
}
//urlParams.get('type')를 통해 하나만 집어서 확인 가능

/* Navigator 객체 -------------------------------------------------------- */

const { platform, userAgent, language, onLine, geolocation } = navigator;
console.log(`navigator.onLine: ${navigator.onLine}`);
console.log(userAgent);
console.log(platform);
console.log(language);
console.log(onLine);
console.clear();
navigator.geolocation.getCurrentPosition();

navigator.geolocation.getCurrentPosition((data) => {
  console.log(data);
});

function getGeolocation(success, fail) {
  navigator.geolocation.getCurrentPosition((data) => {
    if (data) {
      const { latitude: lat, longitude: long } = data.coords; // geolocation position으로부터 구조분해할당하여 정보 추출

      const geo = { lat, long };
      success(geo);
    } else {
      fail({ message: '위치 서비스 동의 하세요' });
    }
  });
}

getGeolocation(
  ({ lat, long }) => {
    console.log(lat, long);
  },
  (e) => {
    console.log(e.message);
  }
);

// function getGeolocation() {
//   return new Promise((resolve, reject) => {
//     navigator.geo.getCurrentPosition((data) => {
//       if (data) {
//         const { latitude: lat, longitude: long } = data.coords;

//         const geo = { lat, long };
//         resolve(geo);
//       } else {
//         reject({ message: '위치 서비스 동의 필요' });
//       }
//     });
//   });
// }

navigator.geolocation.getCurrentPosition((data) => {
  if (data) {
    console.log(data);
    const { latitude: lat, longitude: long } = data.coords;
    console.log(lat, long);
  } else {
    console.error('위치 서비스 동의가 필요합니다.');
  }
});

// callback -> promise -> async await

// function getGeolocation(){

//   return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition((data)=>{

//     if(data){
//       const {latitude:lat,longitude:long} = data.coords;
//       const geo = { lat, long };
//       resolve(geo)
//     }
//     else{
//       reject({message:'위치 서비스 동의 하세요'});
//     }
//     })
//   })
// }

// getGeolocation()
// .then(res => console.log(res))

// navigator.mediaDevices.getUserMedia({video:true})
// .then((stream)=>{
//   document.querySelector('#videoElement').srcObject = stream;
// })

/* Screen 객체 ----------------------------------------------------------- */

const { width, height, availWidth, availHeight, orientation } = screen;

/* History 객체 ---------------------------------------------------------- */

const { back, forward, go, length, pushState, replaceState } = history;
