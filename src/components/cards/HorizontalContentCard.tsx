import { ChevronRight, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function HorizontalContentCard() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-[#E74040] text-white px-3 py-1 rounded-md font-bold">
                NEW
              </span>
            </div>
            <img
              src="https://placehold.co/350x350/cecece/blue"
              alt="Black headphones on yellow background"
              className="object-cover m-auto w-full h-full"
            />
          </div>

          <div className="flex-1 p-6 md:p-8">
            <nav className="flex gap-6 mb-6">
              <Link
                to="#"
                className="text-[#8EC2F2] hover:text-[#23A6F0] transition-colors"
              >
                Google
              </Link>
              <Link
                to="#"
                className="text-[#8EC2F2] hover:text-[#23A6F0] transition-colors"
              >
                Trending
              </Link>
              <Link
                to="#"
                className="text-[#8EC2F2] hover:text-[#23A6F0] transition-colors"
              >
                New
              </Link>
            </nav>

            <h2 className="text-[#252B42] text-2xl md:text-3xl font-bold mb-4">
              Koudetat à la Maison #1 (L&apos;intégrale)
            </h2>

            <p className="text-[#737373] text-lg mb-6">
              We focus on ergonomics and meeting you where you work. It&apos;s
              only a keystroke away.
            </p>

            <div className="flex items-center gap-8 mb-6">
              <div className="flex items-center text-[#737373]">
                <time dateTime="2021-04-22">22 April 2021</time>
              </div>
              <div className="flex items-center gap-2 text-[#737373]">
                <BarChart2 className="w-5 h-5" />
                <span>10 comments</span>
              </div>
            </div>

            <Link
              to="#"
              className="inline-flex items-center text-[#23A6F0] hover:text-[#23A6F0]/80 transition-colors font-semibold"
            >
              Learn More
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
