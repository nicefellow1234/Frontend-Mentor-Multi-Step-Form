export default function SidebarStep({ singleStep, step, STEP_4, STEP_5 }) {
  return (
    <div className="flex items-center mb-7">
      <div
        className={`font-semibold text-[14px] leading-[0] ${
          step == singleStep.stepNumber ||
          (singleStep.stepNumber == STEP_4 && step == STEP_5)
            ? "bg-[#bee1fd]"
            : "text-white border-[1px] border-white"
        } px-3 py-4 rounded-full mr-4`}
      >
        {singleStep.stepNumber}
      </div>
      <div className="leading-[1.4]">
        <div className="text-[#bee1fd] text-[12px] opacity-70">
          STEP {singleStep.stepNumber}
        </div>
        <div className="text-white text-[14px] font-medium tracking-[1px]">
          {singleStep.stepName}
        </div>
      </div>
    </div>
  );
}
