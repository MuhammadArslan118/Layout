import React from "react";
import { styled } from "@mui/system";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Container = styled("div")({
  display: "flex",
  width: "100%",
});

const MainLayout = ({ children }) => {
  return (
    <Container sx={{ display: "flex" }}>
      <div style={{ width: 240, background: "green", color: "white" }}>
        <Sidebar />
      </div>
      <div style={{ width: "100%" }}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </div>
    </Container>
  );
};

export default MainLayout;
