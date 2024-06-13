function earth() {
  let water = true;
  let gravity = 10;
  function tiger(value) {
    gravity = value;
    return [water, gravity];
  }

  return tiger;
}

const ufo = earth();

/* 
function earth(){
let water = true;
let gravity = 10;
    return function(value){
    gravity = value;
    return
    }
}

const ufo = earth();
*/

const button = document.querySelector('button');

// function handleClick() {
//   let isClicked = false;

//   return () => {
//     if (!isClicked) {
//       document.body.style.background = 'orange';
//     } else {
//       document.body.style.background = 'white';
//     }

//     isClicked = !isClicked;
//     console.log('왜눌러');
//     console.log(`isClicked:${isClicked}`);
//   };
// }

// button.addEventListener('click', handleClick());

const handleClick = (() => {
  let isClicked = false;

  return () => {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
    console.log('왜눌러');
    console.log(`isClicked:${isClicked}`);
  };
})();

button.addEventListener('click', handleClick);

function useState(init) {
  let value = init;
  function read() {
    return value;
  }
  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}

const [getNumber, setNumber] = useState(10);

const result = useState(10);
const getter = result[0];
const setter = result[1];
