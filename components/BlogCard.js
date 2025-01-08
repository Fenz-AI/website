import Link from 'next/link'

export default function BlogCard({ title, description, date, readTime, slug }) {
  return (
    <Link href={`/blog/${slug}`} className="block">
      <article className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground mb-4">
            {description}
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
            <span className="mx-2">•</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  )
} 