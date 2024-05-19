import Image from "next/image";
import { SignedOut, SignedIn } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">

      <SignedOut>
        this is the home page, user should login to access recipes
      </SignedOut>
      <SignedIn>
        now user could see the recipes page
      </SignedIn>
    </div>
  );
}
