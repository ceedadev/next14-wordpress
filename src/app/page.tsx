import Link from "next/link";
import Image from "next/image";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";

dayjs.extend(relativeTime);
dayjs.extend(utc);

import { getAllPostForHome } from "@/lib/api";
import PostPreviewCard from "@/components/post-preview-card";

export default async function Home() {
  const data = await getAllPostForHome("");
  return (
    <div className="container mx-auto">
      {/* <div>{JSON.stringify(data)}</div> */}
      <div className="grid gap-4">
        {data.edges.map(({ node }: any) => (
          <PostPreviewCard node={node} />
        ))}
      </div>
    </div>
  );
}
