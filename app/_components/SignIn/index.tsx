"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@worldcoin/mini-apps-ui-kit-react";
export const SignIn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.name?.slice(0, 10)} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  } else {
    return (
      <Button
        onClick={() => signIn()}
        radius="md"
        size="sm"
        variant="primary"
      >
        <span className="whitespace-nowrap">Sign In</span>
      </Button>
    );
  }
};
