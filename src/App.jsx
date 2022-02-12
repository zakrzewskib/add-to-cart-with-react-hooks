import Body from "./components/Layout/Body/Body";
import Header from "./components/Layout/Header/Header";

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
      </div>
      <div className="body-container">
        <div className="container">
          <Body />
        </div>
      </div>
    </div>
  );
};

export default App;
