import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Typist from "react-typist";
import Button from "../components/utils/Button";
import ThemeContext from "../styles/theme";
import _ from "lodash";
import { Link } from "gatsby";

function NotFoundPage() {
  const { changeTheme, themes, currentTheme } = useContext(ThemeContext);
  const themesList = Object.values(themes);
  return (
    <Layout>
      <SEO
        keywords={["Brian Lee", "Software Engineer", "Citadel"]}
        title="404"
      />
      <div
        style={{ height: "80vh" }}
        className="flex items-center justify-center text-5xl font-bold text-center md:text-6xl"
      >
        <Typist>
          <h1 className="text-6xl text-red-600">404!</h1>
          <Typist.Delay ms={500} />
          Are you lost? This page doesn&apos;t exist!
        </Typist>
      </div>
      <div
        style={{ height: "20vh" }}
        className="flex flex-col items-center space-y-3 text-center"
      >
        <Button
          inverted
          className="inline-block w-full max-w-md py-2"
          as={Link}
          to="/"
        >
          Home
        </Button>
        <Button
          className="inline-block w-full max-w-md py-2"
          onClick={() => {
            const otherThemes = Object.values(themes).filter(
              (theme) => theme != currentTheme
            );
            changeTheme(otherThemes[_.random(otherThemes.length - 1)]);
          }}
        >
          Discover Some Secrets
        </Button>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
