import React from "react";
import Timeline from "./Timeline";
import Button from "../../utils/Button";

const Resume = () => (
  <div id="resume" className="py-24 space-y-10">
    <h2 className="pb-4 text-4xl font-semibold text-center underline">
      Resume
    </h2>
    <Timeline />
    <Button className="block w-full p-2 sm:w-auto sm:mx-auto">
      Download Resume
    </Button>
  </div>
);

export default Resume;
