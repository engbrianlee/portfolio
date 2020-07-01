import React from "react";
import SEO from "../components/SEO";
import ProjectHero from "../components/pages/ProjectHero";
import Layout from "../components/layout/Layout";
import Button from "../components/utils/Button";

const TravelherPage = () => {
  return (
    <Layout>
      <SEO keywords={["travelher"]} title="TravelHer" />
      <div className="global-padding">
        <ProjectHero
          projectName="TravelHer"
          imgSrc="img/projects/travelher/travelher-hero.svg"
          xSpacing={12}
          role="Product Designer"
          tools="Sketch, HTML, CSS"
          timeline="May 2020"
        >
          <p>
            TravelHer aims to provide a streamlined platform where women can
            easily identify safe travel destinations through a community review
            and rating system.
          </p>
          <p>
            This was an idea created by my friends at the SheHacks III
            hackathon, and won Best Hack for Social Good. I was given permission
            to expand on it to practice my design thinking.
          </p>
          <div className="w-full">
            <Button
              className="inline-block w-full py-3 text-center"
              as="a"
              href="#"
            >
              View Solution
            </Button>
          </div>
        </ProjectHero>
      </div>
      <div className="w-full h-screen"></div>
    </Layout>
  );
};

export default TravelherPage;
