import About from "../components/client/main/About";
import Form from "../components/client/main/Form";
import Footer from "../components/client/global/Footer";
import Header from "../components/client/global/Header";
import Home from "../components/client/main/Home";
import Works from "../components/client/main/Works";

const Portfolio = () => {
  return (
    <div>
      <div className="bg-[url(https://images6.alphacoders.com/625/625328.jpg)] bg-center bg-cover">
        <Header />
        <Home />
      </div>
      <About />
      <Works />
      <Form />
      <Footer />
    </div>
  );
}

export default Portfolio