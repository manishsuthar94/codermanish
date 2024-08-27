import Skills from "../_components/Skills";
import AnimatedCursor from "react-animated-cursor";

export const metadata = {
  title: "Skills | Manish Suthar",
};

export default function Page() {
  return (
    <div className="py-20 -mb-10">
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
      <div className="text-center mb-1">
        <h1 className="text-5xl font-bold">
          Skills<span className="text-primary">.</span>
        </h1>
        <p className="text-xs">
          These are the skills I've developed throughout <br /> my coding
          journey.<span className="text-primary">.</span>
        </p>
      </div>
      <Skills />
    </div>
  );
}
