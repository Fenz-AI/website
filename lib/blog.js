import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'public/blog')

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents)

  // Process image paths to be relative to the post's directory
  const processedContent = content.replace(
    /!\[([^\]]*)\]\((?!http)([^)]+)\)/g,
    (match, alt, src) => {
      // If the image path is absolute or a URL, leave it unchanged
      if (src.startsWith('/') || src.startsWith('http')) {
        return match
      }
      // Otherwise, make it relative to the post's directory
      return `![${alt}](/blog/${slug}/${src})`
    }
  )

  // Convert markdown to HTML
  const htmlContent = remark()
    .use(remarkGfm)
    .use(html, { 
      sanitize: false,
      handlers: {
        heading: (h, node) => {
          const id = node.children[0].value.toLowerCase().replace(/\s+/g, '-')
          return {
            type: 'element',
            tagName: `h${node.depth}`,
            properties: { 
              id,
              className: `text-${4-node.depth}xl font-bold my-4` // Larger font size based on heading level
            },
            children: h.all(node)
          }
        }
      }
    })
    .processSync(processedContent)
    .toString()

  return {
    slug,
    content: htmlContent,
    ...data
  }
}

export function getAllPosts() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const { data } = matter(fileContents)

      // Combine the data with the slug
      return {
        slug,
        ...data
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}