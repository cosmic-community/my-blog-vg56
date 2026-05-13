// app/authors/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getAuthorBySlug, getPostsByAuthor, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)
  const bio = getMetafieldValue(author.metadata?.bio)

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-br from-brand-50 to-amber-50 rounded-2xl p-8 md:p-12 mb-12 text-center">
        {author.metadata?.profile_photo ? (
          <img
            src={`${author.metadata.profile_photo.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
            alt={author.title}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-white shadow-lg"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-5xl mx-auto mb-6">
            👨‍🍳
          </div>
        )}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">{author.title}</h1>
        {bio && <p className="text-lg text-gray-700 max-w-2xl mx-auto">{bio}</p>}
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-6">Stories by {author.title}</h2>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts by this author yet.</p>
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