// index.js
// 기존 태그 선택 querySelector()
// 기존 태그 복제 cloneNode()
// 새로운 태그 생성 createElement()
// 생성한 대상을 붙여넣기 appendChild()
const movieWrap1 = document.querySelector('.movie_wrap1'); // 선택 ul 대상

// Q. 어벤져스 DB 1개 li에 삽입하기
// const movieLi = document.createElement('li'); 
// (위) html에 없던 li를 새로 생성한거라 console에 li만 있고 안에 아무것도 없음

// movieLi.textContent = '어벤져스';
// movieLi.textContent = movieDB[0].title; // movieDB 변수의 1번째의 title을 불러옴
// movieLi.textContent += movieDB[0].date; // += 복합대입(기존값에 더해서 대입)
// movieLi.textContent = movieDB[0].date; // = 대입(기존값을 제거하고 대입(기본뜻))
// console.log(movieWrap1, movieLi);

// movieWrap1.appendChild(movieLi); // ul안에 li 붙여넣기

// Q2. 영화 DB 1~9개 모두 출력하기
for(let i=0; i<9; i++){
    const movieLi = document.createElement('li');
    // textcontent는 글자만 넣을때, innerHTML는 태그를 함께 쓸때
    // textcontent만 쓰면 바로 li에 들어가고 innerHTML를 쓰면 작성한 태그 안에 글자가 들어감
    movieLi.innerHTML = `<h3>${movieDB[i].title}</h3>`
    movieLi.innerHTML += `<p>${movieDB[i].date}</p>`
    movieLi.innerHTML += `<a href="#"><img src="${movieDB[i].poster}" alt="${movieDB[i].title}"></img></a>`
    movieWrap1.appendChild(movieLi);
}

// 상영 예정작 10개
const animeMovie = document.querySelector('.anime_movie');

console.log(animeMovie);

for(let i=0; i<10; i++){
    const aniLi = document.createElement('li');
    aniLi.innerHTML = `<h3>${animeDB[i].anititle}</h3>`
    aniLi.innerHTML += `<p>${animeDB[i].anidate}</p>`
    aniLi.innerHTML += `<a href="#"><img src="${animeDB[i].aniposter}" alt="${animeDB[i].anititle}"></img></a>`
    animeMovie.appendChild(aniLi);
}