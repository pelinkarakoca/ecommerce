//import { useState } from "react";
//import { useSearchParams } from "react-router-dom";
import ProductFilter from "./ProductFilter";
import ProductCardSummary from "../cards/ProductCardSummary";

/*
type ViewMode = "grid" | "list";
interface ProductListingProps {

  totalResults: number;
}
*/
export default function ProductListing() {
  /* const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  // Get view mode and sort option from URL params or use defaults
  const [viewMode, setViewMode] = useState<ViewMode>(
    (searchParams.get("view") as ViewMode) || "grid"
  );
*/
  const viewMode = "grid";
  return (
    <div className="my-10">
      {/* Product grid/list would go here */}
      <ProductFilter />
      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-4 gap-4"
            : "space-y-4"
        }
      >
        {/* This is where you would map through your products */}
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCardSummary key={index} />
        ))}
      </div>
    </div>
  );
}
