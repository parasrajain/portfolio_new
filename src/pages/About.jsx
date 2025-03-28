// import React from "react";
// import Squares from "../components/Squares";
// import ScrollVelocity from "../components/ScrollVelocity";
// // import Stack from "../components/Stack";
// import Img1 from "../assets/SkillImages/codechef.jpeg";
// import Img2 from "../assets/SkillImages/gfg.png";
// import Img3 from "../assets/SkillImages/codeforces.jpeg";
// import Img4 from "../assets/SkillImages/leetcode.png";

// const About = () => {
//   const images = [
//     { id: 1, img: Img1 },
//     { id: 2, img: Img2 },
//     { id: 3, img: Img3 },
//     { id: 4, img: Img4 },
//   ];
//   return (
//     <div className="flex flex-col justify-center relative bg-black h-screen w-full overflow-hidden">
//       <div className="w-full h-screen absolute top-0 left-0">
//         <Squares
//           speed={0.5}
//           squareSize={40}
//           direction="diagonal"
//           borderColor="#ffff"
//           hoverFillColor="#222"
//         />
//       </div>
//       {/* Content container */}
//       <div className="absolute top-0 w-full h-full flex flex-col items-center  p-6 text-white justify-between">
//         <div className="font-sans text-6xl font-bold">About Me</div>
//         <div className="font-sans text-2xl ">
//           Results-driven Computer Science student at IIIT Bhagalpur with a
//           strong foundation in full-stack development (MERN stack) and
//           competitive programming. Experienced in building scalable web
//           applications like Prescripto (doctor-patient appointment system) and
//           Pokedex App, with expertise in REST APIs, authentication systems, and
//           performance optimization. Passionate about solving complex problems,
//           with 350+ coding challenges solved and leadership experience as
//           Kabaddi Club Secretary. Committed to delivering efficient,
//           user-centric solutions with measurable impact.
//         </div>

//         {/* <ScrollVelocity
//           texts={["Coder", "Full Stack Developer"]}
//           velocity={50}
//           className="custom-scroll-text"
//         />
//         <ScrollVelocity
//           texts={["Web Developer", "Programmer"]}
//           velocity={50}
//           className="custom-scroll-text"
//         /> */}

//         <div className="font-sans text-5xl font-bold">Coding Profiles</div>
//         <div className="flex gap-20">
//           <div className="">
//             <button>
//               <img className="rounded-full w-35" src={Img1} alt="" />
//             </button>
//           </div>
//           <div>
//           <button>
//               <img className="rounded-full w-35" src={Img2} alt="" />
//             </button>
//           </div>
//           <div>
//           <button>
//               <img className="rounded-full w-35" src={Img3} alt="" />
//             </button>
//           </div>
//           <div>
//           <button>
//               <img className="rounded-full w-35" src={Img4} alt="" />
//             </button>
//           </div>
          
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import Squares from "../components/Squares";
import Img1 from "../assets/SkillImages/codechef.jpeg";
import Img2 from "../assets/SkillImages/gfg.png";
import Img3 from "../assets/SkillImages/codeforces.jpeg";
import Img4 from "../assets/SkillImages/leetcode.png";

const About = () => {
  const images = [
    { id: 1, img: Img1 },
    { id: 2, img: Img2 },
    { id: 3, img: Img3 },
    { id: 4, img: Img4 },
  ];

  return (
    <div id="About" className="relative bg-black min-h-screen w-full overflow-hidden flex flex-col ">
      {/* Background squares */}
      <div className="w-full h-screen absolute top-0 left-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#ffff"
          hoverFillColor="#222"
        />
      </div>

      {/* Content container - Centered for mobile */}
      <div className="relative flex-1 flex flex-col items-center justify-center p-4 sm:p-6 text-white overflow-y-auto">
        {/* About Me section */}
        <div className="w-full max-w-4xl text-center mb-4 sm:mb-8">
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
            About Me
          </h1>
          <p className="font-sans text-sm mt-15 sm:text-base md:text-lg lg:text-xl leading-relaxed md:mt-10">
            Results-driven Computer Science student at IIIT Bhagalpur with a
            strong foundation in full-stack development (MERN stack) and
            competitive programming. Experienced in building scalable web
            applications like Prescripto (doctor-patient appointment system) and
            Pokedex App, with expertise in REST APIs, authentication systems, and
            performance optimization. Passionate about solving complex problems,
            with 550+ coding challenges solved and leadership experience as
            Kabaddi Club Secretary. Committed to delivering efficient,
            user-centric solutions with measurable impact.
          </p>
        </div>

        {/* Coding Profiles section - 2x2 grid for mobile */}
        <div className="w-full max-w-4xl text-center">
          <h2 className="font-sans text-2xl mt-10 sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 md:mt-10">
            Coding Profiles
          </h2>
          <div className="grid grid-cols-2 gap-6 w-fit mx-auto sm:flex sm:flex-wrap sm:justify-center sm:gap-6 md:gap-8 lg:gap-20 mt-10 md:mt-10">
            {images.map((image) => (
              <button 
                key={image.id} 
                className="hover:scale-110 transition-transform duration-200"
              >
                <img 
                  className="rounded-full w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-cover border-2 border-white"
                  src={image.img} 
                  alt={`Coding Profile ${image.id}`} 
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;