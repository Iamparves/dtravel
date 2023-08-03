import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header grid min-h-screen bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="grid h-full w-full grid-rows-[auto_1fr] bg-gradient-to-r from-[#010521a6] to-[#010521a6]/60">
        <Navbar />
        <Hero />
      </div>
    </header>
  );
};

export default Header;
