// dom2.js
const m_menu = document.querySelector('.m_menu nav');
const d_menu = document.querySelector('.d_menu');

console.log(m_menu, d_menu);
const cloneMenu = m_menu.cloneNode(true); // ()안에 true라고 적어야 자식까지 복사됨
console.log(`복제대상확인 : ${cloneMenu}`);
console.log(cloneMenu);

d_menu.appendChild(cloneMenu); // 나중에 복사한 부분을 html에서 바꾸면 다 같이 바뀜