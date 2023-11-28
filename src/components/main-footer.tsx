import Link from "next/link";

export default function MainFooter() {
  return (
    <footer className="p-4 md:p-10 border-t mt-10">
      <div className="container flex flex-row justify-between">
        <p className="text-xs font-light text-neutral-600">
          made by{" "}
          <Link href={"https://github.com/ceedadev"} className="font-semibold">
            ceedadev
          </Link>
        </p>
      </div>
    </footer>
  );
}
