import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative grid place-content-center py-20 px-6">
      <div className="md:max-w-2xl max-w-md text-center grid gap-1">
        <h1 className="md:text-4xl lg:text-5xl text-3xl font-bold">
          Hi I am{" "}
          <span className="underline underline-offset-4 text-primary">
            Manish Suthar
          </span>{" "}
          a Full Stack Web Developer<span className="text-primary">.</span>
        </h1>
        <p className="text-[0.9rem] max-w-md mx-auto">
          I am on a mission to become a Full Stack Developer. My goal is to gain
          proficiency in both front-end and back-end technologies
          <span className="text-primary">.</span>
        </p>
      </div>
      <div className="flex items-center justify-center gap-3 mt-5">
        <Button asChild variant="outline">
          <Link href="/about">About Me</Link>
        </Button>
        <Button asChild className="flex gap-1 items-center justify-center">
          <Link href="/projects">My Project</Link>
        </Button>
      </div>
    </section>
  );
}
