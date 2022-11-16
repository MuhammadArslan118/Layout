import React from "react";
import { styled } from "@mui/system";

const Container = styled("div")({
  height: "50px",
  position: "sticky",
  background: "black",
  color: "#fff",
  top: 0,
  zIndex: 100,
});

const Navbar = () => {
  return <Container>Navbar</Container>;
};

export default Navbar;
