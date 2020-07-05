import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import Hero from "../components/pages/index/Hero";
import Resume from "../components/pages/index/resume/Resume";
import Projects from "../components/pages/index/projects/Projects";

const HomePage = () => {
  return (
    <Layout>
      <SEO
        keywords={["Brian Lee", "Software Engineer", "Citadel"]}
        title="Brian Lee"
      />
      <Hero />
      <Resume />
      <Projects />
    </Layout>
  );
};

export default HomePage;
