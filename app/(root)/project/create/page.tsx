import React from "react";
import ProjectForm from "@/components/ProjectForm";

const CreatePage = () => {
  return (
    <>
      <section className="form_container !min-h-[230px]">
        <h1 className="heading">Submit Your Project</h1>
      </section>
      <ProjectForm></ProjectForm>
    </>
  );
};

export default CreatePage;
