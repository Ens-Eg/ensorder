"use client";
import StepFour from "@/components/Steps/StepFour";
import StepOne from "@/components/Steps/StepOne";
import StepThree from "@/components/Steps/StepThree";
import StepTwo from "@/components/Steps/StepTwo";
import Image from "next/image";
import Logo from "../../public/logo.png";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState();
  const [step, setStep] = useState(1);
  const [description, setDescription] = useState([
    {
      step: 1,
      title: "دعنا نبدأ باسم نشاطك",
      description: "من فضلك قم بإدخال اسم نشاطك لتسهيل عملية التواصل معك",
    },
    {
      step: 2,
      description: " من فضلك قم بإدخال اسمك ورقم الهاتف الخاص بك ",
      title: "معلوماتك الشخصية",
    },
    {
      step: 3,
      description: "من فضلك قم بإدخال نوع النشاط الخاص بك",
      title: "نوع النشاط",
    },
    {
      step: 4,
      description: "من فضلك قم بادخال نوع النشاط الخاص بك",
      title: "نوع النشاط",
    },
  ]);
  const viewDescription = description.find((item) => item.step === step);
  const [playAnimation, setPlayAnimation] = useState(true);

  const handleSubmit = () => {
    if (playAnimation) {
      setPlayAnimation(false);
      setTimeout(() => {
        setPlayAnimation(true);
      }, 0);
    } else {
      setPlayAnimation(true);
    }
  };
  return (
    <main className="flex min-h-screen">
    
      <section
        className={`mostafa w-full hidden lg:flex  md:w-1/3  ] text-white p-8  flex-col justify-center  
        }`}
      >
      
        <div className="text flex flex-col gap-4 flex-1  justify-center">
          <h2
            className={`text-2xl font-bold mb-4  ${
              playAnimation ? "fadeInUp" : ""
            }`}
            style={{
              animationDelay: "0.2s",
            }}
          >
            نموذج طلب الخدمة
          </h2>
          <p
            className={`mb-8  ${playAnimation ? "fadeInUp" : ""}`}
            style={{
              animationDelay: "0.3s",
            }}
          >
يوفر نموذج طلب خدمات الويب من شركة ENS حلاً مبسطًا للأفراد والشركات لطلب تصميم وتطوير مواقع إلكترونية باحترافية. يتيح لك تحديد احتياجاتك بدقة، سواء كانت مواقع تجارية، متاجر إلكترونية، أو حلول مخصصة. املأ النموذج بسهولة، وسيتواصل معك فريقنا لتقديم الاستشارة المناسبة وتنفيذ مشروعك بأعلى جودة.
          </p>
          <p
            className={`text-xs ${playAnimation ? "fadeInUp" : ""}`}
            style={{
              animationDelay: "0.4s",
            }}
          >
      جميع الحقوق محفوظة
          </p>
        </div>
      </section>

      <section className="flex-1 p-10 flex flex-col justify-center bg-white">
        <div className="xl:max-w-[60%] md:max-w-[70%] w-full mx-auto">
          <div
            className={`w-[150px] mb-10 ${playAnimation ? "fadeInUp" : ""}`}
            style={{
              animationDelay: "0.1s",
            }}
          >
           <Image src={Logo} alt="Logo" width={150} height={50} />

          </div>
          <h1
            className={`text-2xl font-bold mb-2 ${
              playAnimation ? "fadeInUp" : ""
            }`}
            style={{
              animationDelay: "0.2s",
            }}
          >
            {viewDescription.title}
          </h1>
          <p
            className={`text-gray-600 mb-6 ${playAnimation ? "fadeInUp" : ""}`}
            style={{
              animationDelay: "0.3s",
            }}
          >
            {viewDescription.description}
          </p>
          {step === 1 && (
            <StepOne
              data={data}
              setStep={setStep}
              handleSubmit={handleSubmit}
              setData={setData}
            />
          )}
          {step === 2 && (
            <StepTwo
              data={data}
              setStep={setStep}
              handleSubmit={handleSubmit}
              setData={setData}
            />
          )}
          {step === 3 && (
            <StepThree
              data={data}
              setStep={setStep}
              handleSubmit={handleSubmit}
              setData={setData}
            />
          )}
          {step === 4 && (
            <StepFour
              data={data}
              setStep={setStep}
              handleSubmit={handleSubmit}
              setData={setData}
            />
          )}

          <div
            className={`flex gap-3 mt-6 justify-center ${
              playAnimation ? "fadeInUp" : ""
            }`}
            style={{
              animationDelay: "1.2s",
            }}
          >
            {description.map((item) => (
              <div
                key={item.step}
                className={`w-3 h-3 bg-gray-200 rounded-full duration-300 ${
                  item.step === step ? "!bg-[var(--primary-color)]" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
