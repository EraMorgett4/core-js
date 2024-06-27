import { tiger, getNode, insertLast } from './lib/index.js';

const ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

// 1. user 데이터 fetch 해주세요.
//    - tiger.get

// 2. fetch 데이터의 유저 이름만 콘솔 출력
//     - 데이터 유형 파악  ex) 객체,배열,숫자,문자
//     - 적당한 메서드 사용하기

// 3. 유저 이름 화면에 렌더링

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  const response = await tiger.get(ENDPOINT);

  const data = response.data;

  data.forEach((user, index) => {
    const template = `
      <article class="user-card" data-index="user-${index}">
          <h3 class="user-name">${user.name}</h3>
          <div class="user-resource-info">
            <div>
              <a class="user-email" href="mailto:${user.email}">${user.email}</a>
            </div>
            <div>
              <a class="user-website" href="${user.website}" target="_blank" rel="noopener noreferer">${user.website}</a>
            </div>
          </div>
          <button class="delete">삭제</button>
        </article>
    `;

    insertLast(userCardInner, template);
  });
}

renderUserList();
