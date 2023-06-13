// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Hero from "./Hero";
import Product from "./Product";
import Footer from "./Footer";
import blacktopo from "../assets/blacktopo.png";
import blacktoporeg from "../assets/blacktoporeg.png";
import blacktopostretch from "../assets/blacktopostretch.png";

function App() {
  return (
    <div style={{ backgroundColor: "#070606" }}>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${blacktoporeg})`,
          height: "100%",
          width: "100%",
        }}
      >
        <Header />
        <Hero />
        <Product />
        <Footer />
      </div>
    </div>
  );
}

export default App;
