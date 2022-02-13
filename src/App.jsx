import Body from "./components/Layout/Body/Body";
import Header from "./components/Layout/Header/Header";
import CartProvider from "./components/store/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Body />
    </CartProvider>
  );
};

export default App;
