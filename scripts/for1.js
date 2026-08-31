// for1.js
// for(초기값; 조건식; 증감식) {조건식이 참일 때 실행하는 명령}
// for의 초기값은 처음에 단 한번만 인식하고 다신 인식안함.
// 조건식이 참이면 -> 명령을 수행하고 -> 증감식 처리 -> 조건식 반복
// 조건식이 거짓이면 -> 명령 수행하지 않고 for문 강제종료

// 콘솔 1~10 숫자 출력
// for(let i=1; i<=10; i++){} // 증감식 옆엔 세미콜론(;) 쓰지 않기
for(let i=1; i<11; i++){
    // 위 조건식이 참일 동안 반복수행하는 명령
    console.log(`반복 수 ${i}`);
}

console.log('------------------------------');
// 콘솔 5~0 숫자 출력
for(let i=5; i>=0; i--){ // 5, 4, 3, 2, 1, 0
    console.log(`반복 수 ${i}`);
}

console.log('------------------------------');
// 탄생화 1월 장미, 2월 수선화 .... 12월 민들레
const flowers = ['히아신스', '물망초', '데이지', '아네모네', '은방울꽃', '장미', '수련', '해바라기', '물망초', '국화', '초롱꽃', '백일홍'];
for(let i=1; i<13; i++){
    console.log(`${i}월의 탄생화는 ${flowers[i-1]}입니다.`); // 배열안에 그냥 i라 적으면 1부터 시작해서 하나씩 밀림
}

console.log('------------------------------');
// 탄생석 12월부터 1월까지 거꾸로
const birthstone = ['가넷', '자수정', '아쿠아마린', '다이아몬드', '에메랄드', '진주', '루비', '페리도트', '사파이어', '오팔', '토파즈', '터키석'];
for(let i=12; i>=1; i--){
    console.log(`${i}월의 탄생석은 ${birthstone[i-1]}입니다.`);
}

console.log('------------------------------');
// 2단 구구단 예) 2x1=2 .... 2x9=18
for(let i=1; i<10; i++){
    console.log(`2x${i}=${2*i}`);
}

console.log('------------------------------');
// 홀수 날만 쉬는 가게 알림
// 반복문 + 조건문
for(let i=1; i<32; i++){
    // console.log(i+'일');
    // if~else 두개 이상의 조건식이 필요할 때
    // 조건 ? 참 : 거짓 1개의 조건식으로 참거짓만 구분할때
    let result = (i%2 === 1) ? '휴가' : '영업중';
    console.log(`${i}일 (${result})`);
}

console.log('------------------------------');
// body 화면에 반복태그 출력하기
// md_pick li 10개 복제
const md_pick_ul = document.querySelector('.md_pick'); // 복붙하는 부모 위치
const md_pick_li = md_pick_ul.querySelector('li'); // 복사하는 자식 대상
const copy_md_pick_li = md_pick_li.cloneNode(true); // 자식, 자손까지 복제

console.log(md_pick_ul, md_pick_li, copy_md_pick_li);

// md_pick_ul.appendChild(copy_md_pick_li);
// 상품을 10개 복제-붙여넣기(반복문)
for(let i=1; i<10; i++){
	md_pick_ul.appendChild(md_pick_li.cloneNode(true));
}