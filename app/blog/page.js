import BlogCard from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog | Fenz AI',
  description: 'Latest updates, articles, and insights from Fenz AI',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            readTime={post.readTime}
            slug={post.slug}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  )
} 