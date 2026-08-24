import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.bombaydar.com/blog/${post.slug}`,
      siteName: "Bombay Restaurant",
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
    alternates: {
      canonical: `https://www.bombaydar.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="location-page-wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            image: `https://www.bombaydar.com${post.image}`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              '@type': 'Person',
              name: 'Chef Surender Kumar Thakur',
              jobTitle: 'Owner & Head Chef',
              worksFor: { '@type': 'Organization', name: 'Bombay Restaurant', url: 'https://www.bombaydar.com' },
            },
            publisher: {
              '@type': 'Organization',
              name: 'Bombay Restaurant Morocco',
              url: 'https://www.bombaydar.com',
            },
            mainEntityOfPage: `https://www.bombaydar.com/blog/${post.slug}`,
          }),
        }}
      />

      <section className="relative pt-32 pb-10 bg-black/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs items={[{ name: "Journal", url: "/blog" }, { name: post.title.slice(0, 40) + "…", url: `/blog/${post.slug}` }]} />
          <span className="text-xs uppercase tracking-widest text-gold font-bold block mt-6 mb-2">
            {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · {post.readMinutes} min read
          </span>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">{post.title}</h1>
        </div>
      </section>

      <article className="container mx-auto px-4 max-w-3xl pb-20">
        <figure className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8 glass-panel">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        </figure>

        <div className="space-y-5">
          {post.body.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2 key={i} className="font-serif text-2xl font-bold text-white pt-4">{block.text}</h2>
              );
            }
            if (block.type === 'ul') {
              return (
                <ul key={i} className="list-disc pl-6 space-y-2 text-base text-sand leading-relaxed">
                  {block.items.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-base text-sand leading-relaxed">{block.text}</p>
            );
          })}
        </div>

        <div className="mt-12 p-8 glass-panel rounded-2xl text-center reveal-on-scroll up">
          <h2 className="font-serif text-xl font-bold text-white mb-2">Hungry after all that?</h2>
          <p className="text-sm text-sand mb-5">Taste it at any of our three locations in Marrakech &amp; Casablanca.</p>
          <Link href="/locations" className="btn-primary">Find Your Table</Link>
        </div>
      </article>
    </div>
  );
}
