import React, { useState } from "react";
import PersonalDetail from "./forms/PersonalDetail";
import Summery from "./forms/Summery";
import Experience from "./forms/Experience";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import Education from "./forms/Education";
import Skills from "./forms/Skills";

const FormSection = () => {
  const [activeFromIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" classname="flex gap-2">
          <LayoutGrid /> Theme
        </Button>
        <div className="flex gap-2">
          {activeFromIndex > 1 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFromIndex - 1)}
            >
              <ArrowLeft /> Back
            </Button>
          )}
          <Button
            disabled={!enableNext}
            classname="flex gap-2"
            size="sm"
            onClick={() => setActiveFormIndex(activeFromIndex + 1)}
          >
            Next <ArrowRight />
          </Button>
        </div>
      </div>
      {/* Personal Details form */}
      {activeFromIndex == 1 ? (
        <PersonalDetail enableNext={(v) => setEnableNext(v)} />
      ) : activeFromIndex == 2 ? (
        <Summery enabledNext={(v) => setEnableNext(v)} />
      ) : activeFromIndex == 3 ? (
        <Experience />
      ) : activeFromIndex == 4 ? (
        <Education />
      ) : activeFromIndex == 5 ? (
        <Skills />
      ) : null}

      {/* Skills */}
    </div>
  );
};

export default FormSection;
