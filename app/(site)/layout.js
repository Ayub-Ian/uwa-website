import "../globals.css";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Footer from "../components/footer";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Ushauri Wellness Africa",
  description:
    "Non-profit organization dedicated to promoting mental health, drug and substance awareness, financial literacy and civic education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="tw-dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${montserrat.className} tw-py-2.5`}>
        <header className="tw-py-1">
          <div className="tw-px-4">
            <div className="tw-flex tw-items-center">
              <Image
                src="/logo.png"
                alt="Ushauri Wellness Africa logo"
                width={61}
                height={42}
              />
              <h1 className="tw-text-[#B12D68] tw-font-extrabold tw-text-xl tw-hidden md:tw-block ">
                Ushauri Wellness Africa
              </h1>
            </div>
          </div>
        </header>
        <main className="tw-px-2.5 tw-min-h-screen tw-flex tw-flex-col ">{children}
        <Footer />
        </main>

        
      </body>
    </html>
  );
}
