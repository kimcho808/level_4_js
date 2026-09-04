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

// ---------------------------------------------------------26/9/4
// 무비차트 + swiper
// swiper-slide 반복 생성해서 swiper-wrapper에 붙여넣기
// swiper-wrapper말고 swiper만 변수 만들어서 할거임
// swiper 플러그인 함수 연결은 swiper 최종연결
const chart_swiper = document.querySelector('.chart_swiper');
console.log(chart_swiper);

const chart_swiper_func = new Swiper(chart_swiper,{
    slidesPerView:2,
    spaceBetween:10,
}); // 플러그인 연결

for(let i=0; i<5; i++){
    const chart_slide = document.createElement('div'); // swiper-slide(class) 이름 붙일 태그 만들기
    chart_slide.classList.add('swiper-slide'); // 만든 태그에 swiper-slide(class) 이름 붙이기

    chart_slide.innerHTML = `<p class="num">${movieDB[i].id}위</p>`;
    chart_slide.innerHTML += `<h3>${movieDB[i].title}</h3>`;
    chart_slide.innerHTML += `<p class="rating">${movieDB[i].rating}</p>`;
    chart_slide.innerHTML += `<p class="story">${movieDB[i].summary}</p>`;
    chart_slide.style.backgroundImage = `url(${movieDB[i].poster})`;

    chart_swiper.children[0].appendChild(chart_slide); // html에 있는 swiper에 붙이기
}

// ----------------------------------- 애니메이션 차트
// swiper 변수
// div 태그 만들기
// 만든 태그에 (swiper-slide)붙이기
// swiper-slide 안에 태그 붙이기
const aniSwiper = document.querySelector('.ani_swiper');
console.log(aniSwiper);

const ani_chart_swiper = new Swiper(aniSwiper,{
    slidesPerView:3,
    spaceBetween:16,
});

for(let i=0; i<9; i++){
    const ani_slide = document.createElement('div');
    ani_slide.classList.add('swiper-slide'); //classList는 이미 class이니까 () 안에 . 붙이지 않기

    ani_slide.innerHTML = `<p class="num">${animeDB[i].id}</p>`;
    ani_slide.innerHTML += `<h3>${animeDB[i].anititle}</h3>`;
    ani_slide.innerHTML += `<p class="rating">${animeDB[i].rating}</p>`;
    ani_slide.innerHTML += `<p class="summary">${animeDB[i].summary}</p>`;
    ani_slide.style.backgroundImage = `url(${animeDB[i].aniposter})`;

    aniSwiper.children[0].appendChild(ani_slide);
}