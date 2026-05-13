import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">🍜</span>
          <span className="text-xl font-bold text-gray-900">My Blog</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-gray-700 hover:text-brand-600 font-medium">Home</Link>
          <Link href="/posts" className="text-gray-700 hover:text-brand-600 font-medium">Posts</Link>
          <Link href="/authors" className="text-gray-700 hover:text-brand-600 font-medium">Authors</Link>
          <Link href="/categories" className="text-gray-700 hover:text-brand-600 font-medium">Categories</Link>
        </nav>
      </div>
    </header>
  )
}