import Image from "next/image";

interface LogoProps {
  variant?: "full" | "icon";
  light?: boolean;
  className?: string;
}

export default function Logo({
  light = false,
  className = "",
}: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={light ? "/images/logo-white.png" : "/images/logo-navy.png"}
        alt="(주)우인산업 로고"
        width={1183}
        height={382}
        className="h-10 w-auto"
        priority
      />
    </div>
  );
}
