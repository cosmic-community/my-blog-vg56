import { getAllPosts } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">All Stories</h1>
        <p className="text-lg text-gray-600">Every culinary adventure, in one place.</p>
      </div>
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts available yet.</p>
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