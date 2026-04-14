import { insights } from "../data";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function InsightDetail({ params }) {
  const post = insights.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <article className="px-6 max-w-3xl mx-auto pt-24 pb-16">

      {/* Title */}
      <h1 className="text-3xl font-semibold">
        {post.title}
      </h1>

      {/* Meta */}
      <div className="mt-2 text-sm text-gray-400">
        {post.tag} · {post.date}
      </div>

      {/* Content */}
      <div className="mt-10 space-y-6">
        {post.content.map((block, i) => {
          switch (block.type) {
            case "heading":
              return (
                <h2 key={i} className="text-xl font-semibold text-white mt-8">
                  {block.text}
                </h2>
              );

            case "paragraph":
              return (
                <p key={i} className="text-gray-400 leading-relaxed">
                  {block.text}
                </p>
              );

            case "image":
              return (
                <div key={i} className="my-6">
                  <Image
                    src={block.src}
                    alt={block.alt}
                    width={800}
                    height={400}
                    className="rounded-lg border border-white/10"
                  />
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    {block.alt}
                  </p>
                </div>
              );

            case "list":
              return (
                <ul key={i} className="list-disc ml-5 text-gray-400 space-y-1">
                  {block.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              );

            default:
              return null;
          }
        })}
      </div>

    </article>
  );
}