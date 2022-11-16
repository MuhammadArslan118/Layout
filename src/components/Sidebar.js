import React from "react";

import { styled } from "@mui/system";

const Container = styled("div")({
  position: "sticky",
  height: "600px",
  top: 0,
});

const Sidebar = () => {
  return <Container>Sidebar</Container>;
};

export default Sidebar;
