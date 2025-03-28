// import React from "react";
// import Squares from "../components/Squares";
// import Proj1 from "../assets/SkillImages/Project1.png";
// import { div } from "framer-motion/client";

// const Projects = () => {
//   return (
//     <div className="relative min-h-screen w-full flex flex-col">
//       <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black">
//         <Squares
//           speed={0.5}
//           squareSize={40}
//           direction="diagonal"
//           color="white"
//         />
//       </div>

//       <div className="relative z-10 pb-20 px-4 sm:px-6">
//         <div className="flex flex-col md:gap-8 gap-6 items-center ">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans text-white font-bold text-center mt-6 mb-4">Projects</h1>
//           {/* projet 1 */}
//           <div className="flex  min-h-[380px] mx-auto border border-amber-50 p-10 rounded-2xl bg-black ">
//             {/* left */}
//             <div className=" flex items-center w-1/3">
//               <div class="container">
//                 <svg
//                   class="svg-icon"
//                   height="100"
//                   preserveAspectRatio="xMidYMid meet"
//                   viewBox="0 0 100 100"
//                   width="100"
//                   x="0"
//                   xmlns="http://www.w3.org/2000/svg"
//                   y="0"
//                 >
//                   <path d="M62.11,53.93c22.582-3.125,22.304-23.471,18.152-29.929-4.166-6.444-10.36-2.153-10.36-2.153v-4.166H30.099v4.166s-6.194-4.291-10.36,2.153c-4.152,6.458-4.43,26.804,18.152,29.929l5.236,7.777v8.249s-.944,4.597-4.833,4.986c-3.903,.389-7.791,4.028-7.791,7.374h38.997c0-3.347-3.889-6.986-7.791-7.374-3.889-.389-4.833-4.986-4.833-4.986v-8.249l5.236-7.777Zm7.388-24.818s2.833-3.097,5.111-1.347c2.292,1.75,2.292,15.86-8.999,18.138l3.889-16.791Zm-44.108-1.347c2.278-1.75,5.111,1.347,5.111,1.347l3.889,16.791c-11.291-2.278-11.291-16.388-8.999-18.138Z"></path>
//                 </svg>
//                 <div class="container__star">
//                   <div class="star-eight"></div>
//                 </div>

//                 <div></div>
//               </div>
//             </div>
//             {/* right */}
//             <div className="flex flex-col justify-between w-2/3 relative ">
//               <h1 className="text-white font-sans text-3xl font-bold">
//                 Prescripto
//               </h1>
//               <p className="text-white">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
//                 voluptas aliquid commodi unde exercitationem odit at vero
//                 perspiciatis quas quae.
//               </p>
//               <div className="flex gap-10">
//                 <button>
//                   <div class="button-icong">
//                     <div class="icong">
//                       <svg viewBox="0 0 24 24">
//                         <path
//                           fill="#222229"
//                           d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div class="cubeg">
//                       <span class="sideg frontg">get source code</span>
//                       <span class="sideg topg">on github</span>
//                     </div>
//                   </div>
//                 </button>

//                 <button>
//                   <a class="btn" href="#">
//                     Preview
//                   </a>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* ?project2 */}
//           <div className="flex flex-row-reverse max-w-[83%]  min-h-[380px] mx-auto border border-amber-50 p-10 rounded-2xl bg-black ">
//             {/* left */}
//             <div className=" flex items-center w-1/3">
//               {/* <!-- From Uiverse.io by Saad3092003 -->  */}
//               <div class="bg-black py-5 d-flex justify-content-center align-items-center ">
//                 <div class="obj2">
//                   <div class="objchild2">
//                     <span class="inn1"></span>
//                     <span class="inn2"></span>
//                     <span class="inn3"></span>
//                     <span class="inn4"></span>
//                     <span class="inn5"></span>
//                     <span class="inn6"></span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* right */}
//             <div className="flex flex-col justify-between w-2/3 relative ">
//               <h1 className="text-white font-sans text-3xl font-bold">
//                 Prescripto
//               </h1>
//               <p className="text-white">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
//                 voluptas aliquid commodi unde exercitationem odit at vero
//                 perspiciatis quas quae.
//               </p>
//               <div className="flex gap-10">
//                 <button>
//                   <div class="button-icong">
//                     <div class="icong">
//                       <svg viewBox="0 0 24 24">
//                         <path
//                           fill="#222229"
//                           d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div class="cubeg">
//                       <span class="sideg frontg">get source code</span>
//                       <span class="sideg topg">on github</span>
//                     </div>
//                   </div>
//                 </button>

