import Link from "next/link";
import Logo from "./Logo";
import Social from "./Social";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
  return (
    <footer className="grid gap-3 md:px-20 lg:px-32 px-8 py-10">
      <div className="flex justify-between">
        <div>
          <Logo />
        </div>
        <ModeToggle />
      </div>
      <Social />
      <ul className="text-sm grid gap-1">
                <li className="hover:underline hover:text-primary"><Link href="/contact">Contact us</Link></li>
                <li className="hover:underline hover:text-primary"><Link href="/about">About me</Link></li>
            </ul>
      <p className="text-xs">
        {" "}
        ©{new Date().getFullYear()}{" "}
        <a
          href="https://codermanish.vercel.app/"
          className="hover:underline hover:text-primary"
        >
          ManishSuthar
        </a>{" "}
        All Rights Reserved.
      </p>
    </footer>
  );
}
