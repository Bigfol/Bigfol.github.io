import HeroSection from "./HeroSection";
import SeasonSlider from "./SeasonSlider";

const Main = () => {
  return (
    <main className="flex-grow w-full max-w-7xl xl:max-w-[1920px] mx-auto">
      <HeroSection />
      <SeasonSlider />
    </main>
  );
};

export default Main;
