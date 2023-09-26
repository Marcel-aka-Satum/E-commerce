import React from "react";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Annoucement";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Annoucement />
      <Navbar />
      <Slider />
    </>
  );
}
