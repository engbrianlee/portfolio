import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import styled, { keyframes } from "styled-components";

const bobAnimation = keyframes`{
  50% {
    transform: translateY(7px);
  }
  100% {
    transform: translateY(0px);
  }
}`;

const BobAnimation = styled.div.attrs((props) => ({
  duration: props.duration || "1.5s",
}))`
  display: inline-block;
  animation: ${(props) => props.duration} ease-in-out infinite ${bobAnimation};
`;

const Hero = () => {
  return (
    <>
      <div style={{ height: "80vh" }} className="flex items-center">
        <h1 className="text-5xl font-bold text-center md:text-6xl">
          <Typist>
            Hi! <Typist.Delay ms={500} />
            I&apos;m Brian, Software Engineer @ Citadel
          </Typist>
        </h1>
      </div>
      <div style={{ height: "20vh" }}>
        <a href="#resume" className="block w-16 h-16 mx-auto focusable">
          <BobAnimation>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </BobAnimation>
        </a>
      </div>
    </>
  );
};
export default Hero;
