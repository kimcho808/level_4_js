// class_if2.js
// css 속성을 1~2개 일회성으로 사용시
// 객체.style.속성 = '값';
// 객체.style.속성 = '값';
// css 2개 이상의 속성을 반복성으로 사용시
// css 파일에서 별도의 클래스 준비 -> 불러오기
// 객체.classList.함수('적용할클래스명')
// 함수종류 : add, remove, toggle, replace

const pTag = document.querySelector('p');
const btn1 = document.querySelector('#btn1');
const userIdInput = document.querySelector('#user_id');

console.log(pTag, btn1, userIdInput);

btn1.addEventListener('click',()=>{
    // 아이디를 입력한하고 클릭시 -> 아이디 입력 오류 출력
    // 아이디 입력하고 버튼 클릭시 -> 결과 없음
    // 조건식) 아이디(입력값)를 입력했는가? 참/거짓
    console.log(userIdInput.value); // 값 테스트
    console.log(Boolean(userIdInput.value)); // 논리 테스트
    // (위)input에 아무것도 안적고 버튼 누르면 거짓 입력하고 버튼 누르면 참이라고 뜸
    if(userIdInput.value == ''){// 조건이 참일 때 실행되는 결과 (()안에 있는 조건)
        pTag.classList.add('error');
        pTag.innerHTML = '<em>아이디</em>를 입력하세요.';
    }else{// 앞조건이 거짓일 때 실행결과
        pTag.classList.remove('error');
        pTag.innerHTML = '<em>로그인</em> 성공하셨습니다.';
    }
    // if(userIdInput.value != '')
    // if(userIdInput.value != ''){ // != 빈문자가 아니면
    //     pTag.classList.remove('error'); // 로그인이 성공했으니 error를 지워야함
    //     pTag.innerHTML = '<em>로그인</em> 성공하셨습니다.';
    // }// 위의 if와 별개로 동작하는 거임
    // pTag.classList.add('error'); // 디자인 적용
    // pTag.textContent = '로그인이 실패했습니다.';
    // pTag.innerHTML = '<em>로그인</em>이 실패했습니다.';
})