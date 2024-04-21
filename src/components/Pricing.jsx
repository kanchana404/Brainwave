import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import {LeftLine, RightLine} from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -tranlate-y-1/2 pointer-events-none">
            <img
              src={stars}
              alt="star"
              className="w-full"
              width={950}
              height={400}
            />
          </div>
        </div>
        <Heading
        tag="Get started with Brainwave"
        title="Pay once, use forever"
        />
        <div>
          <PricingList />
          <LeftLine/>
          <RightLine/>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
