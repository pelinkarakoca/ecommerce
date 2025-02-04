import ContentCard from "@/components/cards/ContentCard";

const posts = [
  {
    id: 1,
    image: "https://placehold.co/350x350/cecece/blue",
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    tags: ["Google", "Trending", "New"],
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 2,
    image: "https://placehold.co/350x350/ff6699/white",
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    tags: ["Google", "Trending", "New"],
    date: "22 April 2021",
    comments: 10,
  },
  {
    id: 3,
    image: "https://placehold.co/350x350/66ccff/white",
    title: "Loudest à la Madison #1 (L'intégral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    tags: ["Google", "Trending", "New"],
    date: "22 April 2021",
    comments: 10,
  },
];

export default function FeaturedPostSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center space-y-4">
        <p className="text-blue-500 font-medium">Practice Advice</p>
        <h2 className="text-3xl font-bold text-gray-900">Featured Posts</h2>
        <p className="text-gray-500">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-8 max-md:grid-cols-1">
        {posts.map((post) => (
          <ContentCard key={post.id} />
        ))}
      </div>
    </section>
  );
}
