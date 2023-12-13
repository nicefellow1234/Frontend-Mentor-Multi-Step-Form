export default function StepFourSection({
  step,
  setStep,
  STEP_2,
  STEP_3,
  STEP_4,
  STEP_5,
  plan,
  INTERVALS_DATA,
  interval,
  CURRENCY,
  ADDONS_DATA,
  addons,
  totals
}) {
  return (
    <section className={`step4 ${step == STEP_4 ? "" : "hidden"}`}>
      <div className="p-8 rounded-xl drop-shadow-lg md:rounded-none md:drop-shadow-none md:mt-0 mx-6 md:mx-0 md:px-24 md:pt-8 md:pb-2 bg-white h-full">
        <div>
          <h1 className="text-[28px] md:text-[33px] font-bold text-[var(--marine-blue-color)] mb-2">
            Finishing up
          </h1>
          <div className="text-[15px] text-[var(--cool-gray-color)]">
            Double-check everything looks OK before confirming.
          </div>
        </div>
        <div className="mt-6">
          <div className="p-6 rounded-xl bg-[var(--magnolia-color)]">
            <div className="flex justify-between items-center pb-8 border-b-[1px] border-[var(--light-gray-color)]">
              <div className="leading-[1.2]">
                <div className="text-[16px] text-[var(--marine-blue-color)] font-medium">
                  {plan.planName} ({INTERVALS_DATA[interval].full})
                </div>
                <div>
                  <div
                    className="inline-block text-[14px] border-b-[2px] hover:text-[var(--purplish-blue-color)] border-[var(--cool-gray-color)] text-[var(--cool-gray-color)] cursor-pointer"
                    onClick={() => setStep(STEP_2)}
                  >
                    Change
                  </div>
                </div>
              </div>
              <div className="text-[16px] text-[var(--marine-blue-color)] font-semibold">
                {CURRENCY +
                  plan.planPrices[interval] +
                  "/" +
                  INTERVALS_DATA[interval].label}
              </div>
            </div>
            {ADDONS_DATA.map((singleAddon) =>
              addons.includes(singleAddon.addonId) ? (
                <div
                  key={singleAddon.addonId}
                  className="flex justify-between mt-3"
                >
                  <div className="text-[14px] text-[var(--cool-gray-color)]">
                    {singleAddon.addonName}
                  </div>
                  <div className="text-[14px]">
                    {"+" +
                      CURRENCY +
                      singleAddon.addonPrices[interval] +
                      "/" +
                      INTERVALS_DATA[interval].label}
                  </div>
                </div>
              ) : null
            )}
          </div>
          <div className="flex justify-between items-center mt-4 px-6">
            <div className="text-[14px] text-[var(--cool-gray-color)]">
              Total (per {INTERVALS_DATA[interval].name})
            </div>
            <div className="text-[20px] text-[var(--purplish-blue-color)] font-semibold">
              {"+" + CURRENCY + totals + "/" + INTERVALS_DATA[interval].label}
            </div>
          </div>
        </div>
        <div className="hidden md:flex mt-20 justify-between">
          <button
            className="p-3 px-6 text-[var(--cool-gray-color)] hover:text-[var(--marine-blue-color)] hover:font-medium text-[15px]"
            onClick={() => setStep(STEP_3)}
          >
            Go Back
          </button>
          <button
            className="p-3 px-6 rounded-lg bg-[var(--purplish-blue-color)] hover:bg-[var(--purplish-light-blue-color)] text-white text-[15px]"
            onClick={() => setStep(STEP_5)}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="md:hidden fixed w-full bottom-0 bg-white p-5 flex justify-between">
        <button
          className="p-3 px-6 text-[var(--cool-gray-color)] hover:text-[var(--marine-blue-color)] hover:font-medium text-[15px]"
          onClick={() => setStep(STEP_3)}
        >
          Go Back
        </button>
        <button
          className="p-3 px-6 rounded-lg bg-[var(--purplish-blue-color)] hover:bg-[var(--purplish-light-blue-color)] text-white text-[15px]"
          onClick={() => setStep(STEP_5)}
        >
          Confirm
        </button>
      </div>
    </section>
  );
}
