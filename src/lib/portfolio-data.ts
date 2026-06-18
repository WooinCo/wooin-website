export type PortfolioCategory =
  | '신축공사'
  | '증축·리모델링'
  | '보수·개보수'
  | '철골공사'
  | '판넬공사'
  | '지붕공사'
  | '강판공사';

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
  '철골공사',
  '판넬공사',
  '지붕공사',
  '강판공사',
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
    description: '판넬 외벽 시공',
    location: '경기도 평택',
    year: 2025,
  },
  {
    id: 2,
    title: '대전 라도무스 증축공사',
    category: '증축·리모델링',
    type: 'image',
    src: '/portfolio/2.png',
    description: '루버 외벽 시공',
    location: '대전광역시',
    year: 2025,
  },
];

export const youtubeVideos: { id: string; title: string }[] = [
  // 홈페이지 유튜브 섹션에 표시할 영상을 추가해주세요
  // { id: 'YouTube영상ID', title: '판넬공사 시공 과정' },
  // { id: 'YouTube영상ID', title: '지붕공사 현장' },
];
