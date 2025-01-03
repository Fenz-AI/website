import Link from "next/link";
import Image from "next/image";
import Card from "@/components/BlogCard";

const blogPosts = [
  {
    id: "1",
    title: "Introduction to Next.js",
    excerpt: "Learn the basics of Next.js in this article.",
    date: "Jan 2, 2024",
  },
  {
    id: "2",
    title: "Next.js Routing",
    excerpt: "Understand routing in Next.js with examples.",
    date: "Jan 5, 2024",
  },
  {
    id: "3",
    title: "Next.js Data Fetching",
    excerpt: "Explore data fetching methods in Next.js.",
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
