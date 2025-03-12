"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  domain: Yup.string()
    .required("من فضلك قم بإدخال اسم النشاط الخاص بك")
    .min(3, "اسم النشاط يجب ان يكون اطول من 3 حروف")
    .trim(),
});

const StepOne = ({
  setData,
  data,
  setStep,
  handleSubmit: handleSubmitParent,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    setData((prev) => ({ ...prev, domain: data.domain }));
    handleSubmitParent();
    setTimeout(() => {
      setStep(2);
    }, 0);
  };

  useEffect(() => {
    if (data?.domain) {
      setValue("domain", data.domain);
      trigger("domain");
    }
  }, [data]);

  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2 fadeInUp"
            style={{
              animationDelay: "0.4s",
            }}
          >
            اسم النشاط
          </label>
          <input
            {...register("domain")}
            type="text"
            placeholder="أدخل اسم النشاط"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 fadeInUp"
            style={{
              animationDelay: "0.5s",
            }}
          />
          {errors.domain && (
            <p className="text-red-500 text-xs mt-1">{errors.domain.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full shadow-md cursor-pointer fadeInUp   py-5 mt-8 bg-[var(--primary-color)] text-white  rounded hover:bg-[var(--secondary-color)] transition-colors"
          style={{
            animationDelay: "0.6s",
          }}
        >
          هيا نبدأ
        </button>
      </form>
    </div>
  );
};

export default StepOne;
