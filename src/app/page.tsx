import MaxWidthWra from "@/components/MaxWidthWra";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <MaxWidthWra>
        <div className="py-20 mx-auto text-center flex flex-col items-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high quality {" "}
            <span className="text-blue-600">clothes</span>.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-prose">
            Welcome to <span className="text-blue-600">digitalmart</span>. every
            clothes arts are verified by our team to ensure our highest quality
            standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link className={buttonVariants()} href={"/trending"}>
              trending
            </Link>
            <Button variant={"ghost"}>our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWra>
      <MaxWidthWra className="py-20">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 lg:gap-x-8 lg:gap-y-0"></section>
      </MaxWidthWra>
    </>
  );
}
