import Image from "next/image";

/**
 * 홈 히어로 시네마틱 배경.
 * 바다(hero.jpg)가 천천히 줌인되다가 건물(hero-future.jpg)로 디졸브되며
 * 건물에서 정지한다. 영상 없이 CSS 애니메이션만 사용하며,
 * prefers-reduced-motion 환경에서는 애니메이션 없이 건물 정지 화면을 보여준다.
 *
 * 어두운 오버레이는 이 컴포넌트 밖(부모)에서 처리하므로 여기서는 이미지만 렌더한다.
 */
export default function HeroBackdrop() {
  return (
    <>
      {/* 바다 — 줌인 후 디졸브로 사라짐 */}
      <Image
        src="/images/hero.jpg"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="object-cover hero-sea"
      />
      {/* 건물 — 디졸브로 나타나 정지 */}
      <Image
        src="/images/hero-future.jpg"
        alt="우인산업이 짓는 미래의 건축물"
        fill
        priority
        className="object-cover hero-building"
      />
    </>
  );
}
