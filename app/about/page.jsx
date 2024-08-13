import About from "../_components/About";

export const metadata = {
  title: "About | Manish Suthar",
};

export default function Page() {
  return (
    <div className="py-20 -mb-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
        About Me<span className="text-primary">.</span>
        </h1>
        <p className="text-xs mt-3">
        Get to know me better - my story, interests, <br /> and aspirations<span className="text-primary">.</span>
        </p>
      </div>
      <About />
    </div>
  );
}
