"use client";
import { Fragment, useEffect, useState } from "react";
import SidebarStep from "@/components/sidebar-step";
import StepOneSection from "@/components/step-one-section";
import StepTwoSection from "@/components/step-two-section";
import StepThreeSection from "@/components/step-three-section";
import StepFourSection from "@/components/step-four-section";
import StepFiveSection from "@/components/step-five-section";

export default function Home() {
  // GENERAL
  const [STEP_1, STEP_2, STEP_3, STEP_4, STEP_5] = [1, 2, 3, 4, 5];
  const CURRENCY = "$";
  const [MONTHLY_INTERVAL, YEARLY_INTERVAL] = [1, 2];
  const INTERVALS_DATA = {
    [MONTHLY_INTERVAL]: {
      name: "month",
      full: "Monthly",
      label: "mo"
    },
    [YEARLY_INTERVAL]: {
      name: "year",
      full: "Yearly",
      label: "yr"
    }
  };
  const STEPS_DATA = [
    {
      stepNumber: STEP_1,
      stepName: "YOUR INFO"
    },
    {
      stepNumber: STEP_2,
      stepName: "SELECT PLAN"
    },
    {
      stepNumber: STEP_3,
      stepName: "ADD-ONS"
    },
    {
      stepNumber: STEP_4,
      stepName: "SUMMARY"
    }
  ];
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
        [YEARLY_INTERVAL]: 90
      }
    },
    {
      planId: ADVANCED_PLAN,
      planName: "Advanced",
      planPrices: {
        [MONTHLY_INTERVAL]: 12,
        [YEARLY_INTERVAL]: 120
      }
    },
    {
      planId: PRO_PLAN,
      planName: "Pro",
      planPrices: {
        [MONTHLY_INTERVAL]: 15,
        [YEARLY_INTERVAL]: 150
      }
    }
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
        [YEARLY_INTERVAL]: 10
      }
    },
    {
      addonId: LARGER_STORAGE,
      addonName: "Larger storage",
      addonDescription: "Extra 1TB of cloud save",
      addonPrices: {
        [MONTHLY_INTERVAL]: 2,
        [YEARLY_INTERVAL]: 20
      }
    },
    {
      addonId: CUSTOMIZABLE_PROFILE,
      addonName: "Customizable profile",
      addonDescription: "Custom theme on your profile",
      addonPrices: {
        [MONTHLY_INTERVAL]: 2,
        [YEARLY_INTERVAL]: 20
      }
    }
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
        <div className="md:h-screen md:flex md:justify-center md:items-center">
          <div className="md:container md:max-w-[950px] md:rounded-xl md:drop-shadow-md md:bg-white md:p-4">
            <div className="grid grid-cols-1 md:grid-cols-10 bg-[url('../../public/assets/images/bg-sidebar-mobile.png')] bg-[var(--background-color)] bg-[size:100%_180px] bg-no-repeat md:bg-none">
              <div className="col-span-3">
                <div className="w-full md:h-full p-5 md:px-8 md:py-9 md:rounded-lg md:bg-[url('../../public/assets/images/bg-sidebar-desktop.png')] bg-no-repeat bg-[size:100%_100%]">
                  <div className="flex md:block items-center justify-center gap-x-4">
                    {STEPS_DATA.map((singleStep) => (
                      <Fragment key={singleStep.stepNumber}>
                        <SidebarStep
                          step={step}
                          singleStep={singleStep}
                          STEP_4={STEP_4}
                          STEP_5={STEP_5}
                        />
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-7">
                <StepOneSection
                  step={step}
                  setStep={setStep}
                  STEP_1={STEP_1}
                  STEP_2={STEP_2}
                />
                <StepTwoSection
                  step={step}
                  setStep={setStep}
                  STEP_1={STEP_1}
                  STEP_2={STEP_2}
                  STEP_3={STEP_3}
                  PLANS_DATA={PLANS_DATA}
                  plan={plan}
                  setPlan={setPlan}
                  CURRENCY={CURRENCY}
                  interval={interval}
                  handleIntervalToggle={handleIntervalToggle}
                  INTERVALS_DATA={INTERVALS_DATA}
                  YEARLY_INTERVAL={YEARLY_INTERVAL}
                  MONTHLY_INTERVAL={MONTHLY_INTERVAL}
                />
                <StepThreeSection
                  step={step}
                  setStep={setStep}
                  STEP_2={STEP_2}
                  STEP_3={STEP_3}
                  STEP_4={STEP_4}
                  ADDONS_DATA={ADDONS_DATA}
                  addons={addons}
                  CURRENCY={CURRENCY}
                  interval={interval}
                  INTERVALS_DATA={INTERVALS_DATA}
                  handleAddonToggle={handleAddonToggle}
                />
                <StepFourSection
                  step={step}
                  setStep={setStep}
                  STEP_2={STEP_2}
                  STEP_3={STEP_3}
                  STEP_4={STEP_4}
                  STEP_5={STEP_5}
                  plan={plan}
                  INTERVALS_DATA={INTERVALS_DATA}
                  interval={interval}
                  CURRENCY={CURRENCY}
                  ADDONS_DATA={ADDONS_DATA}
                  addons={addons}
                  totals={totals}
                />
                <StepFiveSection step={step} STEP_5={STEP_5} />
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
