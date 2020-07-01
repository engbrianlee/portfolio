import React, { useContext } from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import Hero from "../components/pages/Hero";
import ThemeContext from "../styles/theme";
import Underline from "../components/utils/Underline";
import Button from "../components/utils/Button";
import { Link } from "gatsby";

function NotFoundPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <Layout footerBgColor={theme.color.primary}>
      <SEO title="404: Not found" />
      <div className={`bg-${theme.color.primary} global-padding`}>
        <Hero
          bgColor={theme.color.primary}
          contentRatio={7}
          colHeight="85vh"
          rowHeight="100vh"
          imgSrc="/img/home/me-illustration-2.svg"
          imgClassnameRow="w-64"
          imgClassnameCol="h-64"
          header={
            <div className="mt-8">
              This page{" "}
              <Underline hover={false} strokeWidth={5}>
                <span>doesn&apos;t exist!</span>
              </Underline>
            </div>
          }
        >
          <Button
            className="inline-block w-full px-6 py-3 mb-10 text-center"
            as={Link}
            to="/"
          >
            Home
          </Button>
        </Hero>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
