import React from "react";
import HomeHeroCarousel from "../components/carousels/HomeHeroCarousel";
const HomePage: React.FC = () => {
  return (
    <div>
      <HomeHeroCarousel />
      <p>Discover our amazing products and deals!</p>
      <div>
        {/* Add components or content for featured products, categories, etc. */}
      </div>
    </div>
  );
};

export default HomePage;
