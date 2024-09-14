import Image from "next/image";
import Header from "./components/header/Header";
import TabComponent from "./components/tabComponent/TabComponent";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/heroSection/HeroSection";
import ProductList from "./components/productList/ProductList";

export default function Home() {
  return (
    <main>
      <Header />
      <TabComponent />
      <HeroSection />
      <ProductList />
      <Footer />
    </main>
  );
}
