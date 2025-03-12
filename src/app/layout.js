import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import WowInitializer from "@/components/WowInitializer";
import "animate.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700", "900"], // اختر الأوزان التي تحتاجها
});

export const metadata = {
  title: "نموذج طلب الخدمة",
  description: "ENSEGYPT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <body className={`${notoKufi.className} antialiased`}>
        <WowInitializer />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
