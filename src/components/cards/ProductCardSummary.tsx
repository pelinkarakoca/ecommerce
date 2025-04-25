import { Button } from "@/components/ui/button";

export default function ProductCardSummary() {
  return (
    <div className="max-w-sm mx-auto shadow-xl rounded-lg overflow-hidden relative">
      {/* Product Image */}
      <div className="relative aspect-square ">
        <img
          src="https://placehold.co/200x350/cecece/blue"
          alt="%ALT%"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-[#23A6F0] text-xl font-bold">%BRAND%</h3>
        </div>
        <p className="text-[#737373] text-lg">%CONTENT%</p>

        <div className="flex items-center gap-4">
          <span className="text-[#BDBDBD] text-lg line-through">%$PRICE%</span>
          <span className="text-[#23856D] text-lg font-bold">%$PRICE%</span>
        </div>

        {/* Color Options */}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-4 h-4 rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-offset-2 hover:ring-[#23A6F0] p-0"
          >
            <span className="sr-only">Blue color option</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-4 h-4 rounded-full bg-[#23856D] hover:ring-2 hover:ring-offset-2 hover:ring-[#23856D] p-0"
          >
            <span className="sr-only">Green color option</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-4 h-4 rounded-full bg-[#E77C40] hover:ring-2 hover:ring-offset-2 hover:ring-[#E77C40] p-0"
          >
            <span className="sr-only">Orange color option</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-4 h-4 rounded-full bg-[#252B42] hover:ring-2 hover:ring-offset-2 hover:ring-[#252B42] p-0"
          >
            <span className="sr-only">Black color option</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
