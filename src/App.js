import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="app">
      <h1 class="text-3xl bg-green-700 font-bold underline">Hello world!</h1>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
