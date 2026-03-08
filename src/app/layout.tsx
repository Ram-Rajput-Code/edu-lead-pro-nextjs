import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduLead CRM",
  description: "Education Management CRM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <div className="flex justify-center items-center py-3 border-t border-gray-200">
  <div className="bg-white shadow-lg rounded-xl px-6 py-3 text-gray-700 text-sm hover:shadow-xl transition duration-300">
    Powered By <span className="font-semibold text-indigo-600">Ram IT Solutions</span>
  </div>
</div>
</body>
    </html>
  );
}
