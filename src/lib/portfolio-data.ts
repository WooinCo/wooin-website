export type PortfolioCategory =
  | '신축공사'
  | '증축·보수·리모델링'
  | '태양광';

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  type: 'image' | 'youtube';
  src: string;
  /** 비포/애프터 썸네일용 — 있으면 src가 AFTER, 이 값이 BEFORE */
  beforeSrc?: string;
  /** 썸네일 표시 위치 — 위아래 합성 이미지일 때 'top' 또는 'bottom' 지정 */
  thumbnailPosition?: 'top' | 'bottom' | 'center';
  description?: string;
  location?: string;
  year?: number;
}

// 필터 탭에 표시할 카테고리 순서
export const portfolioCategories: PortfolioCategory[] = [
  '신축공사',
  '증축·보수·리모델링',
  '태양광',
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: '평택 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/1.png',
    location: '경기 평택',
    year: 2025,
  },
  {
    id: 2,
    title: '대전 증축공사',
    category: '증축·보수·리모델링',
    type: 'image',
    src: '/portfolio/2.png',
    location: '대전광역시',
    year: 2025,
  },
  {
    id: 3,
    title: '마산 리모델링 우인솔라루프',
    category: '태양광',
    type: 'image',
    src: '/portfolio/taerim.png',
    location: '경남 마산',
    year: 2025,
  },
  {
    id: 4,
    title: '충주 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/3.png',
    location: '충북 충주',
    year: 2025,
  },
  {
    id: 5,
    title: '화성 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/KakaoTalk_20251210_134119629_04.jpg',
    location: '경기 화성',
    year: 2025,
  },
  {
    id: 6,
    title: '광주 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/mokdong.png',
    location: '경기 광주',
    year: 2024,
  },
  {
    id: 7,
    title: '인천 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/ls-cosmetics.jpg',
    location: '인천광역시',
    year: 2024,
  },
  {
    id: 8,
    title: '평택 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/amax.jpg',
    location: '경기 평택',
    year: 2023,
  },
  {
    id: 9,
    title: '화성 증축공사',
    category: '증축·보수·리모델링',
    type: 'image',
    src: '/portfolio/4.png',
    location: '경기 화성',
    year: 2023,
  },
  {
    id: 10,
    title: '원주 신축공사 우인모노루프',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/wonju-after.png',
    beforeSrc: '/portfolio/wonju-before.png',
    location: '강원 원주',
    year: 2025,
  },
  {
    id: 11,
    title: '서산 신축 강판공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/KakaoTalk_20260422_150256987.jpg',
    location: '충남 서산',
    year: 2026,
  },
  {
    id: 12,
    title: '인천 증축공사',
    category: '증축·보수·리모델링',
    type: 'image',
    src: '/portfolio/daeduk-gas.jpg',
    location: '인천광역시',
    year: 2023,
  },
  {
    id: 13,
    title: '용인 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/yongin-jubukri.jpg',
    location: '경기 용인',
    year: 2021,
  },
  {
    id: 21,
    title: '포항 솔라루프',
    category: '태양광',
    type: 'image',
    src: '/portfolio/pohang-solar.png',
    location: '경북 포항',
    year: 2026,
    thumbnailPosition: 'top',
  },
  {
    id: 20,
    title: '평택 솔라루프',
    category: '태양광',
    type: 'image',
    src: '/portfolio/pyeongtaek-solar.png',
    location: '경기 평택',
    year: 2026,
  },
  {
    id: 19,
    title: '안성 솔라루프',
    category: '태양광',
    type: 'image',
    src: '/portfolio/ansung-solar.png',
    location: '경기 안성',
    year: 2026,
  },
  {
    id: 18,
    title: '함안 솔라루프',
    category: '태양광',
    type: 'image',
    src: '/portfolio/haman-solar.png',
    location: '경남 함안',
    year: 2026,
  },
  {
    id: 16,
    title: '완주 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/일진1.jpg',
    location: '전북 완주',
    year: 2026,
  },
  {
    id: 15,
    title: '평택 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/이화산업.png',
    location: '경기 평택',
    year: 2026,
  },
  {
    id: 14,
    title: '화성 지붕 덧방공사',
    category: '증축·보수·리모델링',
    type: 'image',
    src: '/portfolio/hwaseong-daeseok-after.jpg',
    beforeSrc: '/portfolio/hwaseong-daeseok-before.jpg',
    location: '경기 화성',
    year: 2026,
  },
];

export const youtubeVideos: { id: string; title: string }[] = [
  { id: 'FIkuBe-KMnw', title: '우인산업 회사 홍보영상' },
];
