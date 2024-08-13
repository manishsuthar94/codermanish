import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export const metadata = {
  title: "Contact | Manish Suthar",
};

export default function Page() {
  return (
    <div className="py-20">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">
          Contact Me<span className="text-primary">.</span>
        </h1>
        <p className="text-xs">
          Feel free to contact me if you have any <br /> questions or works
          <span className="text-primary">.</span>
        </p>
        <section className="relative grid place-content-center py-8 px-6">
          <div className="md:max-w-2xl max-w-md text-center grid gap-1">
            <h1 className="md:text-4xl lg:text-3xl text-3xl font-bold">
              Email:{" "}
              <span className="underline underline-offset-4 text-primary">
                manishsutharr94@gmail.com
              </span>
            </h1>
            <h1 className="md:text-4xl lg:text-3xl text-3xl font-bold py-4">
              Phone:{" "}
              <span className="underline underline-offset-4 text-primary">
                8866281718
              </span>
            </h1>

            <div className="flex gap-2 items-center justify-center bg-secondary rounded-full p-4 w-fit mx-auto">
              <Link
                href="https://github.com/manishsuthar94/"
                className="hover:text-primary"
                target="_blank"
              >
                <GitHubLogoIcon className="h-7 w-7 m-1" />
              </Link>
              <Link
                href="https://www.instagram.com/_mnis_94/"
                className="hover:text-primary"
                target="_blank"
              >
                <InstagramLogoIcon className="h-7 w-7 m-1" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/manish-suthar-8395b4311/"
                className="hover:text-primary"
                target="_blank"
              >
                <LinkedInLogoIcon className="h-7 w-7 m-1" />
              </Link>
              <Link
                href="https://x.com/ManishSuthar_94"
                className="hover:text-primary"
                target="_blank"
              >
                <TwitterLogoIcon className="h-7 w-7 m-1" />
              </Link>
            </div>

            <p className="text-[0.8rem] max-w-md mx-auto py-5">
              An extensive display of my full-stack development skills,
              experiences, and projects, demonstrating my proficiency and
              commitment to coding
              <span className="text-primary">.</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
