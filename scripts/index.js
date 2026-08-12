// index.js
// 1. 변수
let itemPrice = 24600; // 가격안에 ,를 안붙이는 이유는 ,가 문자여서 숫자 사이에 쓰면 오류가 생기기 때문
const titleBig = document.querySelector('h1');
const result1P = document.querySelector('.result1');
let replaceDate = itemPrice.toLocaleString('ko-kr');// 변경하는 대상 변수 이름을 쓴거임 // 데이터 종류 변경 변수
// ------------------------------------------------------ 연습(웹은행 150만원 입금)
let deposit = 1500000;
const result2P = document.querySelector(".result2");
const result2Date = deposit.toLocaleString('ko-kr');

// 출력 테스트 콘솔
console.log(itemPrice, titleBig, result1P, replaceDate);
console.log(result2P, result2Date);

// 실행 결과
result1P.textContent = replaceDate+'원';
result2P.textContent = result2Date+'원';

// ------------------------------------------------------
// 2. 배열
const money = [24600, 32000, 19900]; // 갯수 재한 없이
const list1Li = document.querySelectorAll('.list1 > li')
// li 3개를 모두 잡으려면 querySelectorAll 모두 잡을 수 있는 속성 사용

console.log(list1Li);
console.log(money[0].toLocaleString('ko-kr'));
console.log(money[1].toLocaleString('ko-kr'));
console.log(money[2].toLocaleString('ko-kr'));

list1Li[0].textContent = money[0]+'원';
list1Li[1].textContent = money[1]+'원';
list1Li[2].textContent = money[2]+'원';

list1Li[3].children[0].textContent = itemName[0];
list1Li[3].children[1].textContent = itempriceOrigimal[0];

// ------------------------------------------------------- 연습
const itemtitle = document.querySelectorAll('.study dt');
const priceItme = document.querySelectorAll('.study dd');

console.log(itemtitle, priceItme);

itemtitle[0].textContent = itemName[2];
priceItme[0].textContent = itempriceOrigimal[2];
itemtitle[1].textContent = itemName[1];
priceItme[1].textContent = itempriceOrigimal[1];

// ------------------------------------------------------- 배열 정리
let plat = ['계란', '스테이크', '샐러드', '김치', '단무지', '쌀밥', '콩나물국'];

plat[1] = '연어'

console.log(plat);

// 출력
console.log(plat[0]);
console.log(plat[6]);
console.log(plat[3]);
console.log(plat[1]);

// ---------------------------------------------------------
// 3. 객체
const movie = { //객체변수 == 줄여서 객체
    name: '스파이더맨', // 속성:값, 속성:값
    price: '12000',
}
console.log(movie.name); //객체.속성
console.log(movie.price);

// -------------------------------------------------------- 객체 + cgv DB연결
const cgv = document.querySelector('.cgv'); //document는 body태그를 잡은거임
const cgvPoster = cgv.querySelector('img');
const cgvTitle = cgv.querySelector('h2');
const cgvAge = cgv.querySelector('.age');
const cgvRate = cgv.querySelector('.rate');
const cgvGenre = cgv.querySelector('.genre');

console.log(cgv, cgvPoster, cgvTitle, cgvAge, cgvRate, cgvGenre);

// 오디세이
cgvPoster.src = movieDb[0].poster;
cgvTitle.textContent = movieDb[0].name;
cgvAge.textContent = movieDb[0].age+'세 이용가';
cgvRate.textContent = movieDb[0].reservation_rate;
cgvGenre.textContent = movieDb[0].genre;

// ----------------------------------------------------------- 객체변수 연습
const dessertTray = {
    top:['파랑 마카롱', '분홍 마카롱', '초록 마카롱', '노란 마카롱'],
    middle:['슈크림', '머핀', '에그타르트'],
    bottom:['방울토마토', '청포도', '오렌지'],
}

console.log(dessertTray);


console.log(dessertTray.top[3]);
console.log(dessertTray.middle[0]);
console.log(dessertTray.bottom[1]);

dessertTray.bottom[2] = '망고';
console.log(dessertTray.bottom[2]);
// ------------------------------------------------------------ 증감연산자
let num = 1;
console.log(num); //1(변수가 처음 대입된 값 테스트)

num++; // 증가
console.log(num); //2(위 연산 후 실행 테스트)

num--; // 감소
console.log(num); //1
// ------------------------------------------------------------ 증감연산자, 2개 변수 활용
let number1 = 10;
let number2;

console.log(number1, number2);// 초기값 테스트

number2 = ++number1;
console.log(number1, number2);// 둘 다 11로 나옴

number2 = number1++;
console.log(number1, number2);// 12 11로 나옴
// 증감연산자를 뒤에 붙이면
// 기존 변수 값(number1)을 대입(=)을 만나 number2로 먼저 보내고 
// ++로 number1을 나중에 증가 시킨다(후처리)