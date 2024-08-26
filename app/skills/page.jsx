import Skills from "../_components/Skills";

export const metadata = {
    title: "Skills | Manish Suthar",
  };

export default function Page() {
    return (
        <div className="py-20 -mb-10">
            <div className="text-center mb-1">
                <h1 className="text-5xl font-bold">Skills<span className="text-primary">.</span></h1>
                <p className="text-xs">These are the skills I've developed throughout <br /> my coding journey.<span className="text-primary">.</span></p>
            </div>
            <Skills />
        </div>
    )
}