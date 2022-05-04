import "./App.css";
import {
  Header,
  Navbar,
  About,
  Brands,
  Services,
  Possibilities,
} from "./components";

function App() {
  return (
    <>
      <div className="gradient__bg-1">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <About />
      <Services />
      <Possibilities />
    </>
  );
}

export default App;
