import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
        <section id="home"><Home /></section> <br />
        <section id="about"><About /></section> <br />
        <section id="projects"><Projects /></section> <br />
        <section id="contact"><Contact /></section>
      </div>
      <Footer />
    </>
  );
}

export default App;