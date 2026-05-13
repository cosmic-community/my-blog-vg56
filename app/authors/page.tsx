import Link from 'next/link'
import { getAllAuthors, getMetafieldValue } from '@/lib/cosmic'

export default async function AuthorsPage() {
  const authors = await getAllAuthors()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Authors</h1>
        <p className="text-lg text-gray-600">Meet the storytellers behind the flavors.</p>
      </div>
      {authors.length === 0 ? (
        <p className="text-gray-500">No authors yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map(author => (
            <Link
              key={author.id}
              href={`/authors/${author.slug}`}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
            >
              {author.metadata?.profile_photo ? (
                <img
                  src={`${author.metadata.profile_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                  alt={author.title}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-3xl mx-auto mb-4">
                  👨‍🍳
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600">{author.title}</h3>
              {author.metadata?.bio && (
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{getMetafieldValue(author.metadata.bio)}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}