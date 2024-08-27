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
import AnimatedCursor from "react-animated-cursor";

export const metadata = {
  title: "Contact | Manish Suthar",
};

export default function Page() {
  return (
    <div className="py-20">
       <AnimatedCursor
        innerSize={10}
        outerSize={37}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "rgb(79 70 229)",
          boxShadow: "0 0 8px rgba(91, 33, 182, 0.8)",
        }}
        outerStyle={{
          border: "4px solid rgb(129 140 248)",
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
        }}
      />
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">
          Contact Me<span className="text-primary">.</span>
        </h1>
        <p className="text-xs mt-3">
          Feel free to contact me!
          <span className="text-primary">..</span>
        </p>

        <section className="relative grid place-content-center py-11 px-6">
          <div className="md:max-w-2xl max-w-md text-center grid gap-4">
            <h1 className="md:text-3xl lg:text-2xl text-lg font-bold">
              If you'd like to get in touch, you can email me at{" "}
              <span className="underline underline-offset-4 text-primary">
                manishsutharr94@gmail.com{" "}
              </span>{" "}
              or call me at{" "}
              <span className="underline underline-offset-4 text-primary">
                8866281718{" "}
              </span>
              <span className="text-primary">.</span>
            </h1>

            <p className="text-[1.1rem] mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Whether you have a
              question, want to collaborate, or simply want to connect, I'd love
              to hear from you!
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 mt-5">
            <Link
              href="https://github.com/manishsuthar94/"
              className="hover:text-primary"
              target="_blank"
            >
              <GitHubLogoIcon className="h-7 w-7 m-1" />
            </Link>
            <Link
              href="https://www.instagram.com/_manish_.94/"
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
        </section>
      </div>
    </div>
  );
}
