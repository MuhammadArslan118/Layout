import "./App.css";
import { styled } from "@mui/system";
import Layout from "./layout";
import Mycomponents from "./components/Mycomponents";

const AppContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  return (
    <AppContainer>
      <Layout>
        <Mycomponents />
      </Layout>
    </AppContainer>
  );
}

export default App;
