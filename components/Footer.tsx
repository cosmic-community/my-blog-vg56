export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} My Blog. Food travel stories from around the world.</p>
      </div>
    </footer>
  )
}