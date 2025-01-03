import Link from "next/link";
import Image from "next/image";
import Card from "@/components/BlogCard";

const blogPosts = [
  {
    id: "1",
    title: "Blog 1",
    excerpt: "Learn the basics of AI Agent in this article.",
    date: "Jan 2, 2024",
  },
  {
    id: "2",
    title: "Blog 2",
    excerpt: "Understand prompts in AI Agent with examples.",
    date: "Jan 5, 2024",
  },
  {
    id: "3",
    title: "Blog 3",
    excerpt: "Explore data fetching methods in AI Agent.",
    date: "Jan 7, 2024",
  },
  {
    id: "4",
    title: "Blog 4",
    excerpt: "Learn the basics of AI Agent in this article.",
    date: "Jan 2, 2024",
  },
  {
    id: "5",
    title: "Blog 5",
    excerpt: "Understand prompts in AI Agent with examples.",
    date: "Jan 5, 2024",
  },
  {
    id: "6",
    title: "Blog 6",
    excerpt: "Explore data fetching methods in AI Agent.",
    date: "Jan 7, 2024",
  },
];

const blog = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          Weclome To Our Blogs
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              link={`/blog/${post.id}`} // Dynamic link to the blog post
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default blog;
