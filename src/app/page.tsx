import { getAllPostForHome } from "@/lib/api";
import PostPreviewCard from "@/components/post-preview-card";

export default async function Home() {
  const data = await getAllPostForHome("");
  return (
    <main className="container mx-auto mb-auto">
      <div className="grid gap-4">
        {data.edges.map(({ node }: any) => (
          <PostPreviewCard key={node.id} node={node} />
        ))}
      </div>
    </main>
  );
}
