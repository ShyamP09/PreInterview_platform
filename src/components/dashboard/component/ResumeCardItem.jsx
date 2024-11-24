import { Notebook } from "lucide-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ResumeCardItem = ({ resume }) => {
  console.log(resume);

  const resumes = resume.attributes;
  return (
    <Link to={"/resume/dashboard/resume/" + resume.id + "/edit"}>
      <div className="p-14 py-24 border items-center flex justify-center bg-red-600 rounded-lg h-[280px] hover:shadow-md cursor-pointer border-purple-600">
        <Notebook />
      </div>
      <h2 className="text-center">{resumes.title}</h2>
    </Link>
  );
};

export default ResumeCardItem;
