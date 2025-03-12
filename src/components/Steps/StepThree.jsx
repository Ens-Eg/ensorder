import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsArrowRight } from "react-icons/bs";
import { FaBuildingFlag, FaBuilding, FaUser } from "react-icons/fa6";
function StepThree({
  setData,
  data,
  setStep,
  handleSubmit: handleSubmitParent,
}) {
  const [types] = useState(["شركة", "مدرس أو مدرسة", "شخصي"]);
  const [selectedType, setSelectedType] = useState(null);
  useEffect(() => {
    if (data?.type) {
      setSelectedType(data.type);
    }
  }, [data]);
  return (
    <div>
      <div>
        {types.map((type, index) => (
          <div
            key={index}
            className={`checkbox-base gap-4 items-center select-none fadeInUp cursor-pointer duration-100 ${
              selectedType === type ? "active" : ""
            }`}
            style={{
              animationDelay:
                index === 0 ? "0.4s" : index === 1 ? "0.5s" : "0.6s",
            }}
            onClick={() => setSelectedType(type)}
          >
            <div className="checkbox-icon text-2xl text-[var(--primary-color)] ">
              {type === "شركة" && <FaBuildingFlag />}
              {type === "مدرس أو مدرسة" && <FaBuilding />}
              {type === "شخصي" && <FaUser />}
            </div>
            <div className="checkbox-base-text">{type}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => {
            handleSubmitParent();
            setTimeout(() => {
              setStep(2);
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
          onClick={() => {
            if (selectedType) {
              setData((prev) => ({ ...prev, type: selectedType }));
              handleSubmitParent();
              setTimeout(() => {
                setStep(4);
              }, 0);
            } else {
              toast.error("من فضلك قم باختيار نوع المتجر");
            }
          }}
          className="w-full cursor-pointer shadow-md fadeInUp  py-5 mt-8 bg-[var(--primary-color)] text-white  rounded hover:bg-[var(--secondary-color)] transition-colors"
          style={{
            animationDelay: "0.9s",
          }}
        >
          الخطوه التالية
        </button>
      </div>
    </div>
  );
}

export default StepThree;
