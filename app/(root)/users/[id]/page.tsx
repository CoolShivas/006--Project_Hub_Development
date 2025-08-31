import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <>
      <section className="profile_container">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col  max-w-sm mx-auto p-4 relative h-[35rem] items-center">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard text="hover" />

          <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
            Name and Last-Name
          </h2>
          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 pb-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
            autem?
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
