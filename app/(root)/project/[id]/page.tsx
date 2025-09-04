import { Boxes } from "@/components/ui/background-boxes";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { PROJECT_BY_ID_QUERY } from "@/sanity/lib/queries";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  console.log(id);

  const post = await client.fetch(PROJECT_BY_ID_QUERY, { id });

  console.log(post);

  if (!post) {
    return notFound();
  }
  return (
    <>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <p className="tag relative">
          {/* 31/August/2025 */}
          {post._createdAt}
        </p>
        <h1 className="heading relative">
          {/* Best Projects */}
          {post.title}
        </h1>
        <p className="sub-heading !max-w-5xl relative">
          {/* This is a nice project description. */}
          {post.description}
        </p>
      </div>
      <section className="section_container">
        <img
          // src="https://vedicfeed.com/wp-content/uploads/2019/12/Lord-Shiva-Mahadeva.jpg"
          src={post.image}
          alt="image not found"
          className="w-full h-auto rounded-xl"
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link href="/" className="flex gap-2 items-center mb-3">
              <Image
                // src="https://vedicfeed.com/wp-content/uploads/2019/12/Lord-Shiva-Mahadeva.jpg"
                src={post.author.image || "https://placehold.co/220"}
                alt="image not found"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium">
                  {/* AUTHOR NAME */}
                  {post.author.name}
                </p>
                <p className="text-10-medium !text-black-300">
                  {/* @USER NAME */}
                  {post.author.username}
                </p>
              </div>
            </Link>

            <p className="category-tag">
              {/* ELECTRONICS */}
              {post.category}
            </p>
          </div>
          <h3 className="text-30-bold">PROJECT DETAILS</h3>
          <p className="no-result">No, Details Provided yet.</p>
        </div>
      </section>
    </>
  );
};

export default page;
