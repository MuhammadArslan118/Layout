import React from "react";
import { styled } from "@mui/system";
import { Box } from "@mui/material";

const Container = styled("div")({
  display: "flex",
  width: "100%",
});
const StickyContainer = styled("div")({
  display: "flex",
});
const Top = styled("div")({
  height: "93vh",
  display: "flex",
  justifyContent: "space-around",
  width: "300px",
  position: "sticky",
  top: "50px",
  borderRight: "1px solid red",
  borderBottom: "1px solid red",
  borderTop: "1px solid red",
});
const TopRight = styled("div")({
  height: "100vh",
  display: "flex",
});

const Mycomponents = () => {
  return (
    <Container sx={{ display: "flex" }}>
      <StickyContainer>
        <StickySidebar />
      </StickyContainer>
      <div style={{ width: "100%" }}>
        <Content />
      </div>
      {/* <Footer /> */}
    </Container>
  );
};

export default Mycomponents;

const StickySidebar = () => {
  return (
    <Top>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <p>Sticky sidebar</p>
        <p>Sticky sidebar</p>
      </Box>
    </Top>
  );
};

const Content = () => {
  return (
    <TopRight>
      <p>This content</p>
    </TopRight>
  );
};
