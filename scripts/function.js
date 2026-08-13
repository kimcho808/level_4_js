// function.js

// 1. 내장함수
// alert('이 사이는 포트폴리오용 사이트입니다.');
// const q1 = prompt('1+1?');
// alert('사용자가 입력한 답은'+q1+'입니다'); // 사용자가 입력한 답은 ? 입니다
// print();
const printBtn = document.querySelector('#print_btn');
// v1. 사용자 정의함수를 이벤트 함수 내에서 호출한 방식 (2개 이상 반복일 경우)
// printBtn.addEventListener('click',printFunc);

// v2. 이벤트addEventListener() 함수 내에서 직접 사용자 함수를 만드는 방식 (반복 안될 때)
// 이벤트의 객체가 정해진 상태로 하기 때문에 내부 내장함수엔 함수명을 따로 작성 안함.
// print.addEventListener('click', function(){print();})

// v3. 내장함수에 함수명이 안들어가는데 function 키워드를 써야하는지 의문으로 생긴 새로운 함수
// 화살표 함수 () => {} (2번 이상 반복되지 않을 때)
printBtn.addEventListener('click',()=>{print();});


printBtn.addEventListener('click',printFunc);


const num1 = Math.random(); //0과 1사이에 숫자를 랜덤으로 생성
const num2 = Math.floor(Math.random() * 10) + 1;
console.log(num1);
console.log(num2);

// 변수 생성 = 함수1(함수2());
// 함수2부터 처리 -> 함수1 처리 -> 변수 대입
// const num3 = Number(prompt('NCS 시험점수는? 0~100점 사이로 숫자만 입력해주세요.'));
// console.log(num3);
// console.log(typeof(num3)); // 데이터 타입 확인 함수

// 2. 사용자정의함수
function printFunc(){print();}

// 3. 함수 스코프, 변수 범위
let b = 20; // 전역 변수
let c = 30;

function test() {
    let a = 10; // 함수 내부에서 선언된 지역 변수
    return console.log(a+b); // 에러 안남 전역 변수는 어디서든 볼 수 있음 집 안으로 부르는거 가능
}
test(); // 함수에 적은것을 콘솔에서 보려면 호출하기

// console.log(a); 에러남
console.log(b+c); // ok

// 4. 함수의 매개변수
// 반복되는 함수 내에 달라지는 매개값이 있을 때 사용
// 동화 : 헨젤과 그레텔이 집을 찾아오는 반복 방법
function story1(boy='헨젤', girl='그레텔', mapDate) {// 내가 입력을 안하면 기본 값 입력하면 입력한데로
    let person = [boy, girl];
    let result = person[0] + '과(와)' + person[1] + '이' +mapDate+ '을(를) 따라 집을 찾아갔습니다' ;
    // 헨젤과 그레텔이 조약돌을 따라 집을 찾아갔습니다
    return console.log(result);
}
story1('봄','여름','강아지'); //순서대로 들어감 
story1(undefined,undefined,'강아지'); // 헨젤과 그레텔을 그대로 쓰고 싶을 때는
// 위 방법처럼 하면 주인공 이름을 바꿔서 이용할 수 있음

// 동화 2. story2 함수 생성, 매개변수 달라지는 데이터 기분으로 추가 생성 이름은 자유
// 나무꾼은 금도끼를 잃어버렸습니다
// 나무꾼은 쇠도끼를 잃어버렸습니다
function stroy2(name ='나무꾼', dokki='금') {
    let person= name ;
    let result = name + '은(는)' + dokki + '도끼를 잃어버렸습니다' ;
    return console.log(result);
}
stroy2(); // 매개변수 아무것도 안적었을 때 모두 기본 값
stroy2(undefined, '은'); // 앞의 배개변수 정의 안되서 기본값, 뒤 문자만 매개변수 대입
stroy2('주인공'); // 앞 매개 변수 문자 대입, 뒤 매개 변수 안적어서 기본값 처리

// 카페 키오스크
// 아이스 아메리카노 한잔 주문 완료
// founction 간편버전 => 이벤트 내에서 주로 사용
// '' + 변수 + '' 간편버전 `문자${변수}` 백틱 기호 사용하면 연결 연산자 없이 사용가능 (템플릿 문자열)
function cafeKiosk(menu, number='1') {
    const order = `${menu} ${number}잔 주문완료`;
    return console.log(order);
}
cafeKiosk('말차 라떼');
cafeKiosk('말차 라떼', '2');

//ICE, HOT, 메뉴, 메뉴개수 까지 선택 가능하게 하기
// ICE 카페라떼 1잔 주문완료
function cafeKiosk2(tem, me, number=1) {
    const temperature = ['ICE', 'HOT'];
    const menu = ['아메리카노', '카페라떼', '녹차라떼', '초코라떼'];
    const order = `${temperature[tem]} ${menu[me]} ${number}잔 주문완료`;
    return console.log(order);
}
cafeKiosk2(0,0,1);
cafeKiosk2(1,2,4);

// 5. 함수 리턴
// 함수 내부 실행 데이터를 사용자가 원하는 방식으로 출력되게 만드는 키워드
function japangi(drink, num = 1) {
    const order = `${drink} ${num}개 주문 완료`
    return order; // order변수에 저강된 값만 함수 외부로 반환 (종료)
    return; // 리턴 뒤에 아무것도 안적으면 함수만 강제 종료
    return console.log('잔액이 부족합니다');// 리턴 뒤 콘솔 실행하고 함수 종료
    //console.log('잔액이 부족합니다'); 실행하고 끝냄
    console.log(order); // 리턴 아래에 있는 명령은 절대 실행안됨
}
japangi('제로 콜라'); // 함수 내부 리컨에서 출력함수가 정해졌을 때 데이터만 전달방식
console.log(japangi('사이다'));
// 함수 내부 리턴에서 출력함수가 정해지지 않고 데이터만 반환했을 때 함수 밖에서 출력함수를 정하는 방식
printBtn.textContent = japangi('밀키스');