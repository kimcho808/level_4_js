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
//3.---------------------------이벤트