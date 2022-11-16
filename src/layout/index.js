import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const MainLayout = ({ children }) => {
  return (
    <Container sx={{ display: "flex", padding: 2 }}>
      <div style={{ width: 240, background: "green", color: "white" }}>
        <Sidebar />
      </div>
      <div style={{ width: "100%" }}>
        <Navbar />
        {children}
      </div>
      {/* <Footer /> */}
    </Container>
  );
};

export default MainLayout;
