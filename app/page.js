import { projects } from "@/lib/projects";
import Hero from "./_components/Hero";
import Project from "./_components/Project";
import ProjectsSnip from "./_components/ProjectsSnip";
import Skills from "./_components/Skill";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <main className="mb-20">
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

      <Hero />

      <div className="text-center mb-0 mt-8">
        <h1 className="text-4xl font-bold pb-2">
          Skills<span className="text-primary">.</span>
        </h1>
        <p className="text-xs">
          These are the skills I've developed throughout <br /> my coding
          journey.<span className="text-primary">.</span>
        </p>
      </div>

      <Skills />

      <div className="grid place-content-center mt-2 mb-10 pb-9">
        <Button asChild variant="secondary">
          <Link href="/skills">View All Skills</Link>
        </Button>
      </div>

      <div className="text-center mb-5">
        <h1 className="text-4xl font-bold pb-3">
          Projects<span className="text-primary">.</span>
        </h1>
        <p className="text-xs pb-3">
          Some of my projects i built, click view all <br /> for all projects
          <span className="text-primary">.</span>
        </p>
      </div>

      <div className="flex gap-2 flex-wrap items-center justify-center md:px-20 lg:px-32 px-5">
        <Project {...projects[0]} />
        <Project {...projects[1]} />
        {/* <Project {...projects[2]} /> */}
      </div>

      <div className="grid place-content-center mt-10">
        <Button asChild variant="secondary">
          <Link href="/projects">View All Projects</Link>
        </Button>
      </div>
    </main>
  );
}
