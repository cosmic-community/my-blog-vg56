// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getMetafieldValue } from '@/lib/cosmic'

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const title = getMetafieldValue(post.metadata?.title) || post.title
  const content = getMetafieldValue(post.metadata?.content)
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category
  const tags = getMetafieldValue(post.metadata?.tags)

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {category && (
        <Link href={`/categories/${category.slug}`} className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 hover:text-brand-700 mb-4">
          {category.title}
        </Link>
      )}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">{title}</h1>

      {author && (
        <div className="flex items-center gap-3 mb-8">
          {author.metadata?.profile_photo && (
            <img
              src={`${author.metadata.profile_photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
              alt={author.title}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <div>
            <Link href={`/authors/${author.slug}`} className="font-medium text-gray-900 hover:text-brand-600">
              {author.title}
            </Link>
          </div>
        </div>
      )}

      {featuredImage && (
        <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=1600&h=900&fit=crop&auto=format,compress`}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {content && (
        <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-brand-600"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}

      {tags && (
        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Tags:</span> {tags}
          </p>
        </div>
      )}
    </article>
  )
}