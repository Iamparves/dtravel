import About from "./components/About";
import Cities from "./components/Cities";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Partner from "./components/Partner";
import Service from "./components/Service";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F3F4F6]">
        <Service />
        <About />
        <Featured />
        <Partner />
        <Cities />
        <Testimonials />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default App;
