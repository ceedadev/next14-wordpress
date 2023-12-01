import { SITE_TITLE } from "@/lib/constant";
import { getAllCategories, getAllPostForHome } from "@/lib/api";

import { Sheet } from "@/components/sheet";
import { PageHeading } from "@/components/page-heading";
import { CategoryButton } from "@/components/category-button";
import { PostPreviewGridItem } from "@/components/post-preview-grid-item";

export default async function Home() {
  const posts = await getAllPostForHome("");
  const categories = await getAllCategories();
  return (
    <Sheet>
      <PageHeading text={SITE_TITLE} />
      {/* CATEGORIES */}
      <div className="md:flex flex-col space-y-4 md:flex-row items-center justify-between mb-10">
        <p className="uppercase text-xs font-bold tracking-tight mr-4">
          Categories
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category: any) => (
            <CategoryButton
              key={category.id}
              category={category.name}
              href={`/category/${category.name}`}
            />
          ))}
        </div>
      </div>
      <div className="grid gap-4 md:gap-0 border-separate grid-cols-1 md:grid-cols-3">
        {posts.edges.map(({ node }: any) => (
          <PostPreviewGridItem key={node.slug} post={node} />
        ))}
      </div>
    </Sheet>
  );
}
