const HeroSection = () => {
  return (
    <div className="relative mx-auto mb-[85px] lg:mt-10 lg:mb-[170px] transition-all">
      <div
        id="nbcgate-pay-button"
        nbcgate-order-amount="{{ --AMOUNT-- }}"
        nbcgate-order-id="{{ --TRANSACTION ID-- }}"
        nbcgate-return-url=""
        nbcgate-theme="dark"
        nbcgate-lang="ru"
      ></div>
      <img
        src="img/hero-images-desktop.webp"
        alt="hero"
        className="lg:block hidden mx-auto"
      />
      <img
        src="img/hero-images-tablet.webp"
        alt="hero"
        className="hidden md:block lg:hidden mx-auto"
      />
      <img
        src="img/hero-images-mobile.webp"
        alt="hero"
        className="md:hidden block"
      />
    </div>
  );
};

export default HeroSection;
