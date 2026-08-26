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
// 기존회원
const idInput = document.querySelector('#user-id'); // 아이디 입력칸
const pwInput = document.querySelector('#user-pw'); // 비밀번호 입력칸
const idBtn = document.querySelector('#member-login'); // 로그인 버튼

// 비회원
const nonIdInput = document.querySelector('#non-user-id'); // 주문자명 입력칸
const nonOrderInput = document.querySelector('#non-user-order'); // 주문번호 입력칸
const nonPw = document.querySelector('#non-user-pw'); // 비회원 주문 비번 버튼
const nonBtn = document.querySelector('#non-member-login'); // 비회원 버튼

// // 기존회원 정보 안적고 로그인 버튼을 눌렀을 때 뜨는 안내문구
// idBtn.addEventListener('click',()=>{ 
//     loginAlert(idInput, '아이디');
//     loginAlert(pwInput, '비밀번호');
// })
// // 비회원 정보 안적고 조회 버튼을 눌렀을 때 뜨는 안내문구
// nonBtn.addEventListener('click',()=>{ 
//     loginAlert(nonIdInput, '주문자명');
//     loginAlert(nonOrderInput, '주문번호');
//     loginAlert(nonPw, '비회원 주문 비밀번호');
// })

function loginAlert(dom, str) {
    if(dom.value == ''){ alert(`${str}를(을) 입력하세요`); }
}

// 기존회원) 논리 연산자 활용한 아이디 & 비밀번호 동시 검사 수행 이벤트 + 함수
idBtn.addEventListener('click', ()=>{
    // 목표1) 아이디, 비밀번호 중 하나라도 안적으면 'OOO을 입력하세요'
    // if(idInput.value == '' && pwInput.value == ''){}
    if(idInput.value == '' || pwInput.value == ''){
        // 안에 함수가 두개이기 때문에 if 사이에 else를 붙임
        // 하나의 조건세트에서 두번째 조건식이 필요할 때(두개 이상 작성 가능)
        if(idInput.value == '' && pwInput.value == ''){
            alert('아이디, 비밀번호를 입력하세요');
        } else if(idInput.value == ''){
            alert('아이디를 입력하세요');
        }else{// 조건 세트 안에 거짓을 처리할 때(마지막에 한번만 작성 가능)
            alert('비밀번호를 입력하세요');
        }
    }
    
    // 목표2) 아이디, 비밀번호를 모두 적으면 'OOO님 환영합니다'
    // if(idInput.value != '' && pwInput.value != ''){ // (!=) --> 빈문자열이 아니면 참
    //     alert(`${idInput.value}님 환영합니다`);
    //     // 내가 적은 아이디가 나오게 하려면 아이디입력칸변수.value 쓰기
    // }

    // 삼항조건 ? 참 : 거짓;
    // 조건식 1개로 처리하는 if-else를 간편하게 처리하고 싶을때
    idInput.value != '' && pwInput.value != '' ?
        alert(`${idInput.value}님 환영합니다`) : undefined; // 거짓으로 실행할게 없으면 undefined 또는 null 쓰기
})

// 비회원 이벤트 - 함수
// 목표1) 주문자명, 주문번호, 비회원용주문비번을 모두 썼을 때 'OOO님 주문은 배송중입니다'
nonBtn.addEventListener('click', ()=>{
    // 입력하지 않은게 있을 때
    if(nonIdInput.value == '' || nonOrderInput.value == '' || nonPw.value == ''){
        //모두 입력하지 않았을 때
        if(nonIdInput.value == '' && nonOrderInput.value == '' && nonPw.value == ''){
            alert('주문자명, 주문번호, 주문비밀번호를 입력하세요');
        } else if(nonIdInput.value == ''){
            alert('주문자명을 입력하세요');
        } else if(nonOrderInput.value == ''){
            alert('주문번호를 입력하세요');
        } else {
            alert('비회원주문비밀번호를 입력하세요');
        }
    }
    // 모두 입력했을 때
    // if(nonIdInput.value != '' && nonOrderInput.value != '' && nonPw.value != ''){
    //     alert(`${nonIdInput.value}님 주문은 배송중입니다`);
    // }
    // 삼항 조건문
    nonIdInput.value != '' && nonOrderInput.value != '' && nonPw.value != '' ?
        alert(`${nonIdInput.value}님 주문은 배송중입니다`) : undefined;
})

// 비밀번호 보이기 버튼 아이콘을 눌렀을 때 적은 비밀번호가 보이게 하기
const pwVisibleBtn = document.querySelector('#non-member-pw'); // 아이콘 버튼 변수
console.log(pwVisibleBtn);

// 기존회원) 눈 아이콘 클릭 시 비밀번호 보이기 / 다시누르면 숨기기
let pwVisibleStatus = 0; // 비번 숨김 (●●●●) 초기값

pwVisibleBtn.addEventListener('click',()=>{
    pwVisibleStatus == 0 ? // 비밀번호가 숨겨져 있나?
        pwInput.type = 'text' // 참이면 text로 바꾸기
        : pwInput.type = 'password'; // 아니면 다시 돌아가기
    pwVisibleStatus = !pwVisibleStatus; // 누르면 보이고 안보이고 하기
})

// 비회원) 비회원주문비밀번호
const nonPwVisibleBtn = document.querySelector('#non-member-pw-visible');
console.log(nonPwVisibleBtn);

let nonPwVisibleStatus = 0;

nonPwVisibleBtn.addEventListener('click',()=>{
    nonPwVisibleStatus == 0 ? nonPw.type = 'text' : nonPw.type = 'password';
    nonPwVisibleStatus = !nonPwVisibleStatus;
})