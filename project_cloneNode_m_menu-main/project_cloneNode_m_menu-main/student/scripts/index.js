// student index.js
// 1. 데스크탑 네비 복제 -> 모바일 위치에 붙여넣기
// 변수 생성 -> 복제 대상 정하고 복제 -> 붙여넣기 대상 정하고 붙여넣기
// 변수
const d_menu = document.querySelector('.full_nav .menu');
const m_menu = document.querySelector('#m_nav');

console.log(d_menu, m_menu);

const cloneNav = d_menu.cloneNode(true);
console.log(d_menu);

m_menu.appendChild(cloneNav);

//2. 모바일 메뉴 클릭 시 모바일 배경+보다일 메뉴 출력하기
const menuBtn = document.querySelector('#m_nav_btn'); // 클릭 대상
const menuBg = document.querySelector('.m_nav_bg'); // 나오는 대상

// 안보인다 0 컴퓨터가 이해하는 언어로 초기값 설정
let menu_visible = 0; // 안보이는 초기값(상태변수) 설정

menuBtn.addEventListener('click',()=>{
    // 기존 css에서 어떤 속성으로 숨겨져 있었는지에 따라 반대되는 값 작성
    // 기존 display:none -> 변경 displat: block or flex
    // 기존 opacity:0 -> 변경 opacity:1
    // 현재 css에는 .m_nav_bg가 right:-100%; opacity:0;으로 되어있음
    // menuBg.style.right = '0%';
    // menuBg.style.opacity = '1';
    // 클릭 이벤트의 동작이 1개다 == (위 명령어로 끝)
    // 클릭 이벤트의 동작이 2개 이상이다 == (조건에 따른 함수 실행으로 코드 업글)
    // 보인다? 안보인다?라는 뜻은 조건으로 불가능 -> 컴퓨터가 이해하는 언어 0, 1로 사용
    menu_visible = !menu_visible; // 버튼을 누르면 참, 거짓이라고 번갈아가며 나옴 (상태변수값 반전)
    console.log(menu_visible) // 반전되는 값 확인
    // 메뉴의 보이는 상태(menu_visible)가 0(안보이는)값이면 어떻게 할 것인가?
    // 안보인다(참) -> right:0, opacity:1
    // 보인다(거짓) -> right:-100%, opacity:0
    menu_visible == 0 ? (()=>{
        // 안보인다(참) -> right:0, opacity:1
        menuBg.style.right = '0%';
        menuBg.style.opacity = '1';
    })() : (()=>{
        // 보인다(거짓) -> right:-100%, opacity:0
        menuBg.style.right = '-100%';
        menuBg.style.opacity = '0';
    })()
})
