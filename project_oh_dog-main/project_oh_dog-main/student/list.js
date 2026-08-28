// 오늘의 집 클론코딩 프로젝트 - 쇼핑몰 상품 주문영역 + 상세페이지
//------------------------------------------------------------
//small1 == big1
//small2 == big2
//1.---------------------------변수
const smallImg = document.querySelectorAll('.small_thum img')
const bigImg = document.querySelector('.big_thum img')


console.log(smallImg,bigImg )
//2.---------------------------함수
// smallImg[0].addEventListener('mouseover',()=>{
//     bigImg.src = smallImg[0].src;
// })
// smallImg[1].addEventListener('mouseover',()=>{
//     bigImg.src = smallImg[1].src;
// })

function thumFunc(target1, target2){
    return target1.src = target2.src;
}
smallImg[0].addEventListener('mouseover', ()=>{
    thumFunc(bigImg, smallImg[0])
})
smallImg[1].addEventListener('mouseover', ()=>{
    thumFunc(bigImg, smallImg[1])
})

//--------------------------- 상품 옵션 선택에 따른 주문 정보+가격 8/28
// 목표1) 색상 선택 시 선택한 정보를 data-* 속성에 대입하고 대입한 값 확인하기
// 선택한 Dom 대상이 Select-option태그라면 사용해야하는 문법(아래)
// DOM.options[DOM.selectedIndex].text
// DOM.options[DOM.selectedIndex].value
// 사용자가 무엇을 선택할지 모르니까 [] 배열안에 DOM.selectedIndex를 적는거임
// text(option안에 들어있는 글을 가리킴)
// value(option에 있는 속성 value를 가리킴)
const colorSelect = document.querySelector('select[id=color]');
const optResult = document.querySelector('.opt_result'); // 주문 옵션 선택 시 츨력 박스
const sizeSelect = document.querySelector('select[id=size]');

console.log(colorSelect, optResult);

showHideFunc(optResult); // 아래 함수를 이용해 결과 값 상자 숨기기
// 나중에 나타났다 안나타났다 반족하기 때문에 함수로 만듦

// 주문옵션 숨기기/보이기 함수
function showHideFunc(target, visible='none') {
    return target.style.display = visible;
}

// 선택한 옵션 박스 색상 사이즈 같이 나오게 하는 법 
// 옵션 선택 시 호출 함수
function optResultFunc(dom, dataValue){
    if(dom.selectedIndex > 0){
        let changeOpt = dom.options[dom.selectedIndex].text;
        dom.dataset.dataValue = changeOpt;
        showHideFunc(optResult, 'flex');
        return optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color}, 사이즈 : ${sizeSelect.dataset.size}`;
    }
}

// (위) 함수 호출 이용한 이벤트 함수
sizeSelect.addEventListener('change', ()=>{ optResultFunc(sizeSelect, 'size') })
colorSelect.addEventListener('change', ()=>{ optResultFunc(colorSelect, 'color') })

// 아래 방법으로 하면 선택 옵션 박스에 색상 사이즈 따로따로 나옴

// select태그 변수 이벤트를 제작 시 사용해야하는 이벤트 종류 : change
// colorSelect.addEventListener('change',()=>{
//     if(colorSelect.selectedIndex > 0){ // 맨 처음에 있는(0) 색상이라는 안내문구를 제외한 조건문
//         // console.log('change 변경 확인');
//         let changeOpt = colorSelect.options[colorSelect.selectedIndex].text; // 선택옵션 변수 저장
//         // console.log(changeOpt); // 위 변수 test

//         // data-* 속성에 사용자가 선택한 정보 저장하기
//         // dom.dataset.속성명; // 읽기
//         // dom.dataset.속성명 = 값; // 수정, 삭제
//         // (위) 삭제는 '' 빈문자를 대입
//         colorSelect.dataset.color = changeOpt; // 속성명은 data위에 있는 이름
//         // console.log(colorSelect.dataset.color); // 위 명령 test 
//         // 이렇게하면 data-color에 내가 선택한 값이 들어감

//         // 선택 색상 옵션이 opt_result의 result자식 "색상 :" 자리에 삽입하기
//         showHideFunc(optResult, 'flex'); // 기본값으로 되돌려 나타내기
//         optResult.children[0].textContent = `색상 : ${colorSelect.dataset.color}`;
//     }
// })

// 사이즈 옵션 선택 시 주문 옵션에 출력하기 (안내문 제외)
// sizeSelect.addEventListener('change',()=>{
//     if(sizeSelect.selectedIndex > 0) {
//         // 선택한 옵션 저장소 만들기
//         let changeOpt = sizeSelect.options[sizeSelect.selectedIndex].text;
//         // console.log(sizeOPt);

//         // 저장된 옵션 data에 저장하기
//         sizeSelect.dataset.size = changeOpt;
//         // console.log(sizeSelect.dataset.size);

//         // 데이터에 저장한 옵션 박스에 나타내기
//         showHideFunc(optResult, 'flex');
//         optResult.children[0].textContent = `사이즈 : ${sizeSelect.dataset.size}`;
//     }
// })