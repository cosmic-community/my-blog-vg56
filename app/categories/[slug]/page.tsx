// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getCategoryBySlug, getPostsByCategory, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3">Category</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{category.title}</h1>
        {description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>}
      </div>
      {posts.length === 0 ? (
        <p className="text-gray-500 text-center">No posts in this category yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}