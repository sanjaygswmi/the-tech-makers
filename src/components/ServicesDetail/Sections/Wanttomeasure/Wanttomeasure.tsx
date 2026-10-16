"use client";

import MainPopup from "@/src/components/MainPopup";

interface WanttomeasureProps {
  serviceTitle?: string;
}

const Wanttomeasure = ({ serviceTitle }: WanttomeasureProps) => {
  const title = serviceTitle || "your digital project";

  return (
    <section className="mt-8 rounded bg-[#FFEDC1] px-4 py-10 text-center md:px-8 md:py-16" aria-labelledby="service-enquiry-heading">
      <h2 id="service-enquiry-heading" className="mb-4 text-2xl font-bold md:text-4xl">
        Ready to discuss your{" "}
        <span className="text-[#E05A32]">{title}</span>?
      </h2>
      <p className="mx-auto mb-6 max-w-2xl text-gray-700">
        Tell us about your goals, current challenges, and requirements. We can help clarify the scope and identify practical next steps.
      </p>
      <MainPopup title="Discuss Your Project" />
    </section>
  );
};

export default Wanttomeasure;
