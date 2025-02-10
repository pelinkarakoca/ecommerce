import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
  ArrowRight,
  Clock,
  BookOpen,
  BarChartIcon as ChartBar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductCard() {
  return (
    <div className="max-w-sm mx-auto shadow-xl rounded-lg overflow-hidden relative p-4">
      {/* Sale Badge */}
      <Badge className="absolute z-3 top-6 left-6 bg-[#E74040] text-white hover:bg-[#E74040]/90">
        Sale
      </Badge>

      {/* Product Image */}
      <div className="relative aspect-square mb-6 rounded-lg ">
        <img
          src="https://placehold.co/400x350/cecece/blue"
          alt="Black Headphones"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Action Buttons */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
          <Button
            variant="secondary"
            size="icon"
            className="w-12 h-12 rounded-full bg-white hover:bg-gray-100 transition-colors"
          >
            <Heart className="w-5 h-5" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="w-12 h-12 rounded-full bg-white hover:bg-gray-100 transition-colors"
          >
            <ShoppingCart className="w-5 h-5 " />
            <span className="sr-only">Add to cart</span>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="w-12 h-12 rounded-full bg-white hover:bg-gray-100 transition-colors"
          >
            <Eye className="w-5 h-5 text-[#252B42]" />
            <span className="sr-only">Quick view</span>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[#23A6F0] text-xl font-bold">
            English Department
          </h3>
          <div className="flex items-center gap-2 bg-[#252B42] text-white px-3 py-1 rounded-full">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-medium">4.9</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#252B42]">Graphic Design</h2>

        <p className="text-[#737373] text-lg">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>

        <div className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-[#737373]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span className="text-[#737373]">15 Sales</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[#BDBDBD] text-2xl line-through">$16.48</span>
          <span className="text-[#23856D] text-2xl font-bold">$6.48</span>
        </div>

        {/* Color Options */}
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-6 h-6 rounded-full bg-[#23A6F0] hover:ring-2 hover:ring-offset-2 hover:ring-[#23A6F0] p-0"
          >
            <span className="sr-only">Blue color option</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-6 h-6 rounded-full bg-[#23856D] hover:ring-2 hover:ring-offset-2 hover:ring-[#23856D] p-0"
          >
            <span className="sr-only">Green color option</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-6 h-6 rounded-full bg-[#E77C40] hover:ring-2 hover:ring-offset-2 hover:ring-[#E77C40] p-0"
          >
            <span className="sr-only">Orange color option</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-6 h-6 rounded-full bg-[#252B42] hover:ring-2 hover:ring-offset-2 hover:ring-[#252B42] p-0"
          >
            <span className="sr-only">Black color option</span>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-[#737373]">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 hover:bg-black/5"
          >
            <Clock className="w-5 h-5" />
            <span>22hr 30min</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 hover:bg-black/5"
          >
            <BookOpen className="w-5 h-5" />
            <span>64 Lessons</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 hover:bg-black/5"
          >
            <ChartBar className="w-5 h-5" />
            <span>Progress</span>
          </Button>
        </div>

        {/* CTA Button */}
        <Button className="w-full bg-[#23A6F0] text-white hover:bg-[#23A6F0]/90 flex items-center justify-center gap-2">
          Learn More
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
