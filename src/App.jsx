import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <section className="bg-color">
        <div className="container">
          <Navbar />
          <Hero />
        </div>
      </section>

      <main>
        <Skills />
        <Services />
      </main>

      <section className="bg-color2">
        <Footer />
      </section>
    </>
  );
}

export default App;