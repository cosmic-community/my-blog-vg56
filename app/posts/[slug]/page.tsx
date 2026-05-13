import { cosmic } from '@/cosmic/client'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const { objects } = await cosmic.objects
    .find({ type: 'posts' })
    .props('slug')
    .depth(0)
  return objects.map((post: { slug: string }) => ({ slug: post.slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  let post
  try {
    const { object } = await cosmic.objects
      .findOne({ type: 'posts', slug: params.slug })
      .props('id,slug,title,metadata')
      .depth(1)
    post = object
  } catch {
    notFound()
  }

  return (
    <>
      <head>
        <meta
          name="cosmic-context"
          content={JSON.stringify({ object_id: post.id, object_type: 'posts' })}
        />
      </head>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.metadata?.content && (
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.metadata.content }}
          />
        )}
      </article>
    </>
  )
}
