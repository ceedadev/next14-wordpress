import Link from "next/link";
import Image from "next/image";
import { CategoryButton } from "@/components/category-button";
import { formatDMY } from "@/lib/format";

export const PostPreviewGridItem = ({ post }: { post: any }) => (
  <Link
    href={`/posts/${post.slug}`}
    className="p-2 md:p-4 flex flex-col space-y-2 md:space-y-4 border"
  >
    <div className="flex flex-row justify-between items-center">
      <p className="text-xs font-serif">{formatDMY(post.date)}</p>
      <CategoryButton category="test" href="/" />
    </div>
    {/* IMAGE */}
    <div className="w-full bg-neutral-400 aspect-square relative">
      <Image
        src={post.featuredImage.node.sourceUrl ?? ""}
        alt={`${post.title} featured image`}
        fill
        objectFit="cover"
        className="object-cover grayscale"
      />
    </div>
    {/* TITLE AND EXCERPT */}
    <div className="flex flex-col">
      <p className="tracking-tight font-semibold h-12 mb-2 line-clamp-2">
        {post.title}
      </p>
      <p
        className="text-sm line-clamp-4 font-serif"
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
