import { ThreeDCardDemo } from "@/components/ThreeDCard";
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

          <EvervaultCard
            text="hover"
            // imageURL="https://avatars.githubusercontent.com/u/75844991?v=4"
            imageURL="https://vedicfeed.com/wp-content/uploads/2019/12/Lord-Shiva-Mahadeva.jpg"
          />

          <h2 className="dark:text-white text-black mt-4 text-lg font-bold text-center">
            Name and Last-Name
          </h2>
          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5 pb-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
            autem?
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-5 lg:mt-5">
          <p className="text-30-bold">List of all projects</p>
          <ul className="mt-5 card_grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 justify-center">
            {[
              {
                id: 123,
                title: "A new project",
                description: "It is the best project.",
              },
              {
                id: 1234,
                title: "A new project",
                description: "It is the best project.",
              },
              {
                id: 12345,
                title: "A new project",
                description: "It is the best project.",
              },
              {
                id: 123456,
                title: "A new project",
                description: "It is the best project.",
              },
            ].map((items, index) => {
              return <ThreeDCardDemo key={items.id} />;
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default page;
