import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeHeroCarousel() {
  const slides = [
    {
      title: "GROSERIES DELIVERY",
      description:
        "We know how large objects will act, but things on a small scale just do not act that way.",
      // image: `${process.env.NEXT_PUBLIC_VERCEL_URL}/DcoiB.png`,
      image: "https://placehold.co/1440x640/cecece/blue",
    },
    {
      title: "FRESH INGREDIENTS",
      description: "Quality ingredients delivered right to your doorstep.",
      image: "https://placehold.co/1440x640/cecece/red",
    },
    {
      title: "FAST DELIVERY",
      description: "Quick and reliable delivery service you can count on.",
      image: "https://placehold.co/1440x640/cecece/green",
    },
  ];

  return (
    <Carousel className="w-full h-full relative">
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-screen w-full overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content */}
              <Card className="relative h-full border-none bg-transparent">
                <CardContent className="flex flex-col items-center justify-center h-full text-center px-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white max-w-2xl mb-8">
                    {slide.description}
                  </p>
                  <Button
                    size="lg"
                    className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white px-8 py-6 text-lg"
                  >
                    Start Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 border-white text-white hover:bg-white/20 hover:text-white bg-transparent" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 border-white text-white hover:bg-white/20 hover:text-white bg-transparent" />
    </Carousel>
  );
}

HomeHeroCarousel.displayName = "HomeHeroCarousel";
