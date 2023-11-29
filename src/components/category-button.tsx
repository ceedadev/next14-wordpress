import Link from "next/link";

export const CategoryButton = ({
  category,
  href,
}: {
  category: string;
  href: string;
}) => (
  <Link
    href={href}
    className="rounded-full px-2 py-1 text-xs uppercase border hover:bg-neutral-800 hover:text-white cursor-pointer tracking-tighter"
  >
    {category}
  </Link>
);
