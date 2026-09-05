import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal — Indian Food, Tandoor & Culinary Stories from Morocco",
  description: "Stories from the Bombay Restaurant kitchens: tandoor science, clay-pot biryani traditions, and the craft behind authentic North Indian food in Marrakech & Casablanca.",
  openGraph: {
    title: "Bombay Restaurant Journal",
    description: "Tandoor science, clay-pot traditions & culinary stories from Morocco.",
    url: "https://www.bombaydar.com/blog",
    siteName: "Bombay Restaurant",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.bombaydar.com/blog",
  },
};

export default function BlogIndex() {
  return (
    <div className="location-page-wrapper">
      <section className="relative pt-32 pb-10 bg-black/40">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ name: "Journal", url: "/blog" }]} />
          <span className="text-xs uppercase tracking-widest text-gold font-bold block mt-6 mb-2">From Our Kitchens</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">The Bombay Journal</h1>
          <p className="text-lg text-sand max-w-2xl font-sans font-light">
            Craft, tradition, and stories from two decades of North Indian cooking in Morocco.
          </p>
        </div>
      </section>

      <section className="pb-20" aria-label="Articles list">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 stagger-reveal">
          {posts.map((post) => (
            <article key={post.slug} className="glass-panel rounded-2xl overflow-hidden group flex flex-col">
              <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden block">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <span className="text-xs uppercase tracking-widest text-gold font-bold">
                  {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} · {post.readMinutes} min read
                </span>
                <h2 className="font-serif text-2xl font-bold text-white group-hover:text-gold transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-sm text-sand leading-relaxed flex-1">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="text-gold font-bold text-sm uppercase tracking-wider hover:underline self-start">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
