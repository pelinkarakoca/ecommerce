import { Card, CardContent } from "@/components/ui/card";

type Product = {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  discountPrice: string;
  colors: string[];
};

const products: Product[] = [
  {
    id: 1,
    image: "https://placehold.co/1000x1500/cecece/blue",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    colors: ["#1E3A8A", "#4A5568", "#D97706", "#14532D"],
  },
  {
    id: 2,
    image: "https://placehold.co/1000x1500/cecece/blue",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    colors: ["#1E3A8A", "#4A5568", "#D97706", "#14532D"],
  },
  {
    id: 3,
    image: "https://placehold.co/1000x1500/cecece/blue",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    colors: ["#1E3A8A", "#4A5568", "#D97706", "#14532D"],
  },
  {
    id: 4,
    image: "https://placehold.co/1000x1500/cecece/blue",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    colors: ["#1E3A8A", "#4A5568", "#D97706", "#14532D"],
  },
  {
    id: 5,
    image: "https://placehold.co/1000x1500/cecece/blue",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    colors: ["#1E3A8A", "#4A5568", "#D97706", "#14532D"],
  },
  {
    id: 6,
    image: "https://placehold.co/1000x1500/cecece/blue",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    colors: ["#1E3A8A", "#4A5568", "#D97706", "#14532D"],
  },
  {
    id: 7,
    image: "https://placehold.co/1000x1500/cecece/blue",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    colors: ["#1E3A8A", "#4A5568", "#D97706", "#14532D"],
  },
  {
    id: 8,
    image: "https://placehold.co/1000x1500/cecece/blue",
    title: "Graphic Design",
    category: "English Department",
    price: "$16.48",
    discountPrice: "$6.48",
    colors: ["#1E3A8A", "#4A5568", "#D97706", "#14532D"],
  },
];

export default function BestsellerProducts() {
  return (
    <section className="max-w-6xl mx-auto p-6">
      <div className="text-center">
        <p className="text-gray-500">Featured Products</p>
        <h2 className="text-2xl font-bold">BESTSELLER PRODUCTS</h2>
        <p className="text-gray-500 mt-1">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-4 gap-6 mt-6 max-md:grid-cols-2">
        {products.map((product) => (
          <Card
            key={product.id}
            className="relative overflow-hidden border-none shadow-2xl"
          >
            <CardContent className="p-0">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-400 line-through">
                    {product.price}
                  </span>
                  <span className="text-green-600 font-bold">
                    {product.discountPrice}
                  </span>
                </div>
                {/* Color Options */}
                <div className="flex gap-2 mt-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

BestsellerProducts.displayName = "Bestseller";
