// //웹디자인개발기능사
// //자바스크립트 ver
// const popup = document.querySelector('#popup');
// const nav = document.querySelectorAll('nav > ul > li');
// const sub = document.querySelectorAll('nav > ul > li > ul');
// const subLi = document.querySelectorAll('nav > ul > li > ul li');

// popup.style.display = 'none';

// for(let s of sub){//서브 모두 숨기기(초기값)
//     s.style.height = '0';
//     s.style.overflow = 'hidden';
//     s.style.transition = 'height 0.4s';
// }

// for(let sl of subLi){//서브 li 하이라이트 효과
//     sl.addEventListener('mouseover',()=>{sl.style.backgroundColor = 'pink';})
//     sl.addEventListener('mouseout',()=>{sl.style.background = 'none';})
// }

// for(let n of nav){//메인 메뉴
//     n.addEventListener('mouseover',()=>{
//         n.style.backgroundColor = 'yellow';
//         n.children[1].style.height = '160px'
//     })
//     n.addEventListener('mouseout',()=>{
//         n.style.background = 'none';
//         n.children[1].style.height = '0';
//     })
// }

// //공지사항 첫 글 클릭 시 팝업 출력, 팝업 닫기 클릭 시 팝업 숨기기
// const popupClick = document.querySelector('.notice li:nth-child(1)');
// const close = popup.querySelector('.close');

// popupClick.addEventListener('click',()=>{
//     popup.style.display = 'block';
//     popup.style.zIndex = '999';
// })
// close.addEventListener('click',()=>{
//     popup.style.display = 'none';
// })

// //공지사항, 갤러리 탭 제목 클릭 시 나오는 탭 내용
// const tapTitle = document.querySelectorAll('.notice_gallery .title a');
// const tapContents = document.querySelectorAll('.notice_gallery .contents > *');

// tapTitle.forEach((t,i)=>{//t는 오브젝트 i는 인덱스임
//     t.addEventListener('click',()=>{//제목 active 내가 선택한것만 굵기 넣기
//         for(let reset of tapTitle){reset.classList.remove('active');}
//         t.classList.add('active');
//         for(let reset of tapContents){reset.style.display = 'none';}//선택한 내용 보기
//         tapContents[i].style.display = 'flex';
//     })
// })

// //히어로배너 상<->하 슬라이드 구조(swiper X)
// const heroWrap = document.querySelector('.hero_wrapper');
// const heroSlide = document.querySelectorAll('.hero_slide');//모든 슬라이드 개수세기용
// // heroWrap.style.transform = 'translateY(-600px)'; //test

// let count = 0; //초기값 0으로 시작해서 heroSlide의 개수만큼 증가

// heroWrap.style.transition = 'transform 0.6s'; //움직이는 애니메이션 효과주기 (바깥쪽에 미리 걸어두기)

// const slideTimer = setInterval(()=>{
//     count++; //3초마다 1증가
//     //if(count > 2){count = 0}
//     if(count > heroSlide.length -1){count = 0} //존재하는 슬라이드가 다 지나가면 다시 되돌아 갈 수 있도록 조건문 활용
//     //위 length는 1부터 인식해서 춫자가 하나 더 나옴 그래서 -1한거임
//     //console.log(count*300); //세로로 움직이기 위해 세로값 넣음 가로든 세로든 움직이고 싶으면 보이는 값 넣기
//     heroWrap.style.transform = `translateY(-${count*300}px)`;
// },3000)



// =========================================================================== 제이쿼리 ver
console.log(typeof $); //funcion 제이쿼리 로드 확인(필수X)

//자바스크립트에선 HTML 작업 시 변수 저장 작업 필수!
//제이쿼리는 변수 구조가 워낙 짧아 2번 이상 자주 반복하는 변수만 지정하고 그 외는 일회성으로 사용가능

// const popup = document.querySelector('#popup');
// popup.style.display = 'none';
$('#popup').hide();

// for(let s of sub){//서브 모두 숨기기(초기값)
//     s.style.height = '0';
//     s.style.overflow = 'hidden';
//     s.style.transition = 'height 0.4s';
// }
const sub = $('nav > ul > li > ul');
//sub.hide(); //제이쿼리는 대상이 2개 이상이어도 for 없이 한번에 다수 처리가 가능하다.

