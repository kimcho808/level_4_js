// scroll1.js
// window 객체를 활용한 scroll 이벤트
// window는 변수를 만들 필요가 없음
// 스크롤 이동 시 인식하는 이벤트 종류(멈출 땐 인식 안함)
const nav = document.querySelector('nav');
const topCTA = document.querySelector('#top');
const header = document.querySelector('header');
const aside = document.querySelectorAll('aside a');
const section = document.querySelectorAll('section');
console.log(aside, section);

window.addEventListener('scroll',()=>{
    // 스크롤 위치에 따라 section이 화면 중앙보다 더 위로 올라오면
    // 각 섹션(4)의 제목 aside(4) 색상 active로 활성화하기
    for(let s of section){
        // console.log(s); // for~of가 순회하는 대상 테스트
        const sTop = s.getBoundingClientRect().top;
        // console.log(sTop); // 각 섹션 top 위치값 테스트
        // 화면 상단(0) 기준
        // 섹션의 윗(top) 부분이 화면 위에서 150px 지점보다 같거나 더 위로 올라와있다면 조건문 실행
        if(sTop <= 150){
            for(let a of aside){ // 4개 전부를 잡은 곳
                a.classList.remove('active'); // 4개전부에서 제거할거나까 if(s.id == a.dataset.target) 바깥에 적기
                if(s.id == a.dataset.target){ // a하나만 잡은 곳
                    a.classList.add('active');
                }
            }// aside-a 반복 종료 위치
        }// 조건문 종료 위치
    }// for~of section 종료 위치
})

// CTA 클릭 이벤트(스크롤 밖)
topCTA.addEventListener('click',()=>{
    // window.scrollTo(0, 120); // x y 순서대로 값 입력
    window.scrollTo({left:0, top:0, behavior:'smooth'}) // 부드러운 이동이 가능할 때
})

window.addEventListener('scroll',()=>{
    console.log('스크롤 중...');
    // nav.textContent = window.scrollY+'px'; // nav의 글자가 스크롤 길이의 값으로 바뀜
    // 디자인에 따라 스크롤 출력 값에 소수점이 나올 경우 -> 계산이 쉽도록 정수로 변환하기
    let scrollVal = Math.round(window.scrollY);
    // Math.round() 소수점 반올림 함수
    nav.textContent = scrollVal + 'px';

    // 스크롤 위치에 따라 CTA 보이기/숨기기
    if(window.scrollY >= 400){
        topCTA.classList.add('active');
    } else { topCTA.classList.remove('active'); } // 400 이하일때는 active를 빼라 

    // 스크롤 위치에 따라 header 디자인 바꾸기
    if(window.scrollY >= 120){
        header.classList.add('active');
    } else { header.classList.remove('active'); }

}) // 스크롤 이벤트 종료

// 비슷한 방법으로 윈도우 크기를 조절할 때 인식하는 이벤트가 있음
window.addEventListener('resize',()=>{
    console.log('크기 조절 중...');
}) // 크기 조절 이벤트 종료