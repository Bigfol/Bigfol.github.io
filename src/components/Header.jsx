const Header = () => {
  return (
    <header className="flex justify-center mt-10 mb-5 md:py-10">
      <img
        src="img/1.webp"
        alt="header-decore"
        className="hidden sm:block absolute w-full top-0 -z-[1]"
      />
      <img
        src="img/decor-header-mobile.webp"
        alt="header-decore-mobild"
        className="block sm:hidden absolute w-full top-0 -z-[1]"
      />
      <div className="w-[250px] sm:w-auto">
        <img src="img/фанатское переиздание.webp" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
