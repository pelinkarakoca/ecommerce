import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

//type SortOption = "popularity" | "price-low" | "price-high" | "newest";

export default function ProductFilter() {
  /*  const [sortOption, setSortOption] = useState<SortOption>(
    (searchParams.get("sort") as SortOption) || "popularity"
  );
 
  // Update URL when view mode changes
  const handleViewChange = (mode: ViewMode) => {
    setViewMode(mode);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("view", mode);
    setSearchParams(newParams);
  };

  // Update URL when sort option changes
  const handleSortChange = (value: SortOption) => {
    setSortOption(value);
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort", value);
    setSearchParams(newParams);
  };
*/
  const navigate = useNavigate();
  const handleFilterClick = () => {
    navigate("/filter");
  };
  const totalResults = 12;
  const viewMode = "grid";
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center my-6 gap-4">
      <div className="text-gray-600 font-medium">
        Showing all {totalResults} results
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Views:</span>
          <div className="flex border rounded-md overflow-hidden">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              className="h-9 w-9 rounded-none border-r"
              onClick={() => console.log("make it work")}
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              className="h-9 w-9 rounded-none"
              onClick={() => console.log("make it work")}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Select
            value={"popularity"}
            onValueChange={() => console.log("make it work")}
          >
            <SelectTrigger className="sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="default"
            className="bg-blue-500 hover:bg-blue-600 text-white"
            onClick={handleFilterClick}
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  );
}
