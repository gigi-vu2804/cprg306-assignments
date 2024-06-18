// week-8/page.js
"use client";

import FirebaseAuth from "./components/FirebaseAuth/firebase-auth"; // Adjusted filename
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, firebaseSignOut, error } = useUserAuth();

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="min-h-screen bg-amber-950 p-2 items-center">
      <div>
        <h1 className="text-3xl text-orange-200 font-bold">
          Shopping List App
        </h1>
        {user ? (
          <div>
            <div>
              <p className="text-orange-300">Welcome, {user.displayName}</p>
              <button
                className="p-1 mb-2 text-sm rounded bg-orange-300 hover:bg-blue-500 hover:text-white"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            </div>
            <Link
              className="p-1 text-sm rounded bg-orange-300 hover:bg-blue-500 hover:text-white"
              href="/week-8/shopping-list"
            >
              Continue to your Shopping List
            </Link>
          </div>
        ) : (
          <FirebaseAuth />
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </main>
  );
}