//자바스크립트에서의 css 사용법 : 객체.style.속성 = '값';
//제이쿼리 css 사용법 : 객체.css('속성','값');
//css() 한수 2개 이상 연결 = 체이닝 기법
// sub.css('height','0')
//     .css('overflow','hidden')
//     .css('transition','height 0.4s');

// for(let n of nav){//메인 메뉴
//     n.addEventListener('mouseover',()=>{
//         n.style.backgroundColor = 'yellow';
//         n.children[1].style.height = '160px'
//     })
//     n.addEventListener('mouseout',()=>{
//         n.style.background = 'none';
//         n.children[1].style.height = '0';
//     })
// }
const $nav = $('nav > ul > li');

sub.slideUp();

//$을 붙인 이유는 제이쿼리와 자바스크립트 변수를 구분하기 위해 넣은거임
//제이쿼리 사용시 화살표 함수 사용 권장 안함. 일반함수 위주로 사용 (호환 안맞음)
$nav.on('mouseover',function(){
    //$(this) 현재 마우스 오버 한 대상
    $(this).css('background-color','aqua');
    $(this).children('ul').stop().slideDown();
    //.stop()은 들어간 애니메이션이 중첩되지 않도록 하는 것임 거의 필수
})
$nav.on('mouseout',function(){
    //$(this) 현재 마우스 오버 한 대상
    $(this).css('background','none');
    $(this).children('ul').stop().slideUp();
})

// //공지사항 첫 글 클릭 시 팝업 출력, 팝업 닫기 클릭 시 팝업 숨기기
// const popupClick = document.querySelector('.notice li:nth-child(1)');
// const close = popup.querySelector('.close');

// popupClick.addEventListener('click',()=>{
//     popup.style.display = 'block';
//     popup.style.zIndex = '999';
// })
// close.addEventListener('click',()=>{
//     popup.style.display = 'none';
// })

const $popupclick = $('.notice li:nth-child(1)');

$popupclick.on('click',function(){
    $('#popup').show();
})

$('.close').on('click',function(){
    $('#popup').hide();
})

//탭 제목 활성화
// //공지사항, 갤러리 탭 제목 클릭 시 나오는 탭 내용
// const tapTitle = document.querySelectorAll('.notice_gallery .title a');
// const tapContents = document.querySelectorAll('.notice_gallery .contents > *');

// tapTitle.forEach((t,i)=>{//t는 오브젝트 i는 인덱스임
//     t.addEventListener('click',()=>{//제목 active 내가 선택한것만 굵기 넣기
//         for(let reset of tapTitle){reset.classList.remove('active');}
//         t.classList.add('active');
//         for(let reset of tapContents){reset.style.display = 'none';}//선택한 내용 보기
//         tapContents[i].style.display = 'flex';
//     })
// })
$('.notice_gallery .title a').on('click',function(){
    $('.notice_gallery .title a').removeClass('active');
    $(this).addClass('active');

    let $i = $(this).index(); //현재 클릭한 대상 인덱스 변수 저장

    $('.notice_gallery .contents > *').hide(); //모든 내용 숨기기
    //$('.notice_gallery .contents > *').eq($i).show();
    $('.notice_gallery .contents > *').eq($i).css('display','flex');
    //eq => 몇번째 인덱스에 해당하는 요소인지 세는 제이쿼리 함수
})

//제이쿼리v 슬라이드
let count = 0; //초기값 0으로 시작해서 heroSlide의 개수만큼 증가


const slideTimer = setInterval(function(){
    count++;
    if(count > 2){count = 0}
    //3가지 방법 다 할 수 있는 것이니 손가는대로
    $('.hero_wrapper').css('transform',`translateY(-${count*300}px)`);
    //$('.hero_wrapper').css('transform', 'translateY(-'+(count*300)+'px');
    //기존 js css에서 주로 다루는 trasition + transform 애니메이션 묶음 전용 제이쿼리 함수
    // $('.hero_wrapper').animate({
    //     top:-(count*300)+'px',
    // },400);
},3000)