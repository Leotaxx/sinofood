import Image from "next/image";
import { SignedOut, SignInButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">

      <SignedOut>
        Please Log in to see full Cooking Instructions
        <div className="bg-green-400 text-white font-semibold m-4 py-3 px-6 w-20 rounded-lg shadow-md hover:bg-green-500 transition duration-300 ease-in-out">
          <SignInButton />
        </div>
      </SignedOut>

    </div>
  );
}
