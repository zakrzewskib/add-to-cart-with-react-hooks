import Body from "./components/Layout/Body/Body";
import Header from "./components/Layout/Header/Header";
import CartProvider from "./components/store/CartProvider";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <div className="body-container">
        <div className="container">
          <Body />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
