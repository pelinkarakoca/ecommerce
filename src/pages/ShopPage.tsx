import BreadcrumbSection from "@/components/sections/BreadcrumbSection";
import CategorySection from "@/components/sections/CategorySection";
import ProductListing from "@/components/sections/ProductListing";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ShopPage() {
  return (
    <>
      <div className="bg-gray-100 md:-mx-20 ">
        <BreadcrumbSection />
        <CategorySection />
      </div>
      <ProductListing />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
