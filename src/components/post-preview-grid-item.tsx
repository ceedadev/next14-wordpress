import Link from "next/link";
import Image from "next/image";
import { formatDMY } from "@/lib/format";

export const PostPreviewGridItem = ({ post }: { post: any }) => {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="p-4 flex flex-col space-y-2 md:space-y-4 border"
    >
      <div className="flex flex-row justify-between items-center">
        <p className="text-xs font-serif">{formatDMY(post.date)}</p>
        <div className="rounded-full px-2 py-1 text-xs uppercase border hover:bg-neutral-800 hover:text-white cursor-pointer tracking-tighter">
          {post.categories.nodes[0].name}
        </div>
      </div>
      {/* IMAGE */}
      <div className="w-full bg-neutral-400 aspect-square relative">
        <Image
          src={post.featuredImage.node.sourceUrl ?? ""}
          alt={`${post.title} featured image`}
          fill
          sizes="300x300"
          // objectFit="cover"
          className="object-cover grayscale"
        />
      </div>
      {/* TITLE AND EXCERPT */}
      <div className="flex flex-col flex-grow">
        <p className="tracking-tight font-semibold h-12 mb-2 line-clamp-2">
          {post.title}
        </p>
        <div
          className="text-sm line-clamp-4 font-serif text-justify"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
      </div>
      {/* AUTHOR AND MORE */}
      <div className="flex flex-row justify-start space-x-4 items-center">
        <p className="text-xs font-semibold tracking-tight">
          Author{" "}
          <span className="font-light tracking-normal ">
            {post.author.node.name}
          </span>
        </p>
        <p className="text-xs font-semibold tracking-tight">
          Duration <span className="font-light tracking-normal ">5 min</span>
        </p>
      </div>
    </Link>
  );
};
