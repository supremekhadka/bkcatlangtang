import { Unbounded } from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center">
        <div className="flex justify-center items-center gap-10">
          <h1 className={`${unbounded.className} sm:text-3xl`}>
            Bkc At Langtang
          </h1>
          {/* 17th October */}
        </div>
      </main>
    </>
  );
}
