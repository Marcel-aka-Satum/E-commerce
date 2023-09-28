import React from "react";
import Annoucement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const Container = styled.div``;

export default function Cart() {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      cart
      <Footer />
    </Container>
  );
}
