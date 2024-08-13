import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

// SVG LinkedIn Icon
const LinkedInLogoIcon = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.6c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7c1 0 1.7.8 1.7 1.7s-.7 1.7-1.7 1.7zm13.5 11.6h-3v-5.5c0-1.3 0-3-2-3s-2.3 1.5-2.3 3v5.5h-3v-10h2.8v1.4h.1c.4-.8 1.5-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.9v5.4z" />
  </svg>
);

export default function Social() {
  return (
    <div className="flex gap-2 items-center -ml-1 bg-secondary rounded-full p-2 w-fit">
      <Link
        href="https://github.com/manishsuthar94/"
        className="hover:text-primary"
        target="_blank"
      >
        <GitHubLogoIcon className="h-5 w-5" />
      </Link>
      <Link
        href="https://www.instagram.com/_mnis_94/"
        className="hover:text-primary"
        target="_blank"
      >
        <InstagramLogoIcon className="h-5 w-5" />
      </Link>
      <Link
        href="https://x.com/ManishSuthar_94"
        className="hover:text-primary"
        target="_blank"
      >
        <TwitterLogoIcon className="h-5 w-5" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/manish-suthar-8395b4311/"
        className="hover:text-primary"
        target="_blank"
      >
        <LinkedInLogoIcon />
      </Link>
    </div>
  );
}
