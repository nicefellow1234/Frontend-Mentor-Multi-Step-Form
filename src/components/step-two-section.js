export default function StepTwoSection({
  step,
  setStep,
  STEP_1,
  STEP_2,
  STEP_3,
  PLANS_DATA,
  plan,
  setPlan,
  CURRENCY,
  interval,
  handleIntervalToggle,
  INTERVALS_DATA,
  YEARLY_INTERVAL,
  MONTHLY_INTERVAL
}) {
  return (
    <section className={`step2 ${step == STEP_2 ? "" : "hidden"}`}>
      <div className="px-24 pt-8 pb-2 h-full">
        <div>
          <h1 className="text-[33px] font-bold text-[var(--marine-blue-color)] mb-2">
            Select your plan
          </h1>
          <div className="text-[15px] text-[var(--cool-gray-color)]">
            You have the option of monthly or yearly billing.
          </div>
        </div>
        <div className="mt-8">
          <div className="flex">
            {PLANS_DATA.map((singlePlan) => (
              <div
                key={singlePlan.planId}
                className={`w-full mr-3 rounded-lg px-4 py-5 border-[2px] hover:border-[var(--purplish-blue-color)] ${
                  singlePlan.planId == plan.planId
                    ? "border-[var(--purplish-blue-color)] bg-[var(--magnolia-color)]"
                    : "border-[var(--light-gray-color)]"
                } cursor-pointer`}
                onClick={() => setPlan(singlePlan)}
              >
                <img
                  src={`./assets/images/icon-${singlePlan.planName.toLowerCase()}.svg`}
                />
                <div className="mt-10">
                  <div className="text-[16px] text-[var(--marine-blue-color)] font-semibold">
                    {singlePlan.planName}
                  </div>
                  <div className="text-[14px] font-medium text-[var(--cool-gray-color)]">
                    {CURRENCY +
                      singlePlan.planPrices[interval] +
                      "/" +
                      INTERVALS_DATA[interval]["label"]}
                  </div>
                  <div
                    className={`text-[13px] ${
                      interval == YEARLY_INTERVAL ? "opacity-100" : "opacity-0"
                    } transition-opacity font-medium text-[var(--marine-blue-color)]`}
                  >
                    2 months free
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center p-3 rounded-lg bg-[var(--magnolia-color)]">
          <div className="flex items-center">
            <div
              className={`text-[14px] ${
                interval == MONTHLY_INTERVAL
                  ? "text-[var(--marine-blue-color)]"
                  : "text-[var(--cool-gray-color)]"
              } font-semibold`}
            >
              Monthly
            </div>
            <div
              className="px-[3px] py-[2.5px] relative leading-[0] w-[40px] rounded-full bg-[var(--marine-blue-color)] mx-3 cursor-pointer"
              onClick={() => handleIntervalToggle()}
            >
              <div
                className={`transition-all text-right ${
                  interval == MONTHLY_INTERVAL ? "w-[0%]" : "w-full"
                } `}
              >
                <span
                  className={`inline-block rounded-full bg-white h-[13px] w-[13px]`}
                ></span>
              </div>
            </div>
            <div
              className={`text-[14px] ${
                interval == YEARLY_INTERVAL
                  ? "text-[var(--marine-blue-color)]"
                  : "text-[var(--cool-gray-color)]"
              } font-semibold`}
            >
              Yearly
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between">
          <button
            className="p-3 px-6 text-[var(--cool-gray-color)] hover:text-[var(--marine-blue-color)] hover:font-medium text-[15px]"
            onClick={() => setStep(STEP_1)}
          >
            Go Back
          </button>
          <button
            className="p-3 px-6 rounded-lg bg-[var(--marine-blue-color)] hover:bg-[var(--marine-light-blue-color)] text-white text-[15px]"
            onClick={() => setStep(STEP_3)}
          >
            Next Step
          </button>
        </div>
      </div>
    </section>
  );
}
