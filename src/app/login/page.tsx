"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center bg-slate-900">
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        {/* FORM CONTAINER */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2 bg-slate-700 text-green-500">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>

          <button
            className="flex gap-4 p-4 ring-1 ring-lime-500 rounded-md"
            onClick={() => signIn("google")}
          >
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Google</span>
          </button>
          <button
            className="flex gap-4 p-4 ring-1 ring-lime-500 rounded-md"
            onClick={() => signIn("discord")}
          >
            <Image
              src="/discord.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Discord</span>
          </button>

          <p className="text-sm">
            Have a problem?
            <Link className="underline cursor-pointer" href="/contact">
              {" "}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
