// class_if.js
const contentLi = document.querySelectorAll('.contents li');
console.log(contentLi); // 4개의 인덱스로 각각 li 출력 테스트

// Q. 첫번째 li 디자인(테두리, 배경, 여백)
/* contentLi[0].style.borderBottom = '1px solid #000'; // 단어가 두개 있을 시 -을 쓰지 않고 뒤에 단어를 대문자로 작성
contentLi[0].style.backgroundColor = '#ff0';
contentLi[0].style.padding = '15px 5px'; */

contentLi[0].classList.add('design_set1') // 이미 앞에 class라고 써두었기 때문에 design_set1 앞에 .안 붙이는 거임

contentLi[0].addEventListener('click', ()=>{
    contentLi[0].classList.toggle('design_set1');
})

const search_open_wrap = document.querySelector('.search_open_wrap');
const search_btn = document.querySelector('#search_btn');

// 1. 초기-검색하기 숨기기
// 2. 검색 버튼 클릭 시 검색하기 보이기
// 3. 검색 버튼 또 클릭 시 검색하기 숨기기

search_open_wrap.classList.add('target_showHide');
search_btn.addEventListener('click', ()=>{
    search_open_wrap.classList.toggle('target_showHide');
})

// 하트 클릭시 색상 바뀜
const likeBtn = document.querySelector('#like_btn'); 

likeBtn.addEventListener('click', ()=>{
    likeBtn.classList.toggle('like_showHide');
}) // 아이디는 클래스보다 먼저임 (클래스보다 먼더 처리됨)

// ---------------------------------------------------------- 저간 참/거짓
console.log(Boolean(0)); // 거짓
console.log(Boolean(1)); // 참
console.log(Boolean("")); // 거짓
console.log(Boolean("가나다")); // 참
console.log(1 > 2); // 비교연산자 활용 (거짓)
console.log(3 >= 2); // 비교연산자 활용 (참)
console.log("" == "가나다"); // 비교연산자 활용 (거짓)

let a = 10;
let b = 20;

// a와 b 변수의 값을 비교해서 조건 결과 테스트
// if(조건식){조건이 참일 때 실행결과}
// 1단 조건 (if문은 각각 따로 실행됨)
if(a != b){ console.log('a와 b가 다르면 참'); } // a와 b가 다른가? (참 => 콘솔 실행됨)
if(a == b){ console.log('a와 b가 같으면 참'); } // a와 b가 같은가? (거짓 => 실행 안됨)

// 2단 조건 (if-else는 한 세트로 둘 중 하나만 실행됨)
if(a < b){
    console.log('a다 b보다 작으면 참');
}else{
    console.log('a다 b보다 작지 않으면 거짓');
}// a가 b보다 작음 (참 = > a다 b보다 작으면 참 출력)

// 인쇄 버튼 클릭 시 -> 인쇄하시겠습니까? 질문 -> 확인(예) 누르면 인쇄 실행
// 인쇄 버튼 클릭 시 -> 인쇄하시겠습니까? 질문 -> 취소(아니오) 누르면 아무것도 실행 안함
// 아니오 눌렀을 때 아무것도 실행하고 싶지 않으면 1단 눌렀을 때 취소했습니다 팝업이 뜨게 하려면 2단

const print_btn = document.querySelector('#print_btn');
print_btn.addEventListener('click',()=>{
    let printQ = confirm('인쇄하시겠습니까?'); // confirm는 질문을 하는 속성
    if(printQ == 1){ print(); } // 확인 버튼을 눌렀을 때 나오는 거임
    // 확인 버튼은 참이기 때문에 1, 취소 버튼은 거짓이기 때문에 0으로 하는거임
})