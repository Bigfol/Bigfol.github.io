import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative px-7">
      <Header />
      <Main />
      <Footer />
      <div
        style={{ backgroundImage: "url(img/decor-web-new.webp)" }}
        className="w-full h-full bg-no-repeat bg-cover absolute top-0 bg-center left-0 -z-10"
      />
      <img
        src="img/Texture.webp"
        alt="texture"
        className="absolute left-0 top-0 w-full h-full z-50 pointer-events-none"
      />
      <div
        className="pageTextureOverlay"
        style={{ backgroundImage: "url('img/Texture-2.webp')" }}
      />
    </div>
  );
};

export default Layout;
