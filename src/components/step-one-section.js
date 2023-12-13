import { useState } from "react";
import { z } from "zod";
import validator from "validator";

export default function StepOneSection({ step, setStep, STEP_1, STEP_2 }) {
  // STEP 1
  const [NAME_FIELD, EMAIL_ADDRESS_FIELD, PHONE_NUMBER_FIELD] = [
    "name",
    "emailAddress",
    "phoneNumber"
  ];
  const FORM_FIELDS_DATA = [
    {
      fieldId: [NAME_FIELD],
      fieldLabel: "Name",
      fieldPlaceholder: "e.g. Stephen King"
    },
    {
      fieldId: [EMAIL_ADDRESS_FIELD],
      fieldLabel: "Email Address",
      fieldPlaceholder: "e.g. stephenking@lorem.com"
    },
    {
      fieldId: [PHONE_NUMBER_FIELD],
      fieldLabel: "Phone Number",
      fieldPlaceholder: "e.g. +1 234 567 890"
    }
  ];
  const REQUIRED_ERROR = "This field is required";
  const FORM_VALIDATION_RULES = {
    [NAME_FIELD]: z
      .string({ REQUIRED_ERROR })
      .min(1, { message: REQUIRED_ERROR }),
    [EMAIL_ADDRESS_FIELD]: z
      .string({ REQUIRED_ERROR })
      .min(1, { message: REQUIRED_ERROR })
      .email(),
    [PHONE_NUMBER_FIELD]: z
      .string({ REQUIRED_ERROR })
      .min(1, { message: REQUIRED_ERROR })
      .refine(validator.isMobilePhone, {
        message: "Invalid phone number"
      })
  };
  const FORM = {
    [NAME_FIELD]: "",
    [EMAIL_ADDRESS_FIELD]: "",
    [PHONE_NUMBER_FIELD]: ""
  };
  const FORM_VALIDATION_INFO = {
    valid: false,
    errors: {}
  };
  const [formData, setFormData] = useState({});
  const [formValidationInfo, setFormValidationInfo] =
    useState(FORM_VALIDATION_INFO);
  const handleFormValidation = (currentFormData) => {
    let formValidationRulesObject = {};
    for (const formField in currentFormData) {
      formValidationRulesObject[formField] = FORM_VALIDATION_RULES[formField];
    }
    const FormSchema = z.object(formValidationRulesObject);
    const result = FormSchema.safeParse(currentFormData);
    let formValidationInfo = FORM_VALIDATION_INFO;
    if (result.success) {
      formValidationInfo.valid = true;
    } else {
      formValidationInfo.valid = false;
      let zodErrors = result.error.format();
      let errors = {};
      for (const formField in FORM) {
        if (zodErrors[formField]) {
          errors[formField] = zodErrors[formField]["_errors"];
        }
      }
      formValidationInfo.errors = errors;
    }
    setFormValidationInfo(formValidationInfo);
    return formValidationInfo;
  };
  const handleFormInputChange = (e) => {
    let currentFormData = formData;
    currentFormData[e.target.name] = e.target.value;
    setFormData(currentFormData);
    handleFormValidation(currentFormData);
  };
  const handleFirstStepNavigation = () => {
    let currentFormData = formData;
    let updatedFormData = {};
    for (const formField in FORM) {
      if (currentFormData[formField]) {
        updatedFormData[formField] = currentFormData[formField];
      } else {
        updatedFormData[formField] = FORM[formField];
      }
    }
    setFormData(updatedFormData);
    let updatedFormValidationInfo = handleFormValidation(updatedFormData);
    if (updatedFormValidationInfo.valid) {
      setStep(STEP_2);
    }
  };

  return (
    <section className={`step1 ${step == STEP_1 ? "" : "hidden"} md:bg-white`}>
      <div className="p-8 rounded-xl drop-shadow-lg md:rounded-none md:drop-shadow-none md:mt-0 mx-6 md:mx-0 md:px-24 md:pt-8 md:pb-2 bg-white h-full">
        <div>
          <h1 className="text-[28px] md:text-[33px] font-bold text-[var(--marine-blue-color)] mb-2">
            Personal info
          </h1>
          <div className="text-[15px] text-[var(--cool-gray-color)]">
            Please provide your name, email address and phone number.
          </div>
        </div>
        <div className="mt-8">
          {FORM_FIELDS_DATA.map((formField) => (
            <div key={formField.fieldId} className="mb-5">
              <div className="flex justify-between">
                <div className="text-[15px] text-[var(--marine-blue-color)]">
                  {formField.fieldLabel}
                </div>
                {formValidationInfo.errors[formField.fieldId] ? (
                  <div className="text-[13px] text-[var(--strawberry-red-color)]">
                    {formValidationInfo.errors[formField.fieldId].join(", ")}
                  </div>
                ) : null}
              </div>
              <div className="mt-1">
                <input
                  className={`p-3 py-[10px] text-[var(--marine-blue-color)] w-full rounded-md ${
                    formValidationInfo.errors[formField.fieldId]
                      ? "border-[1.5px] border-[var(--strawberry-red-color)] outline-[var(--strawberry-red-color)]"
                      : "border-[1px] border-[var(--cool-gray-color)] focus:border-[var(--purplish-blue-color)] focus:outline-[var(--purplish-blue-color)]"
                  }`}
                  placeholder={formField.fieldPlaceholder}
                  type="text"
                  name={formField.fieldId}
                  onChange={(e) => handleFormInputChange(e)}
                  onFocus={(e) => handleFormInputChange(e)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:flex mt-12 justify-end">
          <button
            className="p-3 px-6 rounded-lg bg-[var(--marine-blue-color)] hover:bg-[var(--marine-light-blue-color)] text-white text-[15px]"
            onClick={() => handleFirstStepNavigation()}
          >
            Next Step
          </button>
        </div>
      </div>
      <div className="md:hidden fixed w-full bottom-0 bg-white p-5 flex justify-end">
        <button
          className="p-3 px-6 rounded-lg bg-[var(--marine-blue-color)] hover:bg-[var(--marine-light-blue-color)] text-white text-[15px]"
          onClick={() => handleFirstStepNavigation()}
        >
          Next Step
        </button>
      </div>
    </section>
  );
}
