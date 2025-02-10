import { Card, CardContent } from "@/components/ui/card";

type Category = {
  title: string;
  image: string;
  colSpan: string;
  rowSpan: string;
};

const categories: Category[] = [
  {
    title: "Men",
    image: "https://placehold.co/1000x1500/cecece/blue",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    title: "Women",
    image: "https://placehold.co/1000x1500/cecece/blue",
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
  },
  {
    title: "Accessories",
    image: "https://placehold.co/1000x1500/cecece/blue",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
  {
    title: "Kids",
    image: "https://placehold.co/1000x1500/cecece/blue",
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
  },
];

export default function EditorsPick() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center">EDITOR’S PICK</h2>
      <p className="text-center text-gray-500 mt-1">
        Problems trying to resolve the conflict between
      </p>

      <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-6 max-md:grid-cols-2 max-md:grid-rows-3 auto-rows-fr">
        {categories.map((category, index) => (
          <Card
            key={index}
            className={`${category.colSpan} ${category.rowSpan} relative overflow-hidden h-full w-full border-none shadow-2xl`}
          >
            <CardContent className="p-0 h-full">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-sm font-semibold rounded-lg uppercase">
                {category.title}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
