import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import { formatTimeAgo } from "@/lib/format";

export default function PostPreviewCard({ node }: any) {
  return (
    <div
      key={node.slug}
      className="flex flex-col border rounded-md p-4 space-y-4"
    >
      <h3 className="text-3xl leading-snug">
        <Link href={`/posts/${node.slug}`}>
          <div dangerouslySetInnerHTML={{ __html: node.title }} />
        </Link>
      </h3>
      <div className="" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      <div className="flex flex-row space-x-2 items-center">
        <Image
          alt={`Avatar ${node.author.node.name}`}
          width={25}
          height={25}
          src={node.author.node.avatar.url}
          className="rounded-full mr-2"
        />
        <p>{node.author.node.name}</p>
        <p className="font-light text-sm text-neutral-600">
          {formatTimeAgo(node.date)}
        </p>
      </div>
    </div>
  );
}
