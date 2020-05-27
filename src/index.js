import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

import "./index.scss";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Skills from "./components/skills";
import Work from "./components/work";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

const AboutWebsite = lazy(() => import("./components/about-website"));

const App = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  });
  return (
    <div id='container'>
      <Suspense fallback='Loading...!'>
        <Navbar inView={inView} />
        <Home ref={ref} />
        <Skills />
        <Work />
        <About />
        <Route path='/about-website' component={AboutWebsite} />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
