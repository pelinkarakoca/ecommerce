"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Slide = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  background: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: "Vita Classic Product",
    description:
      "We know how large objects will act. We know how objects will act.",
    price: "$16.48",
    image: "https://placehold.co/1440x640/cecece/blue",
    background: "bg-green-700",
  },
  {
    id: 2,
    title: "Minimalist Essentials",
    description:
      "Discover timeless pieces that fit your lifestyle effortlessly.",
    price: "$24.99",
    image: "https://placehold.co/1440x640/cecece/blue",
    background: "bg-blue-600",
  },
  {
    id: 3,
    title: "Modern Urban Wear",
    description: "Stay trendy with our exclusive modern urban collection.",
    price: "$32.50",
    image: "https://placehold.co/1440x640/cecece/blue",
    background: "bg-gray-800",
  },
];

export default function ProductSlider() {
  return (
    <section className="w-full overflow-hidden">
      <Carousel className="relative">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="w-full">
              <div
                className={`relative items-center flex ${slide.background} p-6 min-h-[600px]`}
              >
                <div className="flex w-full h-full justify-between">
                  {/* Left Side (Text Content) */}
                  <div className="w-1/2 text-white space-y-4 px-6 lg:px-16">
                    <p className="text-sm uppercase">Summer 2020</p>
                    <h2 className="text-3xl font-bold">{slide.title}</h2>
                    <p className="text-sm">{slide.description}</p>
                    <div className="flex flex-col items-start gap-4">
                      <span className="text-xl font-semibold">
                        {slide.price}
                      </span>
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        ADD TO CART
                      </Button>
                    </div>
                  </div>

                  {/* Right Side (Image) */}
                  <div className="w-1/2">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-none h-12 w-12 text-white hover:bg-gray-200" />
        <CarouselNext className="absolute  h-12 w-12 right-4 top-1/2 transform -translate-y-1/2 p-2  bg-none text-white hover:bg-gray-200" />
      </Carousel>
    </section>
  );
}
