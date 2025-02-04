import React from "react";
import HomeHeroCarousel from "../components/carousels/HomeHeroCarousel";
import ProductCarousel from "@/components/carousels/ProductCarousel";
import EditorsPick from "@/components/sections/EditorsPick";
import Bestseller from "@/components/sections/BestsellerSection";
import FeaturedPostSection from "@/components/sections/FeaturedPostSection";

const HomePage: React.FC = () => {
  return (
    <div>
      <HomeHeroCarousel />
      <EditorsPick />
      <Bestseller />
      <ProductCarousel />
      <FeaturedPostSection />
      <div>
        {/* Add components or content for featured products, categories, etc. */}
      </div>
    </div>
  );
};

export default HomePage;
