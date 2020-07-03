import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import Hero from "../components/pages/index/Hero";
import Resume from "../components/pages/index/Resume";
import Projects from "../components/pages/index/Projects";

const HomePage = () => {
  return (
    <Layout>
      <SEO
        keywords={["Brian Lee", "Software Engineer", "Citadel"]}
        title="Home"
      />
      <Hero />
      <Resume />
      <Projects />
    </Layout>
  );
};

export default HomePage;
