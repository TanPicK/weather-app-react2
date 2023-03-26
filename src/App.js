import "./App.css";
import Search from "./Search";
import City from "./City";
import Description from "./Description";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <div className="App">
        <div className="Weather-app">
          <Search />
          <City />
          <Description />
        </div>
        <Footer />
      </div>
    </div>
  );
}
