import React from "react";
import CircularGallery from "../components/CircularGallery";
import { div } from "framer-motion/client";
import Image1 from "../assets/SkillImages/icons8-c-48 (1).png";
import Squares from "../components/Squares";

const Skills = () => {
  const customItems = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
      text: "C",
    },
    {
      image:
        "https://nordicapis.com/wp-content/uploads/A-Short-Guide-What-Types-of-Apps-Can-Be-Built-With-React.png",
      text: "ReactJS",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVS5wOrF1fXHLGU-HDaTvt1LZG0ZF2aRmIEw&s",
      text: "HTML",
    },
    {
      image:
        "https://images.prismic.io/keep-it/cbe401fa-ce4b-4644-985f-e2bb42b909ef_28_WhyC%2B%2B.png?auto=compress,format&rect=0,0,1200,1200&w=800&h=800",
      text: "C++",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      text: "JavaScript",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/051/336/396/non_2x/node-js-transparent-logo-free-png.png",
      text: "NodeJS",
    },
    { image: "https://img.icons8.com/fluent/512/css3.png", text: "CSS" },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKW1VDYViWnnT77L7cP2XTnO7EeXDab6msg37gDXBRoQga4Iq0AcgDHBBbolyCa_qPGfI&usqp=CAU",
      text: "Tailwind",
    },
    {
      image:
        "https://cdn.prod.website-files.com/609bc2fa29b6d5b7f44a2785/647743f51bc76753239a8bc6_expressjs-logo.webp",
      text: "ExpressJs",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
      text: "Github",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP6fPE_tJwJgs7iKrmtzCrKXn-iBCe2cBhc62LGY9ILOgDRkT6ALWLFlGLEq59kYOX5GA&usqp=CAU",
      text: "MongoDB",
    },
    {
      image:
        "https://store-images.s-microsoft.com/image/apps.29355.49e39246-7603-4df4-af38-57fd1df6d0e9.3b2e051e-d49e-42c8-8d4a-0f7090b4308c.6f1b683b-b69f-4f22-a102-08f098b0c36e.png",
      text: "Postman",
    },
  ];
  return (
  //   <div className="flex flex-col justify-center relative bg-black  h-screen w-full overflow-hidden ">
  //     <div className="w-full h-screen">
  //       <Squares
  //         speed={0.5}
  //         squareSize={40}
  //         direction="diagonal"
  //         borderColor="#ffff"
  //         hoverFillColor="#222"
  //       />
  //     </div>

  //     <div className="absolute top-0 w-full p-6">
  //       <div className="text-center text-5xl text-white">My Skills</div>
  //       {/* <div className=" h-[500px] " style={{ position: "relative" }}>
  //       <CircularGallery items={customItems} bend={0} textColor="#ffff" borderRadius={0.05}  />
  //     </div> */}
  //       <div
  //         className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
  //         style={{ position: "relative" }}
  //       >
  //         <CircularGallery
  //           items={customItems}
  //           bend={0}
  //           textColor="#ffff"
  //           borderRadius={0.05}
  //         />
  //       </div>
  //     </div>
  //   </div>
  
  <div id="Skills" className="flex flex-col justify-center relative bg-black h-screen w-full overflow-hidden">
      {/* Background squares - unchanged from your original */}
      <div className="w-full h-screen absolute top-0 left-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#ffff"
          hoverFillColor="#222"
        />
      </div>

      {/* Content container - now properly centered for mobile */}
      <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center p-6">
        <div className="text-center  text-white mb-8 font-sans text-6xl font-bold">My Skills</div>
        
        {/* Gallery container with responsive centering */}
        <div 
          className="relative w-full"
          style={{
            height: 'calc(100vh - 200px)', // Dynamic height based on viewport
            maxHeight: '500px',
            minHeight: '300px'
          }}
        >
          <CircularGallery
            items={customItems}
            bend={0}
            textColor="#ffff"
            borderRadius={0.05}
            
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
