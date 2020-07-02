import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout/Layout";
import Timeline from "../components/pages/index/Timeline";
import Hero from "../components/pages/index/Hero";

const HomePage = () => {
  return (
    <Layout>
      <SEO
        keywords={["Brian Lee", "Software Engineer", "Citadel"]}
        title="Home"
      />
      <Hero />
      <div id="resume" className="pt-24">
        <h2 className="pb-4 text-4xl font-semibold text-center underline">
          Resume
        </h2>
      </div>
      <Timeline />

      {/* <div
        id="projects"
        className="mt-12 mb-12 space-y-40 global-padding xl:text-lg"
      >
        <h2 className="mt-12 font-serif text-4xl font-semibold text-center xl:text-5xl">
          Selected Projects
        </h2>
        <ProjectCard
          projectCompany="Capital One"
          projectName="COVID-19 Microsite"
          projectDescription="Redesigned page to improve usability and navigation of COVID-19 related information to help customers who are financially impacted by the pandemic."
          projectLink="/covid"
          imgSrc="img/home/covid-thumbnail.svg"
        />

        <ProjectCard
          projectCompany="Passion Project"
          projectName="TravelHer"
          projectDescription="Researched and designed a streamlined travel safety app for solo female travellers."
          projectLink="/travelher"
          imgSrc="img/home/travelher-thumbnail.svg"
          reverse
        />
        <ProjectCard
          projectCompany="Passion Project"
          projectName="TravelHer"
          projectDescription="Researched and designed a streamlined travel safety app for solo female travellers."
          projectLink="/travelher"
          imgSrc="img/home/travelher-thumbnail.svg"
        />
      </div> */}
    </Layout>
  );
};

export default HomePage;
