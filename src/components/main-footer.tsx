import Link from "next/link";

export default function MainFooter() {
  return (
    <footer className="max-w-4xl mx-auto w-full  border-t mt-10">
      <div className="container flex flex-row justify-between px-4 md:px-0 py-2">
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
