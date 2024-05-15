"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { StyledHeader } from "../global/Styled";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export default function TopNav() {

  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl">
      <StyledHeader tag="h2" children="Gallery" />
      
      <div className="flex flex-row">
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UploadButton endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}/>
            <UserButton/>
        </SignedIn>
      </div>
      
    </nav>
  );
}
