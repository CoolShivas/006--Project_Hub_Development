import { Boxes } from "@/components/ui/background-boxes";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <p className="tag relative">31/August/2025</p>
        <h1 className="heading relative">Best Projects</h1>
        <p className="sub-heading !max-w-5xl relative">
          This is a nice project description.
        </p>
      </div>
      <section className="section_container">
        <img
          src="https://vedicfeed.com/wp-content/uploads/2019/12/Lord-Shiva-Mahadeva.jpg"
          alt="image not found"
          className="w-full h-auto rounded-xl"
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link href="/" className="flex gap-2 items-center mb-3">
              <Image
                src="https://vedicfeed.com/wp-content/uploads/2019/12/Lord-Shiva-Mahadeva.jpg"
                alt="image not found"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium">AUTHOR NAME</p>
                <p className="text-10-medium !text-black-300">@USER NAME</p>
              </div>
            </Link>

            <p className="category-tag">ELECTRONICS</p>
          </div>
          <h3 className="text-30-bold">PROJECT DETAILS</h3>
          <p className="no-result">No, Details Provided yet.</p>
        </div>
      </section>
    </>
  );
};

export default page;
