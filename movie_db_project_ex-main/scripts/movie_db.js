// 영화 DB
// 어벤져스, 스파이더멘, 오디세이, 토이스토리5, 악마는 프라다를 입는다2, 마이클, 슈퍼마리오갤럭시, 프로젝트 헤일리메리, 폭풍의 언덕
const movieDB = [
    {
        id: 1,
        title: '어벤져스',
        date: '2026-12-18',
        poster: 'poster/poster_avengersdoomsday.jpg',
        genre: '액션, SF, 슈퍼히어로',
        director: '안소니 루소, 조 루소',
        rating: 4.8,
        cast: ['로버트 다우니 주니어', '크리스 에반스', '크리스 헴스워스', '마크 러프팔로'],
        summary: '지구를 위협하는 강력한 적에 맞서기 위해 세상의 슈퍼히어로들이 모여 결성된 최강의 팀, 어벤져스의 위대한 사투를 그린 영화.'
    },
    {
        id: 2,
        title: '스파이더맨',
        date: '2026-07-15',
        poster: 'poster/poster_spidermanbrandnewday.jpg',
        genre: '액션, 모험, SF',
        director: '존 왓츠',
        rating: 4.7,
        cast: ['톰 홀랜드', '젠데이아', '베네딕트 컴버배치'],
        summary: '정체가 탄로 난 이후 세상의 모든 관심을 받게 된 스파이더맨이 평범한 일상을 되찾기 위해 멀티버스의 문을 열면서 벌어지는 이야기.'
    },
    {
        id: 3,
        title: '오디세이',
        date: '2015-10-08',
        poster: 'poster/poster_theodyssey.jpg',
        genre: 'SF, 모험, 드라마',
        director: '리들리 스콧',
        rating: 4.9,
        cast: ['맷 데이언', '제시카 차스테인', '위민 레이 카마라'],
        summary: '화성 탐사 도중 모래폭풍을 만나 홀로 남겨진 우주비언 마크 와트니가 생존을 위해 식량을 만들고 지구로 돌아갈 방법을 찾는 사투.'
    },
    {
        id: 4,
        title: '토이 스토리 5',
        date: '2026-06-19',
        poster: 'poster/poster_toystory5.jpg',
        genre: '애니메이션, 코미디, 가족',
        director: '앤드류 스탠튼',
        rating: 4.6,
        cast: ['톰 행크스', '팀 알렌'],
        summary: '우디, 버즈 그리고 장난감 친구들이 현대 디지털 시대 속에서 새로운 장난감들과 마주하며 벌어지는 예측불허 유쾌한 모험.'
    },
    {
        id: 5,
        title: '악마는 프라다를 입는다 2',
        date: '2026-11-05',
        poster: 'poster/poster_thedevilwearsprada2.jpg',
        genre: '코미디, 드라마',
        director: '데이빗 프랭켈',
        rating: 4.5,
        cast: ['메릴 스트립', '앤 헤서웨이', '에밀리 블런트'],
        summary: '전설적인 패션 매거진 편집장 미란다 프리스클리와 앤디가 변화하는 패션 미디어 업계에서 다시 한번 마주하며 벌어지는 이야기.'
    },
    {
        id: 6,
        title: '마이클',
        date: '2026-04-18',
        poster: 'poster/poster_michael.jpg',
        genre: '전기, 드라마, 음악',
        director: '안톤 푸쿠아',
        rating: 4.8,
        cast: ['자파르 잭슨', '콜만 도밍고'],
        summary: '팝의 황제 마이클 잭슨의 찬란했던 음악 인생과 무대 뒤의 숨겨진 이야기, 그리고 그의 예술적 고뇌를 다린 전기 영화.'
    },
    {
        id: 7,
        title: '슈퍼 마리오 갤럭시',
        date: '2026-12-25',
        poster: 'poster/poster_thesupermariogalaxymovie.jpg',
        genre: '애니메이션, 판타지, 모험',
        director: '아론 호바스, 마이클 젤닉',
        rating: 4.7,
        cast: ['크리스 프랫', '안야 테일러 조이', '찰리 데이'],
        summary: '우주로 확장된 버섯 왕국을 구하기 위해 마리오와 루이지가 은하계를 가로지르며 펼치는 스펙터클한 모험.'
    },
    {
        id: 8,
        title: '프로젝트 헤일리 메리',
        date: '2026-03-20',
        poster: 'poster/poster_projecthailmary.jpg',
        genre: 'SF, 모험, 스릴러',
        director: '필 로드, 크리스 밀러',
        rating: 4.9,
        cast: ['라이언 고슬링', '산드라 ึ러'],
        summary: '인류를 구하기 위해 홀로 기억을 잃은 채 우주선에 탑승한 과학자가 우주에서 미지의 존재와 만나 인류의 운명을 건 임무를 수행하는 이야기.'
    },
    {
        id: 9,
        title: '폭풍의 언덕',
        date: '2026-09-10',
        poster: 'poster/poster_wutheringheights.jpg',
        genre: '로맨스, 드라마, 고전',
        director: '에메랄드 펜넬',
        rating: 4.6,
        cast: ['마고 로비', '제이콥 엘로디'],
        summary: '요크셔의 황량한 대지를 배경으로 펼쳐지는 히스클리프와 캐서린의 파멸적이고 강렬한 사랑과 복수를 그린 고전 명작의 재해석.'
    }
];