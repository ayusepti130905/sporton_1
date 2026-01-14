import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero-section" className="container mx-auto mt-32 -ml-20 h-screen flex">
      <div className="relative self-center">
        <Image
          src="/images/basketball.svg"
          width={500}
          height={500}
          alt="image sporton"
          className="grayscale absolute left-10 -top-25"
        />
        <div className="relative ml-40 w-full">
            <div className="relative rounded-full w-[151px] h-[37px] flex items-center justify-center left-5">
                <div className="absolute inset-0 bg-primary opacity-20 rounded-full"></div>
                <p className="text-primary italic">Friday Sale, 50%</p>
            </div>
          <h1 className="font-extrabold text-[95px] italic bg-gradient-to-b leading-tight from-black to-[#979797] bg-clip-text text-transparent">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>
          <p className="w-3/7 mt-10 leading-loose text-[16px]">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-14">
            <Button>
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                alt="icon playvideo"
                width={29}
                height={29}
              />
            </Button>
          </div>
        </div>
        <Image
          src="/images/img-hero.svg"
          width={700}
          height={700}
          alt="image sporton hero"
          className="absolute -right-35 top-3/7 -translate-y-1/2"
        />
      </div>
      <Image
        src="/images/Ellipse 3.svg"
        width={200}
        height={200}
        alt="image sporton"
        className="absolute -right-5 top-3/4 -translate-y-1/2 "
      />
    </section>
  );
};

export default HeroSection;