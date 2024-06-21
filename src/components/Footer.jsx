import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

const Footer = () => {
  const { width } = useWindowSize();
  const [isHoverVK, setIsHoverVK] = useState(false);
  const [isHoverBoosty, setIsHoverBoosty] = useState(false);

  return (
    <footer className="xl:mt-[140px] pt-10 pb-5 md:py-10">
      <img
        className="hidden sm:block absolute bottom-0 left-0 w-full -z-[1]"
        src="img/decor-footer.webp"
        alt="decor"
      />
      <img
        className="block sm:hidden absolute bottom-0 left-0 w-full -z-[1]"
        src="img/decor-footer-mobile.webp"
        alt="decor"
      />
      <div className="justify-center flex items-center flex-col md:flex-row w-[235px] mx-auto md:mx-0 md:w-auto">
        <div
          className="bg-no-repeat bg-center md:mr-6 bg-contain"
          style={{
            backgroundImage: "url(img/donation.webp)",
          }}
        >
          <p className="text-[22px] md:text-3xl text-[#443b30] opacity-0">
            Поддержать проект
          </p>
        </div>

        <div className="flex items-center flex-1 md:flex-none gap-4">
          <a
            className="text-2xl md:text-3xl text-[#443b30] bg-no-repeat block w-full md:w-auto py-[10px] px-1 md:px-4 transition-all bg-contain bg-center"
            href="https://vk.com/std616"
            rel="noreferrer"
            target="_blank"
            style={{
              backgroundImage: isHoverVK || width < 768
                ? "url(img/vk-btn-hover.webp)"
                : "url(img/vk-btn.webp)",
            }}
            onMouseEnter={() => setIsHoverVK(true)}
            onMouseLeave={() => setIsHoverVK(false)}
          >
            <span className="opacity-0">ВКонтакте</span>
          </a>
          <a
            className="text-2xl md:text-3xl text-[#443b30] bg-no-repeat block w-full md:w-auto py-[10px] px-1 md:px-4 transition-all bg-contain bg-center"
            href="https://boosty.to/studio616"
            rel="noreferrer"
            target="_blank"
            style={{
              backgroundImage: isHoverBoosty || width < 768
                ? "url(img/boosty-btn-hover.webp)"
                : "url(img/boosty-btn.webp)",
            }}
            onMouseEnter={() => setIsHoverBoosty(true)}
            onMouseLeave={() => setIsHoverBoosty(false)}
          >
            <span className="opacity-0">Boosty</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
