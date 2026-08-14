// dom.js

// 복습) 함수, 매개변수, 리턴
// 더하기, 빼기 계산기
function calcFunc(n1, n2, oper='+') {
    let num1 = n1;
    let num2 = n2;
    return oper == '+' ? num1+num2 : num1-num2; // == 이거는 앞과 뒤가 일치하는가?
    // 조건 ? 참 : 거짓;
    let total = num1 + num2;
    return total; // return이 붙어있기 때문에 리턴뒤에 있는 것을 나중에 밖에서 불러올 수 있음
}
// calcFun();
// 이렇게만 쓰면 숫자가 나타나지 않음 (어떻게 나타낼지 정하지 않았기 때문에)
console.log(calcFunc(3, 5, '-')); // 거짓이 나와서 정답은 -2로 나옴
console.log(calcFunc(3, 5, '+')); // 참이 나와서 정답은 8로 나옴

// 할인율 계산기
// 계산법) (100 - 5) / 100 = 0.95
// 판매가 * 0.95 = 5% 할인가
// 판매가 * 0.9 = 10% 할인가
// 판매가 * 0.8 = 20% 할인가
// 판매가 * 0.7 = 30% 할인가
// 판매가 * 0.6 = 40% 할인가
// 판매가 * 0.5 = 50% 할인가
function discountFunc(price) {
    const discount5 = (price * 0.95).toLocaleString('ko-kr');
    const discount10 = (price * 0.9).toLocaleString('ko-kr');
    const discount20 = (price * 0.8).toLocaleString('ko-kr');
    const discount30 = (price * 0.7).toLocaleString('ko-kr');
    const discount40 = (price * 0.6).toLocaleString('ko-kr');
    const discount50 = (price * 0.5).toLocaleString('ko-kr');
    return `사용자 입력 가격 : ${price.toLocaleString('ko-kr')}원 기준
        5% 할인가 : ${discount5}원,
        10% 할인가 : ${discount10}원,
        20% 할인가 : ${discount20}원,
        30% 할인가 : ${discount30}원,
        40% 할인가 : ${discount40}원,
        50% 할인가 : ${discount50}원,
        `
}
console.log(discountFunc(123000));

// 1. 익명 함수
const btn1 = document.querySelector('#btn1');
// 버튼 킬릭 시 버튼 색상 변경 (일회성)
/* btn1.addEventListener('click',function(){
    btn1.style.color = 'red';
})// 이벤트 함수 내에 이름 없이 만드는 일회성 함수(익명 함수) */
btn1.addEventListener('click',()=>{ // 화살표 함수
    btn1.style.color = 'red';
})

// 일반 반복 함수(생성된 위치 위/이래 어디든 호출 가능)
func1(); // ok
function func1() {
    return console.log('일반함수 테스트');
}
func1(); // ok

// 이벤트 밖에서 사용하는 익명함수의 또 다른 예
// 변수 안에서 익명함수 생성
// 무조건 밑에서부터 사용가능함
// func2(); // 오류 뜸
const func2 = function(){
    return console.log('익명함수 테스트');
}
func2(); // ok

const func3 = ()=>{
    return console.log('익명함수 테스트 - 화살표');
}
func3(); // ok

// 2. 콜백 함수(함수 안 또 다른 함수 호출)
function orderCoffee(callback) {
    return  console.log('SNS 이벤트 무료커피 나왔습니다');
}
function sns() {
    return console.log('SNS 후기 업로드 완료');
} // sns는 orderCoffee의 조건으로 들어가야함

orderCoffee(sns);

// 3. data-* 속성
const cart_buy_div = document.querySelector('.cart_buy')
// HTMl data-* 속성은 자바스크립트에서 dataset.* 읽을 수 있음.
let dataResult = cart_buy_div.dataset.name;
console.log(`dataResult 값은 ${dataResult}`);

// 수량 증감 data-* 속성 활용
const countNumSPan = document.querySelector('.count_num');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
console.log(countNumSPan.dataset.count); // 1이 나옴

// 위 span 변수에 초기값 1 대입
countNumSPan.textContent = countNumSPan.dataset.count; // 콘솔이 아닌 화면에 완전히 숫자가 뜸
// + 클릭하면 span값이 1씩 증가(익명함수 활용)
plusBtn.addEventListener('click',()=>{
    //console.log(typeof(countNumSPan.dataset.count)); // 문자인지 숫자인지 확인 (문자로 나옴)
    let currentNum = Number(countNumSPan.dataset.count); // 문자를 숫자로 변환해서 저장
    console.log(currentNum, typeof(currentNum)); // 숫자로 변경된 점 확인
    currentNum < 20 ? (()=>{
        let plusTotal = ++currentNum; // 숫자로 변환한 변수를 1증가해서 담은 증가변수
        countNumSPan.dataset.count = plusTotal; // 증가된 변수를 실제 data속성에 업데이트
        countNumSPan.textContent = plusTotal;// 증가된 변수를 사용자가 보는 화면에 출력
    })() : alert('최대 주문 수량입니다.');
})

minusBtn.addEventListener('click',()=>{
    let currentNum = Number(countNumSPan.dataset.count); // data-count 숫자로 변환
    // 삼항 조건 연산자 활용(수량이 1 이상일때만 감소)
    currentNum > 1 ? (()=>{
        let minusTotal = --currentNum; // data에 -1연산자를 minusTotal에 대입
        countNumSPan.dataset.count = minusTotal; // minusTotal에 나온 숫자를 data 속성에 대입
        countNumSPan.textContent = countNumSPan.dataset.count;
        // countNumSPan.textContent = minusTotal; // 화면 출력
    })() : alert('최소 주문 수량입니다.');
})

// 변수 목적 정리
// countNumSPan : 수량 표시되는 span태그
// plusBtn : +버튼 변수
// currentNum : countNumSPan의 data속성을 숫자로 변환한 변수
// countNumSPan.dataset.count : data-count
// plusTotal : currentNum에 +1을 해서 저장한 저장소
