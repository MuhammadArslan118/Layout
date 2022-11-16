import "./App.css";
import styled from "styled-components";
import Layout from "./layout";
import Mycomponents from "./components/Mycomponents";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

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
