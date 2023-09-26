import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  display: flex;
`;

export default function Annoucement() {
  return <Container>Super deal! Free shipping on orders over $50!</Container>;
}
