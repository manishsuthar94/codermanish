import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative grid place-content-center py-20 px-6">
      <div className="md:max-w-2xl max-w-md text-center grid gap-4">
        <h1 className="md:text-4xl lg:text-3xl text-xl font-bold">
          Hi I am{" "}
          <span className="underline underline-offset-4 text-primary">
            Manish Suthar
          </span>
          . I'm a student and a developer from Gujarat, India
          <span className="text-primary">.</span>
        </h1>
        <div className="justified-text">
          <p className="text-[1.1rem] mx-auto leading-relaxed">
            Hello, I'm Manish Suthar, a highly dedicated and skilled full-stack
            web developer from India 🇮🇳, currently pursuing my Diploma in
            Computer Engineering at Atmiya University, Rajkot, Gujarat. My dream
            is to become a successful modern full-stack developer and secure a
            position in a tech company.
          </p>

          <h2 className="md:text-4xl lg:text-2xl text-xl font-bold mt-3">
            {" "}
            Education{" "}
          </h2>

          <p className="text-[1rem] mx-auto leading-relaxed mt-5">
            2023 to Present{" "}
          </p>
          <h2 className="md:text-4xl lg:text-xl text-xl font-bold mt-1 ">
            {" "}
            Self Taught (Programming){" "}
          </h2>

          <p className="text-[1.1rem] mx-auto leading-relaxed mt-2 mb-2">
            Since 2023 I started to learn Programming. I have learn Html, Css,
            JavaScript, Reactjs, Bootstrap, Python and More.
          </p>

          <hr />

          <p className="text-[1rem] mx-auto leading-relaxed mt-2">
            2024 to Present{" "}
          </p>
          <h2 className="md:text-4xl lg:text-xl text-xl font-bold mt-1 ">
            {" "}
            Diploma In Computer Engineering{" "}
          </h2>

          <p className="text-[1.1rem] mx-auto leading-relaxed mt-2">
            From 2024 I started my journey to be a Computer Engineer on Atmiya
            University, Rajkot, Gujarat. It still Running to Present.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mt-5">
        <Button asChild variant="outline">
          <Link
            href="https://www.linkedin.com/in/manish-suthar-8395b4311/"
            target="_blank"
          >
            My Linkedin
          </Link>
        </Button>
        <Button asChild className="flex gap-1 items-center justify-center">
          <Link href="https://github.com/manishsuthar94/" target="_blank">
            My Github
          </Link>
        </Button>
      </div>
    </section>
  );
}
