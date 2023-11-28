import { getPostBySlug } from "@/lib/api";
import styles from "./post-body.module.css";
import { formatTimeAgo } from "@/lib/format";
import Image from "next/image";
import type { Metadata } from "next";
import { SITE_TITLE, SITE_URL } from "@/lib/constant";

export async function generateMetadata({
  // @ts-ignore
  params,
}): Promise<Metadata | undefined> {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return;
  }
  const title = `${post.title} - ${SITE_TITLE}`;
  const description = post.excerpt; // TODO: POTENTIALLY HTML TAG IS INCLUDED
  const ogImage = post.featuredImage.node.sourceUrl ?? "";

  return {
    // metadataBase: new URL(SITE_URL),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_URL}/posts/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPostBySlug(params.slug);
  return (
    <div>
      {/* <p className="text-neutral-400">{JSON.stringify(data)}</p> */}
      <article className="container mx-auto py-6 md:py-10 spacey-4 md:space-y-10">
        <Image
          className="h-[340px] w-full object-cover"
          src={data.featuredImage.node.sourceUrl}
          width={1080}
          height={1080}
          alt={`${data.title} - Featured Image`}
        />
        <div className="flex flex-col space-y-2 md:space-y-4">
          <h1 className=" text-4xl italic font-serif">{data.title}</h1>
          <p className="italic text-neutral-600">
            {formatTimeAgo(data.date)} - {data.author.node.name}
          </p>
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <div className="space-y-6 flex flex-col border-t pt-4 md:pt-10">
          <p className="text-lg">Tags</p>
          <div className="flex flex-row">
            {data.tags.nodes.map((tag: any) => (
              <span
                key={tag.name}
                className="hover:underline cursor-pointer ml-2"
              >
                #{tag.name}{" "}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
