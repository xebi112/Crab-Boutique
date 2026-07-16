import Navbar from "./Navbar";
import Hero from "./Hero";
import Menu from "./HomeMenu";
import Footer from "./Footer";
import Aboutpage from "./About";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutpage />
      <Menu />
      <Footer />
    </>
  );
}

export default Home;
