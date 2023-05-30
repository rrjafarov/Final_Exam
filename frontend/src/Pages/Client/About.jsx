import React from "react";
import Header from "../../components/Header/Header";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <div className="container">
        <h1 className="pagename">This is About Page</h1>
        <Link style={{ border: "1px solid black" , marginTop: "20px"}}>Go Home</Link>
      </div>
    </div>
  );
};

export default About;
