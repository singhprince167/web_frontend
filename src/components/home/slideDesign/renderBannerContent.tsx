import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface BannerContentProps {
  bannerIdx: number;
  banner: {
    title: string;
    subtitle?: string;
    highlight?: string;
    desc?: string;
    extra?: React.ReactNode;
    cta?: string;
    ctaHref?: string;
    img?: string;
    alt?: string;
  };
}

const RenderBannerContent = ({ bannerIdx, banner }: BannerContentProps) => {
  switch (bannerIdx) {
    case 0:
      return (
        <div className="flex flex-col md:flex-row items-center w-full gap-8">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-4 drop-shadow">
              {banner.title}
            </h1>
            <p className="text-xl text-gray-700 mb-2">{banner.subtitle}</p>
            <div className="mb-2">
              <span className="text-lg font-bold text-yellow-600">
                {banner.highlight}
              </span><br/>
              <span className="ml-2 text-base">{banner.desc}</span>
            </div>
            <div className="mb-2">{banner.extra}</div>
            <div className="mb-2">
              {banner.cta && (
                <a
                  href={banner.ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-full text-lg font-medium shadow-lg hover:bg-teal-700 transition mt-2"
                >
                  {banner.cta} <FaArrowRightLong size={18} />
                </a>
              )}
            </div>
            <div className="text-xs text-gray-500">
              {React.isValidElement(banner.extra) &&
              (banner.extra as React.ReactElement<any>).props?.children
                ? Array.isArray(
                    (banner.extra as React.ReactElement<any>).props.children
                  )
                  ? (banner.extra as React.ReactElement<any>).props.children[3]
                  : null
                : null}
            </div>
          </div>
          <div>
            <img
              src={banner.img}
              alt={banner.alt}
              className="w-96 h-96 rounded-2xl shadow-lg border-4 border-teal-100"
            />
          </div>
        </div>
      );

    case 1:
      return (
        <div className="flex flex-col items-center w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-700 mb-2">
            {banner.title}
          </h1>
          <div className="flex flex-col md:flex-row gap-4 items-center mb-2">
            <img
              src={banner.img}
              alt={banner.alt}
              className="w-32 h-32 rounded-full shadow-lg border-4 border-teal-100"
            />
            <div>
              <p className="text-lg text-gray-700">{banner.subtitle}</p>
              <div className="text-teal-600 font-semibold mt-1">
                {banner.highlight}
              </div>
              <div className="text-base mt-2">{banner.desc}</div>
              <div className="mt-2">{banner.extra}</div>
              <a
                href={banner.ctaHref}
                className="inline-flex items-center gap-2 px-5 py-2 bg-teal-600 text-white rounded-full text-base font-medium shadow hover:bg-teal-700 transition mt-3"
              >
                {banner.cta} <FaArrowRightLong size={16} />
              </a>
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col-reverse md:flex-row items-center w-full gap-6">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-2">
              {banner.title}
            </h1>
            <p className="text-lg text-gray-700 mb-1">{banner.subtitle}</p>
            <div className="text-purple-600 font-semibold mb-1">
              {banner.highlight}
            </div>
            <div className="mb-1">{banner.desc}</div>
            <div className="mb-2">{banner.extra}</div>
            <a
              href={banner.ctaHref}
              className="inline-flex items-center gap-2 px-5 py-2 bg-purple-600 text-white rounded-full text-base font-medium shadow hover:bg-purple-700 transition mt-2"
            >
              {banner.cta} <FaArrowRightLong size={16} />
            </a>
          </div>
          <img
            src={banner.img}
            alt={banner.alt}
            className="w-40 h-40 rounded-xl shadow-lg border-4 border-purple-100 flex-1"
          />
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col md:flex-row items-center w-full gap-6">
          <img
            src={banner.img}
            alt={banner.alt}
            className="w-40 h-40 rounded-xl shadow-lg border-4 border-green-100"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-2">
              {banner.title}
            </h1>
            <p className="text-lg text-gray-700 mb-1">{banner.subtitle}</p>
            <div className="text-green-600 font-semibold mb-1">
              {banner.highlight}
            </div>
            <div className="mb-1">{banner.desc}</div>
            <div className="mb-2">{banner.extra}</div>
            <a
              href={banner.ctaHref}
              className="inline-flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-full text-base font-medium shadow hover:bg-green-700 transition mt-2"
            >
              {banner.cta} <FaArrowRightLong size={16} />
            </a>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default RenderBannerContent;
