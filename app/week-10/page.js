"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import SignIn from "./components/SignIn";

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
              <p className="text-orange-300">
                Welcome, {user.displayName ? user.displayName : user.email}
              </p>
              <button
                className="p-1 mb-2 text-sm rounded bg-orange-600 hover:bg-blue-500 hover:text-white"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            </div>
            <Link
              className="p-1 text-sm rounded bg-orange-600 hover:bg-blue-500 hover:text-white"
              href="/week-10/shopping-list"
            >
              Continue to your Shopping List
            </Link>
          </div>
        ) : (
          <SignIn />
        )}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </main>
  );
}