//                 <button>
//                   <a class="btn" href="#">
//                     Preview
//                   </a>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* project 3 */}
//           <div className="flex  min-h-[380px] mx-auto border border-amber-50 p-10 rounded-2xl bg-black ">
//             {/* left */}
//             <div className=" flex items-center w-1/3">
//               <div class="cube-container2">
//                 <div class="cube2">
//                   <div class="face front">Front</div>
//                   <div class="face back">Back</div>
//                   <div class="face right">Right</div>
//                   <div class="face left">Left</div>
//                   <div class="face top">Top</div>
//                   <div class="face bottom">Bottom</div>
//                 </div>
//               </div>
//             </div>
//             {/* right */}
//             <div className="flex flex-col justify-between w-2/3 relative ">
//               <h1 className="text-white font-sans text-3xl font-bold">
//                 Prescripto
//               </h1>
//               <p className="text-white">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
//                 voluptas aliquid commodi unde exercitationem odit at vero
//                 perspiciatis quas quae.
//               </p>
//               <div className="flex gap-10">
//                 <button>
//                   <div class="button-icong">
//                     <div class="icong">
//                       <svg viewBox="0 0 24 24">
//                         <path
//                           fill="#222229"
//                           d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div class="cubeg">
//                       <span class="sideg frontg">get source code</span>
//                       <span class="sideg topg">on github</span>
//                     </div>
//                   </div>
//                 </button>

//                 <button>
//                   <a class="btn" href="#">
//                     Preview
//                   </a>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* project4 */}
//           <div className="flex  flex-row-reverse min-h-[380px] mx-auto border border-amber-50 p-10 rounded-2xl bg-black overflow-hidden relative gap-50 ">
//             {/* left */}
//             <div className=" flex items-center w-1/3 relative  ">
//               {/* <div className="container4">
//                 <div className="cube4">
//                   <div style={{ "--x": -1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 0, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                 </div>
//                 <div className="cube4">
//                   <div style={{ "--x": -1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 0, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                 </div>
//                 <div className="cube4">
//                   <div style={{ "--x": -1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 0, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                 </div>
//               </div> */}
//               <div className="container4">
//                 {/* Cube 1 - Main Center Cube */}
//                 <div className="cube4">
//                   <div style={{ "--x": -1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 0, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                 </div>

//                 {/* Cube 2 - Offset Back Left */}
//                 <div className="cube4 cube-2">
//                   <div style={{ "--x": -1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 0, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                 </div>

//                 {/* Cube 3 - Offset Front Right */}
//                 <div className="cube4 cube-3">
//                   <div style={{ "--x": -1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 0, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                   <div style={{ "--x": 1, "--y": 0 }}>
//                     <span style={{ "--i": 3 }}></span>
//                     <span style={{ "--i": 2 }}></span>
//                     <span style={{ "--i": 1 }}></span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* right */}
//             <div className="flex flex-col justify-between w-2/3 relative ">
//               <h1 className="text-white font-sans text-3xl font-bold">
//                 Prescripto
//               </h1>
//               <p className="text-white">
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
//                 voluptas aliquid commodi unde exercitationem odit at vero
//                 perspiciatis quas quae.
//               </p>
//               <div className="flex gap-10">
//                 <button>
//                   <div class="button-icong">
//                     <div class="icong">
//                       <svg viewBox="0 0 24 24">
//                         <path
//                           fill="#222229"
//                           d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
//                         ></path>
//                       </svg>
//                     </div>
//                     <div class="cubeg">
//                       <span class="sideg frontg">get source code</span>
//                       <span class="sideg topg">on github</span>
//                     </div>
//                   </div>
//                 </button>

//                 <button>
//                   <a class="btn" href="#">
//                     Preview
//                   </a>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import Squares from "../components/Squares";
import Proj1 from "../assets/SkillImages/Project1.png";
import { div } from "framer-motion/client";

