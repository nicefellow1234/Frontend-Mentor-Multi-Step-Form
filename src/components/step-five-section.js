export default function StepFiveSection({ step, STEP_5 }) {
  return (
    <section
      className={`step5 ${
        step == STEP_5 ? "" : "hidden"
      } bg-white h-full py-[135px]`}
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
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, plase feel free to email us
            at support@loremgaming.com.
          </div>
        </div>
      </div>
    </section>
  );
}
