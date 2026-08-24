// login.js
// 목표) 각 탭 제목 클릭 시 해당되는 내용 표시하고 나머지 숨기기
// 1. 비회원(비활성화) 내용 초반 숨기기
// 2. 각 탭 제목 클릭 시
// 3. 기존회원 클릭 -> 기존회원 내용 보이기 / 비회원 내용 숨기기
// 4. 비회원 클릭 -> 기존회원 내용 숨기기 / 비회원 내용 보이기
const loginTabTitle = document.querySelectorAll('#login-frm .title button'); //기존회원, 비회원 버튼
const loginTabContent = document.querySelectorAll('#login-frm .contents > ul'); // 아래 내용

console.log(loginTabTitle, loginTabContent);

loginTabContent[1].classList.add('display-hide');
// 기존회원만 보이고 비회원 주문은 안보이게 초기 숨기기

// 비회원 주문조회 클릭 시(초기 모습과 반대되는 상황 먼저 테스트)
loginTabTitle[1].addEventListener('click',()=>{ loginTabFunc(1); })
loginTabTitle[0].addEventListener('click',()=>{ loginTabFunc(0); })

// 반복 함수 별도 생성(함수 안에 달라지는건 매개변수로 미리 지정)
function loginTabFunc(index){
    // 0(숨기고) 1(보이기) == X
    // 0,1 (모두 숨기기), 1(보이기) == O
    loginTabTitle[0].classList.remove('active'); // 제목 클릭 디자인 지우기
    loginTabTitle[1].classList.remove('active'); // 제목 클릭 디자인 지우기
    loginTabTitle[index].classList.add('active'); // 클릭한 제목만 디자인 보이기

    loginTabContent[0].classList.add('display-hide'); // 모두 숨기기
    loginTabContent[1].classList.add('display-hide'); // 모두 숨기기
    return loginTabContent[index].classList.remove('display-hide'); // 클릭 대상과 일치하는 대상만 보이기
    // return;
}

// 목표2) 기존회원 - 아이디를 입력 안하고 기존회원 로그인 버튼 클릭 시 '아이를 입력하세요' 경고창 출력
const idInput = document.querySelector('#user-id'); // 아이디 입력칸
const pwInput = document.querySelector('#user-pw'); // 비밀번호 입력칸
const idBtn = document.querySelector('#member-login'); // 로그인 버튼

const nonIdInput = document.querySelector('#non-user-id'); // 주문자명 입력칸
const nonOrderInput = document.querySelector('#non-user-order'); // 주문번호 입력칸
const nonPw = document.querySelector('#non-user-pw'); // 비회원 주문 비번 버튼
const nonBtn = document.querySelector('#non-member-login'); // 비회원 버튼

// 기존회원 정보 안적고 로그인 버튼을 눌렀을 때 뜨는 안내문구
idBtn.addEventListener('click',()=>{ 
    loginAlert(idInput, '아이디');
    loginAlert(pwInput, '비밀번호');
})
// 비회원 정보 안적고 조회 버튼을 눌렀을 때 뜨는 안내문구
nonBtn.addEventListener('click',()=>{ 
    loginAlert(nonIdInput, '주문자명');
    loginAlert(nonOrderInput, '주문번호');
    loginAlert(nonPw, '비회원 주문 비밀번호');
})

function loginAlert(dom, str) {
    if(dom.value == ''){ alert(`${str}를(을) 입력하세요`); }
}