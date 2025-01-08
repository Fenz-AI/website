import { getPostData, getAllPostSlugs } from '@/lib/blog'
import { notFound } from 'next/navigation'

export const revalidate = 3600 // Revalidate every hour

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths
}

export async function generateMetadata({ params }) {
  const post = getPostData(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Fenz AI Blog`,
    description: post.description,
  }
}

export default function BlogPost({ params }) {
  const post = getPostData(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center text-sm text-muted-foreground mb-8">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span className="mx-2">•</span>
        <span>{post.readTime} min read</span>
        {post.tags && post.tags.length > 0 && (
          <>
            <span className="mx-2">•</span>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-sm bg-muted px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      <div 
        className="prose prose-lg dark:prose-invert max-w-none [&>p]:mb-6 [&>h2]:mt-12 [&>h3]:mt-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
} 