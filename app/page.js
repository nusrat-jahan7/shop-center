import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Products />
      <Footer />
    </main>
  );
}
