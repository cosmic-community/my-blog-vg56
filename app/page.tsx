import Link from 'next/link'
import { getAllPosts, getAllCategories, getMetafieldValue } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'

export default async function HomePage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
  ])

  const heroPost = posts[0]
  const restPosts = posts.slice(1, 7)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 via-orange-50 to-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Taste the World, <span className="text-brand-600">One Story at a Time</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join us on a culinary journey through hidden gems, street food stalls, and Michelin kitchens around the globe.
          </p>
          <Link href="/posts" className="inline-block bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-full transition-colors">
            Explore Stories
          </Link>
        </div>
      </section>

      {/* Featured Post */}
      {heroPost && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Story</h2>
          <Link href={`/posts/${heroPost.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              {heroPost.metadata?.featured_image && (
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-gray-100">
                  <img
                    src={`${heroPost.metadata.featured_image.imgix_url}?w=1200&h=900&fit=crop&auto=format,compress`}
                    alt={heroPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                {heroPost.metadata?.category && (
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3">
                    {heroPost.metadata.category.title}
                  </span>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors mb-4">
                  {getMetafieldValue(heroPost.metadata?.title) || heroPost.title}
                </h3>
                {heroPost.metadata?.author && (
                  <p className="text-gray-600">By {heroPost.metadata.author.title}</p>
                )}
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Latest Posts */}
      {restPosts.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Stories</h2>
            <Link href="/posts" className="text-brand-600 hover:text-brand-700 font-medium">View all →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {restPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      {categories.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(cat => (
                <Link
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  className="bg-white hover:bg-brand-600 hover:text-white text-gray-700 px-6 py-3 rounded-full font-medium border border-gray-200 transition-colors"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}