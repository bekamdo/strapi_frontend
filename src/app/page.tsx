import Image from "next/image";
import Slider from "./components/Slider/Slider";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Categories from "./components/Categories/Categories";
import Contact from "./components/Contact/Contact";

export default function Home() {
  const paraFeatured =
    "Enhance your daily living with our range of assisted living devices. From easy-to-use pill organizers to adaptive eating utensils and reachers, these appliances are thoughtfully designed to support individuals with limited mobility, empowering them to maintain independence and dignity. At our eCommerce site, we prioritize the quality, effectiveness, and reliability of all our medical appliances";
  const paraTrend =
    "Experience the future of healthcare with telemedicine solutions. These devices enable remote consultations with healthcare professionals, allowing patients to access medical advice and support from the comfort of their homes. From remote monitoring devices to telehealth platforms, telemedicine is transforming the way we receive healthcare services.";
  return (
    <div className="flex flex-col justify-items-center">
      <Slider />
      <FeaturedProducts type="featured" para={paraFeatured} />
      <Categories />
      <FeaturedProducts type="trending" para={paraTrend} />
      <Contact />
    </div>
  );
}
