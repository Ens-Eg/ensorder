"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { BsArrowRight } from "react-icons/bs";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("من فضلك قم بإدخال اسم المتجر")
    .min(3, "اسم المتجر يجب ان يكون اطول من 3 حروف")
    .trim(),
  phone: Yup.string()
    .required("من فضلك قم بإدخال رقم الهاتف")
    .trim(),
});

const StepTwo = ({
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
    setData((prev) => ({ ...prev, name: data.name, phone: data.phone }));
    handleSubmitParent();
    setTimeout(() => {
      setStep(3);
    }, 0);
  };

  useEffect(() => {
    if (data?.name && data?.phone) {
      setValue("name", data.name);
      setValue("phone", data.phone);
      trigger("name");
      trigger("phone");
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
            الاسم الكامل
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="أدخل الاسم الكامل"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 fadeInUp"
            style={{
              animationDelay: "0.5s",
            }}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2 fadeInUp"
            style={{
              animationDelay: "0.6s",
            }}
          >
            رقم الهاتف
          </label>
          <input
            {...register("phone")}
            type="number"
            placeholder="أدخل رقم الهاتف"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 fadeInUp"
            style={{
              animationDelay: "0.7s",
            }}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => {
              handleSubmitParent();
              setTimeout(() => {
                setStep(1);
              }, 0);
            }}
            type="button"
            className="w-[80px]  group shadow-md flex items-center justify-center  text-2xl cursor-pointer fadeInUp   mt-8 bg-[var(--tertiary-color)]   rounded hover:bg-[#151c3426] transition-colors"
            style={{
              animationDelay: "0.8s",
            }}
          >
            <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <button
            type="submit"
            className="w-full cursor-pointer shadow-md fadeInUp  py-5 mt-8 bg-[var(--primary-color)] text-white  rounded hover:bg-[var(--secondary-color)] transition-colors"
            style={{
              animationDelay: "0.9s",
            }}
          >
            الخطوه التالية
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
