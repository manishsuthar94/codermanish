import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative grid place-content-center py-20 px-6">
      <div className="md:max-w-3xl max-w-md text-center grid gap-4">
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
            Hello, I'm Manish Suthar, a passionate and skilled full-stack web
            developer from Gujarat, India. I'm currently pursuing a{" "}
            <span className="underline underline-offset-4 text-primary">
              {" "}
              Bachelor of Computer Applications (BCA){" "}
            </span>{" "}
            at Marwadi University, Rajkot, Gujarat. My ambition is to become a
            successful full-stack developer and secure a prominent position in a
            leading tech company.
          </p>

          <h2 className="md:text-4xl lg:text-2xl text-xl font-bold mt-3">
            {" "}
            Education{" "}
          </h2>

          <p className="text-[1rem] mx-auto leading-relaxed mt-5 font-bold text-primary">
            2023 to Present{" "}
          </p>

          <h2 className="md:text-4xl lg:text-xl text-xl font-bold mt-1 ">
            {" "}
            Self Taught (Programming){" "}
          </h2>

          <p className="text-[1.1rem] mx-auto leading-relaxed mt-2 mb-2">
            In 2023, I began my programming journey, mastering languages and
            frameworks such as{" "}
            <span className="text-primary">
              {" "}
              HTML, CSS, JavaScript, C, React.js, Bootstrap, Python,{" "}
            </span>{" "}
            and more.
          </p>

          <hr />

          <p className="text-[1rem] mx-auto leading-relaxed mt-2 font-bold text-primary">
            2024 to Present{" "}
          </p>
          <h2 className="md:text-4xl lg:text-xl text-xl font-bold mt-1 ">
            {" "}
            Bachelor of Computer Applications (BCA){" "}
          </h2>

          <p className="text-[1.1rem] mx-auto leading-relaxed mt-2">
            In 2024, I started my BCA at Marwadi University, Rajkot, Gujarat,
            where I am currently continuing my studies.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mt-5">
        <Button asChild variant="outline">
          <Link
            href="https://www.linkedin.com/in/manish-suthar-8395b4311/"
            target="_blank"
          >
            Linkedin
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
