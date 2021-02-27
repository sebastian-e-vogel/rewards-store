import { Header, ContainerBody, Menu, Card } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <ContainerBody>
        <Menu />
        <Card />
      </ContainerBody>
    </div>
  );
}

export default App;
