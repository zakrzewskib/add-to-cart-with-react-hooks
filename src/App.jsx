import Body from "./components/Layout/Body/Body";
import Header from "./components/Layout/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="body-container">
        <div className="container">
          <Body />
        </div>
      </div>
    </>
  );
};

export default App;
