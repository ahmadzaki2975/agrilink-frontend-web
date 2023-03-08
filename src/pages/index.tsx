import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <Head>
        <title>Agrilink</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={
          "bg-white min-h-screen flex flex-col gap-10 justify-center items-center transition duration-[600ms] " +
          (loading ? "" : "bg-green-100")
        }
      >
        {/* //? Pre-loading */}
        <div
          className={
            "flex flex-col justify-center items-center transition duration-[400ms] " +
            (loading ? "" : "hidden")
          }
        >
          <Image
            src="/Images/logo-primary.png"
            alt="Agrilink Primary Logo"
            width={162}
            height={101}
          />
          <p className="font-fredoka text-[18px]">
            Better Agriculture In A Digital Way
          </p>
        </div>
        {/* //? Post-loading */}
        <div
          className={
            "flex flex-col justify-center items-center transition duration-[1000ms] " +
            (loading ? "hidden" : "")
          }
        >
          <Image
            src="/Images/logo-secondary.png"
            alt="Agrilink Logo"
            width={162}
            height={101}
          />
          <p className="font-fredoka text-[18px] text-white">
            It's time to start your journey with us
          </p>
        </div>
      </main>
    </>
  );
}
