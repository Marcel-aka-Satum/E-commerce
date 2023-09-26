import React from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Slider() {
  return (
    <Container>
      <Arrow>
        <ArrowLeftIcon />
      </Arrow>
      <Arrow>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
}
