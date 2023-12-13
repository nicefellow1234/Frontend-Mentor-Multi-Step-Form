export default function StepThreeSection({
  step,
  setStep,
  STEP_2,
  STEP_3,
  STEP_4,
  ADDONS_DATA,
  addons,
  CURRENCY,
  interval,
  INTERVALS_DATA,
  handleAddonToggle
}) {
  return (
    <section className={`step3 ${step == STEP_3 ? "" : "hidden"}`}>
      <div className="p-8 rounded-xl drop-shadow-lg md:rounded-none md:drop-shadow-none md:mt-0 mx-6 md:mx-0 md:px-24 md:pt-8 md:pb-2 bg-white h-full">
        <div>
          <h1 className="text-[28px] md:text-[33px] font-bold text-[var(--marine-blue-color)] mb-2">
            Pick add-ons
          </h1>
          <div className="text-[15px] text-[var(--cool-gray-color)]">
            Add-ons help enhance your gaming experience.
          </div>
        </div>
        <div className="mt-6">
          {ADDONS_DATA.map((singleAddon) => (
            <div
              key={singleAddon.addonId}
              className={`border-[2px] rounded-lg p-3 pr-4 md:p-4 hover:border-[var(--purplish-blue-color)] ${
                addons.includes(singleAddon.addonId)
                  ? "border-[var(--purplish-blue-color)] bg-[var(--magnolia-color)]"
                  : "border-[var(--light-gray-color)]"
              } mb-4 cursor-pointer`}
              onClick={() => handleAddonToggle(singleAddon.addonId)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center justify-center p-2 mr-1 md:p-3 md:mr-3">
                    {addons.includes(singleAddon.addonId) ? (
                      <div className="flex items-center justify-center h-[20px] w-[20px] rounded bg-[var(--purplish-blue-color)]">
                        <img src="assets/images/icon-checkmark.svg" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-[20px] w-[20px] rounded border-[2px] border-[var(--light-gray-color)]"></div>
                    )}
                  </div>
                  <div className="leading-[1.4]">
                    <div className="text-[14px] md:text-[16px] font-medium text-[var(--marine-blue-color)]">
                      {singleAddon.addonName}
                    </div>
                    <div className="text-[12px] md:text-[14px] text-[var(--cool-gray-color)]">
                      {singleAddon.addonDescription}
                    </div>
                  </div>
                </div>
                <div className="text-[13px] md:text-[14px] text-[var(--purplish-blue-color)]">
                  {"+" +
                    CURRENCY +
                    singleAddon.addonPrices[interval] +
                    "/" +
                    INTERVALS_DATA[interval]["label"]}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex mt-12 justify-between">
          <button
            className="p-3 px-6 text-[var(--cool-gray-color)] hover:text-[var(--marine-blue-color)] hover:font-medium text-[15px]"
            onClick={() => setStep(STEP_2)}
          >
            Go Back
          </button>
          <button
            className="p-3 px-6 rounded-lg bg-[var(--marine-blue-color)] hover:bg-[var(--marine-light-blue-color)] text-white text-[15px]"
            onClick={() => setStep(STEP_4)}
          >
            Next Step
          </button>
        </div>
      </div>
      <div className="md:hidden fixed w-full bottom-0 bg-white p-5 flex justify-between">
        <button
          className="p-3 px-6 text-[var(--cool-gray-color)] hover:text-[var(--marine-blue-color)] hover:font-medium text-[15px]"
          onClick={() => setStep(STEP_2)}
        >
          Go Back
        </button>
        <button
          className="p-3 px-6 rounded-lg bg-[var(--marine-blue-color)] hover:bg-[var(--marine-light-blue-color)] text-white text-[15px]"
          onClick={() => setStep(STEP_4)}
        >
          Next Step
        </button>
      </div>
    </section>
  );
}
