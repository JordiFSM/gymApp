import FirstSection from "./FirstSection";
import { FiveSection } from "./FiveSection";
import { FourthSection } from "./FourthSection";
import { SecondSection } from "./SecondSection";
import { ThirdSection } from "./ThirdSection";

export const Home = () => {
  return (
    <div className={` margin-sections `}>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FiveSection/>

    </div>
  );
};
