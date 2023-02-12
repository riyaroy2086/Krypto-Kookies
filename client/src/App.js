import {
  Market,
  Welcome,
  Services,
  Loader,
  Footer,
  Transactions,
} from "./components";
import "./App.css";
import Spline from "@splinetool/react-spline";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Welcome />
      <Services />
      <Market />
    </div>
  );
}

export default App;
