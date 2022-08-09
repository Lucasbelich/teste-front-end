import { CartContextProvider } from "../src/Context/CartContext";

import Header from "./Components/Header/Header";
import Hero from "./views/Hero/Hero";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <CartContextProvider>
        <Header />
        <Hero />
        <Footer />
      </CartContextProvider>
    </div>
  );
}

export default App;
