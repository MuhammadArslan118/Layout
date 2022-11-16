import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const StickyContainer = styled.div`
  display: flex;
  width: 100%;
`;
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

const Top = styled.div`
  height: 600px;
  display: flex;
  justify-content: space-around;
  width: 300px;
  position: sticky;
  top: 60px;
  border-right: 1px solid red;
  border-bottom: 1px solid red;
`;
const TopRight = styled.div`
  height: 100vh;
  display: flex;
`;

const StickySidebar = () => {
  return (
    <Top>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <p>Sticky sidebar</p>
        <p>Sticky sidebar</p>
      </div>
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
