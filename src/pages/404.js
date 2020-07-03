import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Typist from "react-typist";
import Button from "../components/utils/Button";
import ThemeContext from "../styles/theme";
import _ from "lodash";

function NotFoundPage() {
  const { changeTheme, themes, isDarkMode } = useContext(ThemeContext);
  const themesList = Object.values(themes);
  return (
    <Layout>
      <SEO
        keywords={["Brian Lee", "Software Engineer", "Citadel"]}
        title="404"
      />
      <div style={{ height: "80vh" }} className="flex items-center">
        <div className="text-5xl font-bold text-center md:text-6xl">
          <Typist>
            <h1
              className="text-6xl text-red-600"
              onClick={() => {
                console.log({ isDarkMode });
                changeTheme(themesList[_.random(themesList.length - 1)]);
              }}
            >
              404!
            </h1>
            <Typist.Delay ms={500} />
            Are you lost? This page doesn&apos;t exist!
          </Typist>
        </div>
      </div>
      <div style={{ height: "20vh" }} className="text-center">
        <Button className="w-full py-2">Home</Button>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
