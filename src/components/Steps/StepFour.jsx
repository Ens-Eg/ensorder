"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { BsArrowRight } from "react-icons/bs";
import toast from "react-hot-toast";

const validationSchema = Yup.object().shape({
  kind: Yup.string()
    .required("من فضلك قم بإدخال نوع النشاط")
    .min(3, "نوع النشاط يجب ان يكون اطول من 3 حروف")
    .trim(),
});

const StepFour = ({
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
  const [loading, setLoading] = useState(false);

  const onSubmitApi = async (data) => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://formsubmit.co/samehmeligy3629@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "نوع النشاط": data.kind,
            "رقم الهاتف": data.phone,
            "اسم الشخص": data.name,
            "اسم المتجر": data.domain,
            "نوع المتجر": data.type,
          }),
        }
      );

      if (res.ok) {
        toast.success("تم إرسال الطلب بنجاح");
        setTimeout(() => {
          setData(null);
          handleSubmitParent();
        }, 0);
        setTimeout(() => {
          setStep(1);
        }, 1);
      } else {
        toast.error("حدث خطأ أثناء إرسال الطلب");
      }
    } catch (error) {
      toast.error("حدث خطأ أثناء إرسال الطلب");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (dat) => {
    onSubmitApi({ ...data, kind: dat.kind });
  };

  useEffect(() => {
    if (data?.domain) {
      setValue("domain", data.domain);
      trigger("domain");
    }
  }, [data]);

  return (
    <div className="">
      {loading && (
        <div
          style={{
            background: "rgba(28, 21, 21, 0.31)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            border: "1px solid rgba(28, 21, 21, 0.3)",
          }}
          className="fixed inset-0  z-50 flex items-center justify-center"
        >
          <div className="w-10 h-10  border-t-transparent border-b-4 border-[var(--primary-color)] rounded-full animate-spin"></div>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-2 fadeInUp"
            style={{
              animationDelay: "0.4s",
            }}
          >
            نوع النشاط
          </label>
          <input
            {...register("kind")}
            type="text"
            placeholder="أدخل نوع النشاط"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 fadeInUp"
            style={{
              animationDelay: "0.5s",
            }}
          />
          {errors.kind && (
            <p className="text-red-500 text-xs mt-1">{errors.kind.message}</p>
          )}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => {
              handleSubmitParent();
              setTimeout(() => {
                setStep(3);
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
            ارسال
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepFour;
