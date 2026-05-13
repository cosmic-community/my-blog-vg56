import Link from 'next/link'
import { Post } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function PostCard({ post }: { post: Post }) {
  const featuredImage = post.metadata?.featured_image
  const author = post.metadata?.author
  const category = post.metadata?.category
  const title = getMetafieldValue(post.metadata?.title) || post.title

  return (
    <Link href={`/posts/${post.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
      {featuredImage && (
        <div className="aspect-[16/10] overflow-hidden bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=500&fit=crop&auto=format,compress`}
            alt={title}
            width={400}
            height={250}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {category && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-600 mb-2">
            {category.title}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-2">
          {title}
        </h3>
        {author && (
          <p className="text-sm text-gray-500">By {author.title}</p>
        )}
      </div>
    </Link>
  )
}