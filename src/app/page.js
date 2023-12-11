"use client";
import { useState } from "react";

export default function Home() {
  // GENERAL
  const [STEP_1, STEP_2, STEP_3, STEP_4] = [1, 2, 3, 4];
  const [step, setStep] = useState(STEP_3);

  // STEP 2
  const [ARCADE_PLAN, ADVANCED_PLAN, PRO_PLAN] = [1, 2, 3];
  const [MONTHLY_INTERVAL, YEARLY_INTERVAL] = [1, 2];
  const PLAN_INTERVAL_PRICES = {
    [MONTHLY_INTERVAL]: {
      [ARCADE_PLAN]: "$9/mo",
      [ADVANCED_PLAN]: "$12/mo",
      [PRO_PLAN]: "$15/mo",
    },
    [YEARLY_INTERVAL]: {
      [ARCADE_PLAN]: "$90/yr",
      [ADVANCED_PLAN]: "$120/yr",
      [PRO_PLAN]: "$150/yr",
    },
  };

  const [plan, setPlan] = useState(ARCADE_PLAN);
  const [interval, setInterval] = useState(MONTHLY_INTERVAL);

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
                          step == STEP_4
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
                <section
                  className={`step1 ${step == STEP_1 ? null : "hidden"}`}
                >
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
                <section
                  className={`step2 ${step == STEP_2 ? null : "hidden"}`}
                >
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
                        <div
                          className={`w-full mr-3 rounded-lg px-4 py-5 border-[2px] ${
                            plan == ARCADE_PLAN
                              ? "border-[var(--purplish-blue-color)] bg-[var(--magnolia-color)]"
                              : "border-[var(--light-gray-color)]"
                          } cursor-pointer`}
                          onClick={() => setPlan(ARCADE_PLAN)}
                        >
                          <img src="./assets/images/icon-arcade.svg" />
                          <div className="mt-10">
                            <div className="text-[16px] text-[var(--marine-blue-color)] font-semibold">
                              Arcade
                            </div>
                            <div className="text-[14px] font-medium text-[var(--cool-gray-color)]">
                              {PLAN_INTERVAL_PRICES[interval][ARCADE_PLAN]}
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
                        <div
                          className={`w-full mr-3 rounded-lg px-4 py-5 border-[2px] ${
                            plan == ADVANCED_PLAN
                              ? "border-[var(--purplish-blue-color)] bg-[var(--magnolia-color)]"
                              : "border-[var(--light-gray-color)]"
                          } cursor-pointer`}
                          onClick={() => setPlan(ADVANCED_PLAN)}
                        >
                          <img src="./assets/images/icon-advanced.svg" />
                          <div className="mt-10">
                            <div className="text-[16px] text-[var(--marine-blue-color)] font-semibold">
                              Advanced
                            </div>
                            <div className="text-[14px] font-medium text-[var(--cool-gray-color)]">
                              {PLAN_INTERVAL_PRICES[interval][ADVANCED_PLAN]}
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
                        <div
                          className={`w-full rounded-lg px-4 py-5 border-[2px] ${
                            plan == PRO_PLAN
                              ? "border-[var(--purplish-blue-color)] bg-[var(--magnolia-color)]"
                              : "border-[var(--light-gray-color)]"
                          } cursor-pointer`}
                          onClick={() => setPlan(PRO_PLAN)}
                        >
                          <img src="./assets/images/icon-pro.svg" />
                          <div className="mt-10">
                            <div className="text-[16px] text-[var(--marine-blue-color)] font-semibold">
                              Pro
                            </div>
                            <div className="text-[14px] font-medium text-[var(--cool-gray-color)]">
                              {PLAN_INTERVAL_PRICES[interval][PRO_PLAN]}
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
                          onClick={() =>
                            setInterval(
                              interval == MONTHLY_INTERVAL
                                ? YEARLY_INTERVAL
                                : MONTHLY_INTERVAL
                            )
                          }
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
                <section
                  className={`step3 ${step == STEP_3 ? null : "hidden"}`}
                >
                  <div className="px-24 pt-8 pb-2 h-full">
                    <div>
                      <h1 className="text-[33px] font-bold text-[var(--marine-blue-color)] mb-2">
                        Pick add-ons
                      </h1>
                      <div className="text-[15px] text-[var(--cool-gray-color)]">
                        You have the option of monthly or yearly billing.
                      </div>
                    </div>
                    <div className="mt-14 flex justify-between">
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
