import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronRight, Clock, MessageSquare } from "lucide-react";

export default function ContentCard() {
  return (
    <Card className="max-w-md mx-auto shadow-xl rounded-2xl overflow-hidden relative p-4 border-none">
      <div className="relative">
        <div className="absolute top-4 left-10 z-10 m-auto">
          <Badge className="bg-red-500 hover:bg-red-600 text-white">NEW</Badge>
        </div>
        <div className="relative aspect-[4/3]">
          <img
            src="https://placehold.co/350x350/cecece/blue"
            alt="Card image"
            className="object-cover rounded-lg mx-auto"
          />
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex gap-4 text-blue-400">
          <span>Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Koudetat à la Maison #1 (L&apos;intégrale)
          </h2>
          <p className="text-gray-500">
            We focus on ergonomics and meeting you where you work. It&apos;s
            only a keystroke away.
          </p>
        </div>

        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>22 April 2021</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>10 comments</span>
          </div>
        </div>

        <div>
          <a
            href="#"
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors"
          >
            Learn More
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </Card>
  );
}
