import FirstSection from "./FirstSection";
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

    </div>
  );
};
