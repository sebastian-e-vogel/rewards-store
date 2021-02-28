import { Header, ContainerBody, Menu } from "./components";

import { UserProvider, ProductProvider } from "./contexts";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProductProvider>
          <Header />
          <ContainerBody>
            <Menu />
          </ContainerBody>
        </ProductProvider>
      </UserProvider>
    </div>
  );
}

export default App;
