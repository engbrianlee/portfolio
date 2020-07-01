import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Button from "../components/utils/Button";
import ProjectHero from "../components/pages/ProjectHero";
import Card from "../components/pages/Card";
import ThemeContext from "../styles/theme";
import { RESPONSIVE_ELEMENT } from "../components/pages/Hero";

const CovidPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Layout>
      <SEO keywords={["covid", "capital one"]} title="COVID-19 Microsite" />
      <div className="global-padding">
        <ProjectHero
          projectName="COVID-19 Microsite"
          imgSrc="img/projects/covid/covid-hero.svg"
          xSpacing={12}
          imgClassnameRow="relative left-12"
          role="Product Designer"
          tools="Sketch, HTML, CSS"
          timeline="May 2020"
        >
          <p>
            The microsite is an information hub that helps customers who are
            financially impacted by COVID-19, to easily find everything they
            need.
          </p>
          <p>
            I planned and facilitated a design jam to ideate and identify
            opportunities that’ll improve the user experience. I led the designs
            and worked closely with the Content Editors and Software Engineers
            to ship the redesigned site.
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
        <div className="lg:px-24 mt-20">
          <h3 className="font-semibold uppercase">The Problem</h3>
          <h2 className="mt-3 font-serif text-3xl font-bold">
            Where we started
          </h2>
          <p className="mt-4">
            Due to COVID-19, a lot of customers are facing financial anxiety and
            we want to help them when they need it most. We’re currently using
            the microsite as a way for them to find answers and we’re directing
            them to it via various digital channels. However, we continue to
            experience a high volume of calls.
          </p>
          <p className="mt-4">
            How might we better leverage the microsite as a customer information
            hub to help customers in need of financial relief and reduce call
            volume?
          </p>
        </div>
      </div>
      <div className={`global-padding bg-${theme.color.primary} mt-20`}>
        <Card
          bgColor={theme.color.primary}
          media={
            <img
              className={`${RESPONSIVE_ELEMENT}`}
              src="img/projects/covid/old-microsite.png"
              alt="Previous microsite"
            />
          }
          xSpacing={24}
          contentRatio={6}
          rowContent={
            <>
              <h2 className="mt-3 font-serif text-3xl font-bold">Goals</h2>
              <p className="mt-4">
                After analyzing the current microsite, we identified the
                opportunities and goals for V1:
              </p>
              <ul className="mt-4">
                <li className="mt-4">
                  Improve UX to help customers easily find answers to their
                  questions before they call.
                </li>
                <li className="mt-4">
                  Prominently call out our financial relief options to increase
                  enrollment.
                </li>
                <li className="mt-4">
                  Re-visit and update existing content to better reflect
                  transparency and compassion.
                </li>
                <li className="mt-4">
                  Maintain scalability for easy updates to the site in the
                  future.{" "}
                </li>
              </ul>
            </>
          }
          colContent={
            <>
              <h2 className="mt-3 font-serif text-3xl font-bold">Goals</h2>

              <img
                className={`${RESPONSIVE_ELEMENT}`}
                src="img/projects/covid/old-microsite.png"
                alt="Previous microsite"
              />
              <p>
                After analyzing the current microsite, we identified the
                opportunities and goals for V1:
              </p>
              <ul>
                <li>
                  Improve UX to help customers easily find answers to their
                  questions before they call.
                </li>
                <li>
                  Prominently call out our financial relief options to increase
                  enrollment.
                </li>
                <li>
                  Re-visit and update existing content to better reflect
                  transparency and compassion.
                </li>
                <li>
                  Maintain scalability for easy updates to the site in the
                  future.{" "}
                </li>
              </ul>
            </>
          }
        />
      </div>
      <div className="global-padding mt-20">
        <h3 className="font-semibold uppercase">Research</h3>
        <h2 className="mt-3 font-serif text-3xl font-bold">
          How are other banks doing it?
        </h2>
        <p className="mt-4">
          Before ideating, I looked into how the Big Five (The five largest
          banks in Canada) is approaching this problem with their response to
          COVID-19. I found similarities in the way they categorize and organize
          large amounts of content on the page, and presented my findings to the
          team.
        </p>
        <img
          className={`${RESPONSIVE_ELEMENT}`}
          src="img/projects/covid/Research.png"
          alt="Research"
        />
      </div>
      <div className="global-padding mt-20">
        <h3 className="font-semibold uppercase">Ideation</h3>
        <h2 className="mt-3 font-serif text-3xl font-bold">
          Virtual journey mapping and sketching
        </h2>
        <p className="mt-4">
          Since working from home, remote sprints have become the go-to method
          for collaborative ideation. With prominently calling out the financial
          relief option being our main goal, we ideated and landed on a single
          pager with anchor links to sectioned content as the MVP.
        </p>
        <img
          className={`${RESPONSIVE_ELEMENT}`}
          src="img/projects/covid/ideation.png"
          alt="Journey map and sketches"
        />
      </div>
    </Layout>
  );
};

export default CovidPage;
