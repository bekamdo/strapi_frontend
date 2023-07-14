import Image from "next/image";
import Slider from "./components/Slider/Slider";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center">
      <Slider />
      <FeaturedProducts type="featured" />
      <Categories />
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
}
