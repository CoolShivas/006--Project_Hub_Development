import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const ProjectForm = () => {
  return (
    <form action="/" className="project-form">
      <div>
        <label htmlFor="title" className="project-form_label">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="project-form_input"
          placeholder="Project Title"
          required
        ></Input>
      </div>
      <div>
        <label htmlFor="description" className="project-form_label">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="project-form_textarea"
          required
          placeholder="Project Description"
        ></Textarea>
      </div>
      <div>
        <label htmlFor="category" className="project-form_label">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="project-form_input"
          required
          placeholder="Project Category(DIY, Electronics, NextJs, Java...)"
        />
      </div>
      <div>
        <label htmlFor="category" className="project-form_label">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="project-form_input"
          required
          placeholder="Project Thumbnail Url"
        />
      </div>
    </form>
  );
};

export default ProjectForm;
