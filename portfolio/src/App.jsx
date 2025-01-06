import About from "./components/About";
import Contact from "./components/Contact";
import Fotter from "./components/Fotter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Skills from "./components/Skills";
import Work from "./components/Work";
const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
        {/* <Review /> */}
      </main>
      <Fotter />
    </div>
  );
};

export default App;