const Projects = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <div className="fixed inset-0 -z-10 h-full w-full overflow-hidden bg-black">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          color="white"
        />
      </div>

      <div className="relative z-10 pb-20 px-4 sm:px-6">
        <div className="flex flex-col md:gap-8 gap-6 items-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans text-white font-bold text-center mt-6 mb-4">
            Projects
          </h1>

          {/* Project 1 */}
          <div className="flex flex-col lg:flex-row w-full max-w-6xl min-h-[380px] mx-auto border border-amber-50 p-6 md:p-10 rounded-2xl bg-black">
            {/* left */}
            <div className="flex items-center justify-center w-full lg:w-1/3 mb-6 lg:mb-0">
              <div className="container">
                <svg
                  className="svg-icon"
                  height="100"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 100 100"
                  width="100"
                  x="0"
                  xmlns="http://www.w3.org/2000/svg"
                  y="0"
                >
                  <path d="M62.11,53.93c22.582-3.125,22.304-23.471,18.152-29.929-4.166-6.444-10.36-2.153-10.36-2.153v-4.166H30.099v4.166s-6.194-4.291-10.36,2.153c-4.152,6.458-4.43,26.804,18.152,29.929l5.236,7.777v8.249s-.944,4.597-4.833,4.986c-3.903,.389-7.791,4.028-7.791,7.374h38.997c0-3.347-3.889-6.986-7.791-7.374-3.889-.389-4.833-4.986-4.833-4.986v-8.249l5.236-7.777Zm7.388-24.818s2.833-3.097,5.111-1.347c2.292,1.75,2.292,15.86-8.999,18.138l3.889-16.791Zm-44.108-1.347c2.278-1.75,5.111,1.347,5.111,1.347l3.889,16.791c-11.291-2.278-11.291-16.388-8.999-18.138Z"></path>
                </svg>
                <div className="container__star">
                  <div className="star-eight"></div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col justify-between w-full lg:w-2/3 relative">
              <h1 className="text-white font-sans text-2xl md:text-3xl font-bold">
                Prescripto
              </h1>
              <p className="text-white my-4 md:my-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                voluptas aliquid commodi unde exercitationem odit at vero
                perspiciatis quas quae.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-10">
                <button className="w-full sm:w-auto">
                  <div className="button-icong">
                    <div className="icong">
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="#222229"
                          d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="cubeg">
                      <span className="sideg frontg">get source code</span>
                      <span className="sideg topg">on github</span>
                    </div>
                  </div>
                </button>

                <button className="w-full sm:w-auto">
                  <a className="btn" href="#">
                    Preview
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col lg:flex-row-reverse w-full max-w-6xl min-h-[380px] mx-auto border border-amber-50 p-6 md:p-10 rounded-2xl bg-black">
            {/* left */}
            <div className="flex items-center justify-center w-full lg:w-1/3 mb-6 lg:mb-0">
              <div className="bg-black py-5 d-flex justify-content-center align-items-center">
                <div className="obj2">
                  <div className="objchild2">
                    <span className="inn1"></span>
                    <span className="inn2"></span>
                    <span className="inn3"></span>
                    <span className="inn4"></span>
                    <span className="inn5"></span>
                    <span className="inn6"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col justify-between w-full lg:w-2/3 relative">
              <h1 className="text-white font-sans text-2xl md:text-3xl font-bold">
                Prescripto
              </h1>
              <p className="text-white my-4 md:my-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                voluptas aliquid commodi unde exercitationem odit at vero
                perspiciatis quas quae.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-10">
                <button className="w-full sm:w-auto">
                  <div className="button-icong">
                    <div className="icong">
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="#222229"
                          d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="cubeg">
                      <span className="sideg frontg">get source code</span>
                      <span className="sideg topg">on github</span>
                    </div>
                  </div>
                </button>

                <button className="w-full sm:w-auto">
                  <a className="btn" href="#">
                    Preview
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col lg:flex-row w-full max-w-6xl min-h-[380px] mx-auto border border-amber-50 p-6 md:p-10 rounded-2xl bg-black">
            {/* left */}
            <div className="flex items-center justify-center w-full lg:w-1/3 mb-6 lg:mb-0">
              <div className="cube-container2">
                <div className="cube2">
                  <div className="face front">Front</div>
                  <div className="face back">Back</div>
                  <div className="face right">Right</div>
                  <div className="face left">Left</div>
                  <div className="face top">Top</div>
                  <div className="face bottom">Bottom</div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col justify-between w-full lg:w-2/3 relative">
              <h1 className="text-white font-sans text-2xl md:text-3xl font-bold">
                Prescripto
              </h1>
              <p className="text-white my-4 md:my-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                voluptas aliquid commodi unde exercitationem odit at vero
                perspiciatis quas quae.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-10">
                <button className="w-full sm:w-auto">
                  <div className="button-icong">
                    <div className="icong">
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="#222229"
                          d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="cubeg">
                      <span className="sideg frontg">get source code</span>
                      <span className="sideg topg">on github</span>
                    </div>
                  </div>
                </button>

                <button className="w-full sm:w-auto">
                  <a className="btn" href="#">
                    Preview
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className=" hidden lg:flex  flex-col lg:flex-row-reverse w-full max-w-6xl min-h-[380px] mx-auto border border-amber-50 p-6 md:p-10 rounded-2xl bg-black ">
            {/* left */}
            <div className="flex items-center justify-center w-full lg:w-1/3 mb-6 lg:mb-0">
              <div class="card">
                <div class="pentagon1"></div>
                <div class="pentagon2"></div>
                <div class="pentagon3"></div>
                <div class="pentagon4"></div>
                <div class="pentagon5"></div>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-col justify-between w-full lg:w-2/3 relative">
              <h1 className="text-white font-sans text-2xl md:text-3xl font-bold">
                Prescripto
              </h1>
              <p className="text-white my-4 md:my-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                voluptas aliquid commodi unde exercitationem odit at vero
                perspiciatis quas quae.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-10">
                <button className="w-full sm:w-auto">
                  <div className="button-icong">
                    <div className="icong">
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="#222229"
                          d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="cubeg">
                      <span className="sideg frontg">get source code</span>
                      <span className="sideg topg">on github</span>
                    </div>
                  </div>
                </button>

                <button className="w-full sm:w-auto">
                  <a className="btn" href="#">
                    Preview
                  </a>
                </button>
              </div>
            </div>
          </div>

          <button className="text-white">More..</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
