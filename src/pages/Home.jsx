import React from "react";
import Particles from "../components/Particles";
import ProfileImage from "../assets/ProfileImage.jpg";
import Magnet from "../components/Magnet";
import Squares from "../components/Squares";
import "../App.css";
import RotatingText from "../components/RotatingText";
import TiltedCard from "../components/TitleCard";

const Home = () => {
  return (
    <div
      className="bg-black relative h-screen w-full overflow-hidden"
      id="Home"
    >
      {/* Background squares */}
      <div className="w-full h-screen">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      {/* Content container - Reversed order on mobile */}
      <div className="flex flex-col-reverse lg:flex-row absolute top-0 w-full h-full p-2 sm:p-5 gap-28 lg:gap-0 ">
        {/* Left side - Text content (now comes after image in DOM) */}
        <div className="lg:min-w-[60%] w-full lg:w-auto p-2 sm:p-5 flex items-center justify-center">
          <div className="flex mb-19 gap-8 sm:gap-10 flex-col text-3xl sm:text-4xl md:text-5xl mx-auto w-full md:w-[80%]">
            <div className="text-white text-center lg:text-left font-sans text-5xl font-bold lg:text-6xl">
              I'm Paras Rajain
            </div>
            <div className="text-white font-sans  font-bold">
              <RotatingText
                texts={[
                  "Backend Developer",
                  "Coder",
                  "Full Stack Developer",
                  "Web Developer",
                  "Programmer",
                ]}
                mainClassName="px-2 sm:px-3 md:px-4 bg-cyan-300 text-black overflow-hidden py-1 sm:py-2 justify-center rounded-lg w-full"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1 sm:pb-2"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </div>
            {/* <button  className="btn rounded-sm max-w-[200px] mx-auto lg:mx-0 lg:h-[60px]">
              <i className="animation font-sans  font-bold"></i>My Resume
              <i className="animation"></i>
            </button> */}
            <a
              href="https://drive.google.com/file/d/1K7mD8Jwd_YZVMY53VS_8tIEiDju9ctog/view?usp=sharing" // Replace with your actual resume path
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block" // Preserves your button styling
            >
              <button className="btn rounded-sm max-w-[200px] mx-auto lg:mx-0 lg:h-[60px]">
                <i className="animation font-sans font-bold"></i>My Resume
                <i className="animation"></i>
              </button>
            </a>
          </div>
        </div>

        {/* Right side - Image (now appears first on mobile) */}
        <div className="lg:min-w-[40%] w-full p-2 sm:p-5 flex items-center justify-center">
          <div className="max-w-[70%] sm:max-w-[60%] lg:max-w-[50%] mx-auto">
            <div className="relative mx-auto">
              <Magnet padding={20} disabled={false} magnetStrength={5}>
                <div className="bg-white rounded-sm ">
                  {/* <img 
                  className="rounded-sm p-2 sm:p-3.5 w-full h-auto" 
                  src={ProfileImage} 
                  alt="Profile" 
                /> */}
                  <TiltedCard
                    imageSrc={ProfileImage}
                    altText="Paras Rajain"
                    captionText="Paras Rajain"
                    containerHeight="380px"
                    containerWidth="300px"
                    imageHeight="380px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={<p className="tilted-card-demo-text"></p>}
                  />
                  <img
                    className="zigzag-icon"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-bf6be.appspot.com/o/zigzags.png?alt=media&token=48c9c028-b893-457a-8394-fb2a7aa31824"
                    alt=""
                  />
                  <img
                    className="cube-icon"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-bf6be.appspot.com/o/cube.png?alt=media&token=97f742ad-eec8-4298-a1c1-e82827ade604"
                    alt=""
                  />
                  <img
                    className="dot-icon"
                    src="https://parasrajain.netlify.app/images/dots.png"
                    alt=""
                  />
                </div>
              </Magnet>
            </div>
            {/* <Magnet padding={20} disabled={false} magnetStrength={5}>
              <div className="bg-white rounded-sm relative">
                <img 
                  className="rounded-sm p-2 sm:p-3.5 w-full h-auto" 
                  src={ProfileImage} 
                  alt="Profile" 
                />
                <img
                  className="zigzag-icon"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-bf6be.appspot.com/o/zigzags.png?alt=media&token=48c9c028-b893-457a-8394-fb2a7aa31824"
                  alt=""
                />
                <img
                  className="cube-icon"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-bf6be.appspot.com/o/cube.png?alt=media&token=97f742ad-eec8-4298-a1c1-e82827ade604"
                  alt=""
                />
                <img
                  className="dot-icon"
                  src="https://parasrajain.netlify.app/images/dots.png"
                  alt=""
                />
              </div>
            </Magnet> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
