import {
  Star,
  Heart,
  ShoppingCart,
  Eye,
  Clock,
  BookOpen,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HorizontalProductCard() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-xl">
        {/* Left Section with Image */}
        <div className="relative md:w-1/2 m-4">
          <Badge className="absolute top-4 left-4 bg-[#E74040] hover:bg-[#E74040]/90 text-white border-0">
            Sale
          </Badge>
          <img
            src="https://placehold.co/200x350/cecece/blue"
            alt="Black headphones on yellow background"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Heart className="w-5 h-5 text-[#252B42]" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
              <ShoppingCart className="w-5 h-5 text-[#252B42]" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Eye className="w-5 h-5 text-[#252B42]" />
            </button>
          </div>
        </div>

        {/* Right Section with Content */}
        <div className="p-8 md:w-1/2 self-start">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#23A6F0] text-sm font-bold">
              English Departement
            </h3>
            <div className="flex items-center gap-2 bg-[#252B42] text-white px-3 py-1 rounded-lg">
              <Star className="w-4 h-4 fill-[#FFCE31] stroke-[#FFCE31]" />
              <span className="font-bold">4.9</span>
            </div>
          </div>

          <h2 className="text-[#252B42] text-2xl font-bold mb-4">
            Sass Landing page solution..
          </h2>

          <p className="text-[#737373] mb-4">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>

          <div className="flex items-center gap-2 text-[#737373] mb-4">
            <TrendingUp className="w-5 h-5" />
            <span>15 Sales</span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#BDBDBD] line-through text-lg">$16.48</span>
            <span className="text-[#23856D] text-2xl font-bold">$6.48</span>
          </div>

          <div className="flex items-center gap-6 mb-6 text-[#737373]">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>22hr..</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span>64 Lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Progress</span>
            </div>
          </div>

          <Button className="w-full bg-[#23A6F0] text-white hover:bg-[#23A6F0]/90 flex items-center justify-center gap-2">
            Learn More
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
