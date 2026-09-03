// anime_db.js
// 상영 예정
// 마루밑 아리에티, 체인소맨, 하울의 움직이는 성, 귀멸의 칼날, 벼랑 위의 포뇨, 센과 치히로의 행방불명, 스즈메의 문단속, 그대들은 어떻게 살 것인가, 슬램덩크, 너의 이름은
const animeDB = [
    {
        id: 1,
        anititle: '마루 밑 아리에티',
        anidate: '2010-09-09',
        aniposter: 'poster_anime/poster_arrietty.jpg',
        genre: '애니메이션, 판타지, 드라마',
        director: '요네바야시 히로마사',
        rating: 4.8,
        cast: ['시다 미라이', '카미키 류노스케'],
        summary: '인간들의 눈을 피해 교외 저택의 마루 밑에 숨어 살아가는 소인족 소녀 아리에티와 인간 소년 쇼우의 교감과 우정을 그린 감성 애니메이션.'
    },
    {
        id: 2,
        anititle: '체인소 맨',
        anidate: '2022-10-12',
        aniposter: 'poster_anime/poster_chainsawmanreze.jpg',
        genre: '액션, 판타지, 다크다크',
        director: '나카야마 류',
        rating: 4.7,
        cast: ['토야 키쿠노스케', '쿠스노키 토모리', '사카타 쇼고'],
        summary: '부모님이 남긴 빚을 갚기 위해 악마 사냥꾼으로 살아가던 덴지가 악마 포치타와 계약해 체인소 맨으로 거듭나며 펼쳐지는 치열한 사투.'
    },
    {
        id: 3,
        anititle: '하울의 움직이는 성',
        anidate: '2004-12-23',
        aniposter: 'poster_anime/poster_howlsmovingcastle.jpg',
        genre: '애니메이션, 판타지, 로맨스',
        director: '미야자키 하야오',
        rating: 4.9,
        cast: ['바이쇼 치에코', '기무라 타쿠야'],
        summary: '마녀의 저주로 인해 90세 할머니가 되어버린 모자가게 소녀 소피가 마법사 하울의 움직이는 성에 들어가며 겪게 되는 마법 같은 이야기.'
    },
    {
        id: 4,
        anititle: '귀멸의 칼날',
        anidate: '2019-04-06',
        aniposter: 'poster_anime/poster_kimetsuinfinitycastle.jpg',
        genre: '애니메이션, 액션, 판타지',
        director: '소토자키 하루오',
        rating: 4.9,
        cast: ['하나에 나츠키', '키토 아카리', '시모노 히로', '마츠오카 요시츠구'],
        summary: '혈귀에게 가족을 잃고 유일하게 살아남은 여동생 네즈코마저 혈귀가 되어버린 소년 탄지로가 동생을 인간으로 되돌리기 위해 귀살대에 들어가는 이야기.'
    },
    {
        id: 5,
        anititle: '벼랑 위의 포뇨',
        anidate: '2008-12-17',
        aniposter: 'poster_anime/poster_ponyo.jpg',
        genre: '애니메이션, 판타지, 가족',
        director: '미야자키 하야오',
        rating: 4.6,
        cast: ['나라 히로키', '도이 히로키'],
        summary: '호기심 많은 바다의 요정소녀 포뇨가 인간 소년 소스케를 만나 인간이 되고 싶어 하며 벌어지는 순수하고 귀여운 모험 이야기.'
    },
    {
        id: 6,
        anititle: '센과 치히로의 행방불명',
        anidate: '2001-06-28',
        aniposter: 'poster_anime/poster_spiritedaway.jpg',
        genre: '애니메이션, 판타지, 모험',
        director: '미야자키 하야오',
        rating: 5.0,
        cast: ['히이라기 루미', '이리노 미유', '나츠키 마리'],
        summary: '터널을 지나 우연히 신들의 세계로 발을 들인 10대 소녀 치히로가 부모님을 구하기 위해 온천장에서 일하며 성장해 나가는 판타지 걸작.'
    },
    {
        id: 7,
        anititle: '스즈메의 문단속',
        anidate: '2023-03-08',
        aniposter: 'poster_anime/poster_suzume.jpg',
        genre: '애니메이션, 판타지, 모험',
        director: '신카이 마코토',
        rating: 4.8,
        cast: ['하라 나노카', '마츠무라 호쿠토'],
        summary: '재앙을 부르는 문을 닫기 위해 일본 각지의 폐허로 여행을 떠나는 소녀 스즈메의 신비롭고 감동적인 모험 여정.'
    },
    {
        id: 8,
        anititle: '그대들은 어떻게 살 것인가',
        anidate: '2023-10-25',
        aniposter: 'poster_anime/poster_theboyandtheheron.jpg',
        genre: '애니메이션, 판타지, 드라마',
        director: '미야자키 하야오',
        rating: 4.3,
        cast: ['산토 마사토키', '시바사키 코우', '아이묭'],
        summary: '어머니를 잃은 소년 마히토가 신비로운 왜가리를 만나 미지의 세계로 인도되면서 삶과 죽음, 그리고 자신을 마주하게 되는 이야기.'
    },
    {
        id: 9,
        anititle: '더 퍼스트 슬램덩크',
        anidate: '2023-01-04',
        aniposter: 'poster_anime/poster_thefirstslamdunk.jpg',
        genre: '애니메이션, 드라마, 스포츠',
        director: '이노우에 다케히코',
        rating: 4.9,
        cast: ['나카무라 슈고', '카사마 준', '키무라 스바루'],
        summary: '북산고등학교 농구부 5인방이 전국제패를 향해 땀 흘리며 치열한 승부를 벌이는 뜨거운 스포츠 애니메이션.'
    },
    {
        id: 0,
        anititle: '너의 이름은.',
        anidate: '2017-01-04',
        aniposter: 'poster_anime/poster_yourname.jpg',
        genre: '애니메이션, 로맨스, 판타지',
        director: '신카이 마코토',
        rating: 4.9,
        cast: ['카미키 류노스케', '카라이시 모네'],
        summary: '꿈속에서 몸이 뒤바뀌는 기적을 경험한 시골 소녀 미츠하와 도시 소년 타키가 서로를 찾아 나서는 운명적인 판타지 로맨스.'
    }
];