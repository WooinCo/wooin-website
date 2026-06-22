export type PortfolioCategory =
  | '신축공사'
  | '증축·리모델링'
  | '보수·개보수';

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  type: 'image' | 'youtube';
  src: string;
  description?: string;
  location?: string;
  year?: number;
}

// 필터 탭에 표시할 카테고리 순서 (헤더 사업영역과 동일)
export const portfolioCategories: PortfolioCategory[] = [
  '신축공사',
  '증축·리모델링',
  '보수·개보수',
];

// ─────────────────────────────────────────────
// 이미지 추가 방법:
//   type: 'image'
//   src: '/portfolio/파일명.jpg'
//   → public/portfolio/ 폴더에 이미지를 넣고 파일명을 src에 입력하세요
//
// YouTube 영상 추가 방법:
//   type: 'youtube'
//   src: 'YouTube 영상 ID'
//   (예: https://www.youtube.com/watch?v=ABCDE12345 → src: 'ABCDE12345')
//
// category 는 위 portfolioCategories 중 하나를 그대로 사용하세요.
// ─────────────────────────────────────────────

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: '평택 공장 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/1.png',
    description: '신축공사',
    location: '경기도 평택',
    year: 2025,
  },
  {
    id: 2,
    title: '라도무스 증축공사',
    category: '증축·리모델링',
    type: 'image',
    src: '/portfolio/2.png',
    description: '증축공사',
    location: '대전광역시',
    year: 2025,
  },
  {
    id: 3,
    title: '오비맥주 물류창고 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/mokdong.png',
    description: '신축공사',
    location: '경기도 광주',
    year: 2024,
  },
  {
    id: 4,
    title: '에이맥스(A-MAX) 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/amax.jpg',
    description: '신축공사',
    location: '경기도 평택',
    year: 2023,
  },
  {
    id: 5,
    title: '엘에스화장품 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/ls-cosmetics.jpg',
    description: '신축공사',
    location: '인천광역시',
    year: 2024,
  },
  {
    id: 6,
    title: '저스템(Justem) 증축공사',
    category: '증축·리모델링',
    type: 'image',
    src: '/portfolio/4.png',
    description: '증축공사',
    location: '경기도 화성',
    year: 2023,
  },
  {
    id: 7,
    title: '태림포장 공장 리모델링 및 솔라루프',
    category: '증축·리모델링',
    type: 'image',
    src: '/portfolio/taerim.png',
    description: '리모델링 및 솔라루프 시공',
    location: '경남 마산',
    year: 2025,
  },
  {
    id: 8,
    title: '주덕자원순환센터 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/3.png',
    description: '신축공사',
    location: '충북 충주',
    year: 2025,
  },
  {
    id: 9,
    title: '필링크 신축공사',
    category: '신축공사',
    type: 'image',
    src: '/portfolio/KakaoTalk_20251210_134119629_04.jpg',
    description: '신축공사',
    location: '경기 화성',
    year: 2025,
  },
];

export const youtubeVideos: { id: string; title: string }[] = [
  { id: 'FIkuBe-KMnw', title: '우인산업 회사 홍보영상' },
];
