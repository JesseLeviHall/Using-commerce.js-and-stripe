import React from "react";
import "./about.css";
import abtImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="header-content align-items-center">
        <h1 className="gradient__text mt-5">Creativity. Art. Monsters. </h1>
        <h2 className="gradient__text">
          I'm Cortney Ferrari, nice to meet you.{" "}
        </h2>
        <img
          className="img-fluid mt-3"
          src={abtImg}
          height="200"
          width="600"></img>
        <p className="col-sm-10 mx-5">
          Artistic expression is my second-nature. Since I was a child I have
          loved drawing and painting. As I grew up in New Mexico, exploring my
          imagination while learning new art forms became central to my life.
          For years, crafting home made costumes was my biggest passion. Nearly
          all my free time is spent drawing, painting, making elaborate cosplay
          get-ups or unique attire of my own imagination. <br /> <br />
          My attention turned toward a new outlet during the pandemic in 2020.
          Pottery has always been of interest to me, though with a busy
          work/life balance I never quite got to lean into it. So, when staying
          home became the new normal, at last the time came to get my hands
          dirty on a throwing wheel. For the last couple years, through trial
          and error and hard work, I have earned the skills to bring beautiful
          unique ceramics into being. <br /> <br />
          Now, it almost feels wrong to let these creations sit in my studio
          without a proper home, so here is my new website built to focus on
          sharing my ceramics. My hope is that you find something interesting to
          you, and little inspiration and imagination gets put out into the
          world.
        </p>
        <br /> <br />
      </div>
    </div>
  );
};

export default About;
