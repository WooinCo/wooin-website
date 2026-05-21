interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <div className="bg-gradient-to-r from-[#0d1b4b] to-[#1C3177] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-black mb-2">{title}</h1>
        {subtitle && (
          <p className="text-blue-200 text-base md:text-lg mt-2">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
