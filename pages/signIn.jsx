import React from "react";
import { auth, googleAuthProvider } from "../lib/firebase";

const signIn = () => {
  return (
    <main>
      hello
      <SignInButton />
      <SignOutButton />
    </main>
  );
};

const SignInButton = () => {
  const googleSignIn = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={googleSignIn}>
      <img src={"/google.png"} /> Sign in with Google
    </button>
  );
};

const SignOutButton = () => {
  const googleSignOut = () => {
    auth.signOut();
  };
  return <button onClick={googleSignOut}>Sign Out</button>;
};

export default signIn;
