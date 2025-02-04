import React from "react";
import HomeHeroCarousel from "../components/carousels/HomeHeroCarousel";
import HorizontalProductCard from "../components/cards/HorizontalProductCard";
import ProductCard from "@/components/cards/ProductCard";
import ContentCard from "@/components/cards/ContentCard";
import HorizontalContentCard from "@/components/cards/HorizontalContentCard";

const HomePage: React.FC = () => {
  return (
    <div>
      <HomeHeroCarousel />
      <HorizontalProductCard />
      <ProductCard />
      <ContentCard />
      <HorizontalContentCard />
      <p>Discover our amazing products and deals!</p>
      <div>
        {/* Add components or content for featured products, categories, etc. */}
      </div>
    </div>
  );
};

export default HomePage;
