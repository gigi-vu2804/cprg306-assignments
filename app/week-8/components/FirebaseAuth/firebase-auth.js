"use client";
import { useEffect, useRef } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { auth } from "../../_utils/firebase"; // Adjust the path if needed
import "./FirebaseAuth.css"; // Import the custom CSS file

const FirebaseAuth = () => {
  const uiRef = useRef(null);
  const uiInstanceRef = useRef(null);

  useEffect(() => {
    if (!uiInstanceRef.current) {
      uiInstanceRef.current =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(auth);
    }

    uiInstanceRef.current.start(uiRef.current, {
      signInOptions: [
        {
          provider: GithubAuthProvider.PROVIDER_ID,
          requireDisplayName: true,
        },
        {
          provider: GoogleAuthProvider.PROVIDER_ID,
          requireDisplayName: true,
        },
      ],
      signInFlow: "popup",
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          return false; // Avoid redirects after sign-in.
        },
      },
    });

    return () => {
      if (uiInstanceRef.current) {
        uiInstanceRef.current.reset();
      }
    };
  }, []);

  return <div ref={uiRef}></div>;
};

export default FirebaseAuth;
