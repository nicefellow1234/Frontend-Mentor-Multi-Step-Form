"use client";
import { useEffect, useState } from "react";

export default function Home() {
  // GENERAL
  const [STEP_1, STEP_2, STEP_3, STEP_4, STEP_5] = [1, 2, 3, 4, 5];
  const CURRENCY = "$";
  const [MONTHLY_INTERVAL, YEARLY_INTERVAL] = [1, 2];
  const INTERVALS_DATA = {
    [MONTHLY_INTERVAL]: {
      name: "month",
      full: "Monthly",
      label: "mo",
    },
    [YEARLY_INTERVAL]: {
      name: "year",
      full: "Yearly",
      label: "yr",
    },
  };
  const [step, setStep] = useState(STEP_1);
  const [totals, setTotals] = useState(0);

  // STEP 2
  const [ARCADE_PLAN, ADVANCED_PLAN, PRO_PLAN] = [1, 2, 3];
  const PLANS_DATA = [
    {
      planId: ARCADE_PLAN,
      planName: "Arcade",
      planPrices: {
        [MONTHLY_INTERVAL]: 9,
        [YEARLY_INTERVAL]: 90,
      },
    },
    {
      planId: ADVANCED_PLAN,
      planName: "Advanced",
      planPrices: {
        [MONTHLY_INTERVAL]: 12,
        [YEARLY_INTERVAL]: 120,
      },
    },
    {
      planId: PRO_PLAN,
      planName: "Pro",
      planPrices: {
        [MONTHLY_INTERVAL]: 15,
        [YEARLY_INTERVAL]: 150,
      },
    },
  ];
  const [plan, setPlan] = useState(
    PLANS_DATA.find((singlePlan) => singlePlan.planId == ARCADE_PLAN)
  );
  const [interval, setInterval] = useState(MONTHLY_INTERVAL);
  const handleIntervalToggle = () => {
    setInterval(
      interval == MONTHLY_INTERVAL ? YEARLY_INTERVAL : MONTHLY_INTERVAL
    );
  };

  // STEP 3
  const [ONLINE_SERVICE, LARGER_STORAGE, CUSTOMIZABLE_PROFILE] = [1, 2, 3];
  const ADDONS_DATA = [
    {
      addonId: ONLINE_SERVICE,
      addonName: "Online service",
      addonDescription: "Access to multiplayer games",
      addonPrices: {
        [MONTHLY_INTERVAL]: 1,
        [YEARLY_INTERVAL]: 10,
      },
    },
    {
      addonId: LARGER_STORAGE,
      addonName: "Larger storage",
      addonDescription: "Extra 1TB of cloud save",
      addonPrices: {
        [MONTHLY_INTERVAL]: 2,
        [YEARLY_INTERVAL]: 20,
      },
    },
    {
      addonId: CUSTOMIZABLE_PROFILE,
      addonName: "Customizable profile",
      addonDescription: "Custom theme on your profile",
      addonPrices: {
        [MONTHLY_INTERVAL]: 2,
        [YEARLY_INTERVAL]: 20,
      },
    },
  ];
  const [addons, setAddons] = useState([ONLINE_SERVICE, LARGER_STORAGE]);
  const handleAddonToggle = (addon) => {
    setAddons((currentAddons) =>
      currentAddons.includes(addon)
        ? currentAddons.filter((currentAddon) => currentAddon != addon)
        : [...currentAddons, addon]
    );
  };

  // STEP 4
  const calculateTotals = () => {
    let planPrice = plan.planPrices[interval];
    let addonPrices = 0;
    for (const addon of ADDONS_DATA) {
      if (addons.includes(addon.addonId)) {
        addonPrices += addon.addonPrices[interval];
      }
    }
    return planPrice + addonPrices;
  };

  useEffect(() => {
    const calculatedTotals = calculateTotals();
    setTotals(calculatedTotals);
  }, [plan, addons, interval]);

  return (
    <>
      <main>
        <div className="h-screen flex justify-center items-center">
          <div className="container max-w-[950px] rounded-xl drop-shadow-md bg-white p-4">
            <div className="grid grid-cols-10">
              <div className="col-span-3">
                <div className="w-full h-full px-8 py-9 rounded-lg bg-[url('../../public/assets/images/bg-sidebar-desktop.png')] bg-no-repeat bg-[size:100%_100%]">
                  <div className="">
                    <div className="flex items-center mb-7">
                      <div
                        className={`font-semibold text-[14px] leading-[0] ${
                          step == STEP_1
                            ? "bg-[#bee1fd]"
                            : "text-white border-[1px] border-white"
                        } px-3 py-4 rounded-full mr-4`}
                      >
                        1
                      </div>
                      <div className="leading-[1.4]">
                        <div className="text-[#bee1fd] text-[12px] opacity-70">
                          STEP 1
                        </div>
                        <div className="text-white text-[14px] font-medium tracking-[1px]">
                          YOUR INFO
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-7">
                      <div
                        className={`font-semibold text-[14px] leading-[0] ${
                          step == STEP_2
                            ? "bg-[#bee1fd]"
                            : "text-white border-[1px] border-white"
                        } px-3 py-4 rounded-full mr-4`}
                      >
                        2
                      </div>
                      <div className="leading-[1.4]">
                        <div className="text-[#bee1fd] text-[12px] opacity-70">
                          STEP 2
                        </div>
                        <div className="text-white text-[14px] font-medium tracking-[1px]">
                          SELECT PLAN
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-7">
                      <div
                        className={`font-semibold text-[14px] leading-[0] ${
                          step == STEP_3
                            ? "bg-[#bee1fd]"
                            : "text-white border-[1px] border-white"
                        } px-3 py-4 rounded-full mr-4`}
                      >
                        3
                      </div>
                      <div className="leading-[1.4]">
                        <div className="text-[#bee1fd] text-[12px] opacity-70">
                          STEP 3
                        </div>
                        <div className="text-white text-[14px] font-medium tracking-[1px]">
                          ADD-ONS
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center mb-7">
                      <div
                        className={`font-semibold text-[14px] leading-[0] ${
                          step == STEP_4 || step == STEP_5
                            ? "bg-[#bee1fd]"
                            : "text-white border-[1px] border-white"
                        } px-3 py-4 rounded-full mr-4`}
                      >
                        4
                      </div>
                      <div className="leading-[1.4]">
                        <div className="text-[#bee1fd] text-[12px] opacity-70">
                          STEP 4
                        </div>
                        <div className="text-white text-[14px] font-medium tracking-[1px]">
                          SUMMARY
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-7">
                <section className={`step1 ${step == STEP_1 ? "" : "hidden"}`}>
                  <div className="px-24 pt-8 pb-2 h-full">
                    <div>
                      <h1 className="text-[33px] font-bold text-[var(--marine-blue-color)] mb-2">
                        Personal info
                      </h1>
                      <div className="text-[15px] text-[var(--cool-gray-color)]">
                        Please provide your name, email address and phone
                        number.
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="mb-5">
                        <div className="text-[15px]">Name</div>
                        <div className="mt-1">
                          <input
                            className="p-3 py-[10px] w-full rounded-md border-[1px] border-[var(--cool-gray-color)]"
                            placeholder="e.g. Stephen King"
                            type="text"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="mb-5">
                        <div className="text-[15px]">Email Address</div>
                        <div className="mt-1">
                          <input
                            className="p-3 py-[10px] w-full rounded-md border-[1px] border-[var(--cool-gray-color)]"
                            placeholder="e.g. stephenking@lorem.com"
                            type="email"
                            name="emailAddress"
                          />
                        </div>
                      </div>
                      <div className="mb-5">
                        <div className="text-[15px]">Phone Number</div>
                        <div className="mt-1">
                          <input
                            className="p-3 py-[10px] w-full rounded-md border-[1px] border-[var(--cool-gray-color)]"
                            placeholder="e.g. +1 234 567 890"
                            type="text"
                            name="phoneNumber"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-12 justify-end">
                      <button
                        className="p-3 px-6 rounded-lg bg-[var(--marine-blue-color)] text-white text-[15px]"
                        onClick={() => setStep(STEP_2)}
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                </section>
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
                            className={`w-full mr-3 rounded-lg px-4 py-5 border-[2px] ${
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
                                  interval == YEARLY_INTERVAL
                                    ? "opacity-100"
                                    : "opacity-0"
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
                        className="p-3 px-6 text-[var(--cool-gray-color)] text-[15px]"
                        onClick={() => setStep(STEP_1)}
                      >
                        Go Back
                      </button>
                      <button
                        className="p-3 px-6 rounded-lg bg-[var(--marine-blue-color)] text-white text-[15px]"
                        onClick={() => setStep(STEP_3)}
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                </section>
                <section className={`step3 ${step == STEP_3 ? "" : "hidden"}`}>
                  <div className="px-24 pt-8 pb-2 h-full">
                    <div>
                      <h1 className="text-[33px] font-bold text-[var(--marine-blue-color)] mb-2">
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
                          className={`border-[2px] rounded-lg p-4 ${
                            addons.includes(singleAddon.addonId)
                              ? "border-[var(--purplish-blue-color)] bg-[var(--magnolia-color)]"
                              : "border-[var(--light-gray-color)]"
                          } mb-4 cursor-pointer`}
                          onClick={() => handleAddonToggle(singleAddon.addonId)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="flex items-center justify-center p-3 mr-3">
                                {addons.includes(singleAddon.addonId) ? (
                                  <div className="flex items-center justify-center h-[20px] w-[20px] rounded bg-[var(--purplish-blue-color)]">
                                    <img src="assets/images/icon-checkmark.svg" />
                                  </div>
                                ) : (
                                  <div className="flex items-center justify-center h-[20px] w-[20px] rounded border-[2px] border-[var(--light-gray-color)]"></div>
                                )}
                              </div>
                              <div className="leading-[1.4]">
                                <div className="text-[16px] font-medium text-[var(--marine-blue-color)]">
                                  {singleAddon.addonName}
                                </div>
                                <div className="text-[14px] text-[var(--cool-gray-color)]">
                                  {singleAddon.addonDescription}
                                </div>
                              </div>
                            </div>
                            <div className="text-[14px] text-[var(--purplish-blue-color)]">
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
                    <div className="mt-12 flex justify-between">
                      <button
                        className="p-3 px-6 text-[var(--cool-gray-color)] text-[15px]"
                        onClick={() => setStep(STEP_2)}
                      >
                        Go Back
                      </button>
                      <button
                        className="p-3 px-6 rounded-lg bg-[var(--marine-blue-color)] text-white text-[15px]"
                        onClick={() => setStep(STEP_4)}
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                </section>
                <section className={`step4 ${step == STEP_4 ? "" : "hidden"}`}>
                  <div className="px-24 pt-8 pb-2 h-full">
                    <div>
                      <h1 className="text-[33px] font-bold text-[var(--marine-blue-color)] mb-2">
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
                                className="inline-block text-[14px] border-b-[2px] border-[var(--cool-gray-color)] text-[var(--cool-gray-color)] cursor-pointer"
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
                          {"+" +
                            CURRENCY +
                            totals +
                            "/" +
                            INTERVALS_DATA[interval].label}
                        </div>
                      </div>
                    </div>
                    <div className="mt-20 flex justify-between">
                      <button
                        className="p-3 px-6 text-[var(--cool-gray-color)] text-[15px]"
                        onClick={() => setStep(STEP_3)}
                      >
                        Go Back
                      </button>
                      <button
                        className="p-3 px-6 rounded-lg bg-[var(--purplish-blue-color)] text-white text-[15px]"
                        onClick={() => setStep(STEP_5)}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </section>
                <section
                  className={`step5 ${
                    step == STEP_5 ? "" : "hidden"
                  } h-full py-[135px]`}
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center justify-center">
                      <div>
                        <img src="assets/images/icon-thank-you.svg" />
                      </div>
                      <div className="text-[33px] font-bold text-[var(--marine-blue-color)] mt-4 mb-4">
                        Thank you!
                      </div>
                      <div className="text-[16px] text-center px-24 text-[var(--cool-gray-color)]">
                        Thanks for confirming your subscription! We hope you
                        have fun using our platform. If you ever need support,
                        plase feel free to email us at support@loremgaming.com.
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="mt-4 text-[11px] text-center">
          Challenge by
          <a
            className="text-[#3e52a3] ml-1"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by
          <a
            className="text-[#3e52a3] ml-1"
            href="https://github.com/nicefellow1234"
          >
            Umair Shah
          </a>
          .
        </div>
      </footer>
    </>
  );
}
