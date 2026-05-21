export type PortfolioCategory = '판넬공사' | '지붕공사' | '강판공사';

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
// ─────────────────────────────────────────────

export const portfolioItems: PortfolioItem[] = [
  // 아래에 시공 사례를 추가해주세요
  // {
  //   id: 1,
  //   title: '○○ 공장 판넬공사',
  //   category: '판넬공사',
  //   type: 'image',
  //   src: '/portfolio/panel-001.jpg',
  //   description: '공장 외벽 판넬 시공',
  //   location: '경기도 평택',
  //   year: 2024,
  // },
  // {
  //   id: 2,
  //   title: '○○ 창고 지붕공사',
  //   category: '지붕공사',
  //   type: 'youtube',
  //   src: 'YouTube영상ID',
  //   description: '창고 지붕 시공 영상',
  //   location: '경기도 안성',
  //   year: 2024,
  // },
];

export const youtubeVideos: { id: string; title: string }[] = [
  // 홈페이지 유튜브 섹션에 표시할 영상을 추가해주세요
  // { id: 'YouTube영상ID', title: '판넬공사 시공 과정' },
  // { id: 'YouTube영상ID', title: '지붕공사 현장' },
];
