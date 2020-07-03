import React from "react";
import Timeline from "./Timeline";
import Button from "../../../utils/Button";
import { Link } from "gatsby";

const Resume = () => (
  <div id="resume" className="py-24 space-y-10">
    <h2 className="pb-4 text-4xl font-semibold text-center underline">
      Resume
    </h2>
    <Timeline />
    <Button
      className="block max-w-xs p-2 mx-auto text-center"
      as={Link}
      to="/resume"
    >
      Download Resume
    </Button>
  </div>
);

export default Resume;
