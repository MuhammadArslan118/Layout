import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  position: sticky;
  background: black;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Navbar = () => {
  return <Container>Navbar</Container>;
};

export default Navbar;
