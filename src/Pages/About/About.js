import React from "react";
import headerImage from "../../Assets/bannar-min.jpg";
import HeaderAll from "../../Components/HeaderAll";
import AboutData from "../../Data/AboutData";
import AboutBody from "./AboutBody";

export default function About() {
  return (
    <>
      <HeaderAll imageUrl={headerImage}>আমাদের পরিচয়</HeaderAll>

      <div className="container">
        {AboutData.map((about) => {
          return <AboutBody key={about.id} {...about} />;
        })}
      </div>
    </>
  );
}
