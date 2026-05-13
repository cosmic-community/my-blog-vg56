import Link from 'next/link'
import { getAllCategories, getMetafieldValue } from '@/lib/cosmic'

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Categories</h1>
        <p className="text-lg text-gray-600">Explore stories by topic.</p>
      </div>
      {categories.length === 0 ? (
        <p className="text-gray-500">No categories yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => {
            const description = getMetafieldValue(cat.metadata?.description)
            return (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">🏷️</div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-600 mb-2">{cat.title}</h3>
                {description && <p className="text-gray-600 text-sm">{description}</p>}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}