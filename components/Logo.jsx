import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-3xl font-bold select-none">
        MS<span className="text-primary">.</span>
      </h1>
    </Link>
  );
}
