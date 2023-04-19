import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex justify-center h-screen pt-4">
      <div className="bg-gray-200 m-4 p-4 border-1 border-transparent rounded-xl flex flex-col sm:justify-center items-center h-5/6 w-fit">
        <div className="relative sm:w-1/2 sm:h-1/2 md:w-5/12 h-1/3 w-3/4 border border-transparent rounded-xl">
          <Image
            className="overflow-hidden rounded-xl border"
            src="/image-qr-code.png"
            fill={true}
            alt="Qr Code"
          ></Image>
        </div>
        <div className="sm:p-12 sm:w-1/2 p-8 w-3/4">
          <h1 className="font-bold text-2xl text-center">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-md pt-4 text-center">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </main>
  );
}
