type Category = {
  title: string;
  items: string;
  image: string;
};

const categories: Category[] = Array(5).fill({
  title: "CLOTHS",
  items: "5 Items",
  image: "https://fakeimg.pl/300x400",
});

export default function CategorySection() {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-12">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative w-[200px] h-[250px] overflow-hidden rounded-lg shadow-md group"
        >
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white font-semibold">
            <h2 className="text-lg tracking-wide">{category.title}</h2>
            <p className="text-sm">{category.items}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
