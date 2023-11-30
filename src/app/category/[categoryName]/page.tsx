import { PageHeading } from "@/components/page-heading";
import { PostPreviewGridItem } from "@/components/post-preview-grid-item";
import { Sheet } from "@/components/sheet";
import { getPostsByCategoryName } from "@/lib/api";

export default async function CategoryPage({
  params,
}: {
  params: { categoryName: string };
}) {
  const posts = await getPostsByCategoryName(params.categoryName);
  return (
    <Sheet>
      <PageHeading text={params.categoryName} />
      <div className="grid gap-4 md:gap-0 border-separate grid-cols-1 md:grid-cols-3">
        {posts.edges.map(({ node }: any) => (
          <PostPreviewGridItem key={node.slug} post={node} />
        ))}
      </div>
    </Sheet>
  );
}
