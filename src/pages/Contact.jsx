import React from "react";
// import Form from '../components/Form'
// import MagnetLines from "../components/MagnetLines";
import LetterGlitch from "../components/LetterGlich";
import ContactImg from "../assets/SkillImages/contact.png";

const Contact = () => {
  return (
    <div id="Contact" className="flex items-center flex-col gap-10 pb-10">
      <h1 className="text-white text-6xl font-bold font-sans align-">
        Contact Me
      </h1>
      <div className="flex justify-center mx-auto">
        <div className=" p-5 lg:p-0 ">
          {/* form */}
          <div className="form-container">
            <form
              className="form"
              action="https://formspree.io/f/mldjwnag"
              method="POST"
            >
              <div className="form-group">
                <label >Name</label>
                <input required  type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required name="email" id="email" type="email" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Contact No.</label>
                <input required type="text"  />
              </div>
              <div className="form-group">
                <label htmlFor="textarea">Message</label>
                <textarea
                  required
                  cols="50"
                  rows="10"
                  id="textarea"
                  name="textarea"
                />
              </div>

              <button type="submit" className="form-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* animation */}
        <div className="text-white">
          <div className="">
            <img className="h-134.5 hidden lg:block" src={ContactImg} alt="" />
          </div>
        </div>
      </div>
      {/* social media */}
      <div>
        <div class="outer-footer ">
          <div class="footer">
            <div class="footer-heading text-white font-sans font-bold text-4xl lg:text-6xl">
              Follow Me on
            </div>
            <div class="button-list">
              <a
                href="https://www.linkedin.com/in/paras-rajain-15404a259/"
                target="_blank"
              >
                <button class="LinkedinBtn" onclick="">
                  <span class="svgContainer">
                    <svg
                      viewBox="0 0 24 24"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                    </svg>
                  </span>
                  <span class="BG"></span>
                </button>
              </a>
              {/* 
            <!-- button 2 -->

            <!-- /* From Uiverse.io by vinodjangid07 */}
              <a
                href="https://www.instagram.com/jaat_paras_rajain/"
                target="_blank"
              >
                <button class="Btn">
                  <span class="svgContainer">
                    <svg
                      fill="white"
                      class="svgIcon"
                      viewBox="0 0 448 512"
                      height="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                    </svg>
                  </span>
                  <span class="BG"></span>
                </button>
              </a>

              {/* <!-- /button 3 -->
            <!-- /* From Uiverse.io by vinodjangid07 */
              /* From Uiverse.io by vinodjangid07 */}
              <a
                href="https://github.com/parasrajain?tab=repositories"
                target="_blank"
              >
                <button class="Btn3">
                  <span class="svgContainer3">
                    <svg fill="white" viewBox="0 0 496 512" height="1.6em">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </span>
                  <span class="BG3"></span>
                </button>
              </a>

              {/* <!-- button 4 -->
            <!-- /* From Uiverse.io by vinodjangid07 */}
              <button class="Btn4">
                <span class="svgContainer4">
                  <svg
                    viewBox="0 0 320 512"
                    height="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svgIcon"
                    fill="white"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                  </svg>
                </span>
                <span class="BG4"></span>
              </button>

              {/* <!-- button 5 -->
            <!-- /* From Uiverse.io by vinodjangid07 */}
              <button class="Btn5">
                <span class="svgContainer5">
                  <svg
                    viewBox="0 0 576 512"
                    fill="white"
                    height="1.6em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"></path>
                  </svg>
                </span>
                <span class="BG5"></span>
              </button>
            </div>
            <p className="text-white">Copyright @Paras Rajain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
