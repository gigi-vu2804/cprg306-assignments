import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context"; // Adjust the path

export default function SignIn() {
  const { signInEmailPassword, signUpEmailPassword, gitHubSignIn, error } =
    useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [localError, setLocalError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError(null);
    try {
      if (isSignUp) {
        await signUpEmailPassword(email, password);
      } else {
        await signInEmailPassword(email, password);
      }
    } catch (err) {
      setLocalError(err.message);
    }
  };

  const handleGitHubSignIn = async () => {
    setLocalError(null);
    try {
      await gitHubSignIn();
    } catch (err) {
      setLocalError(err.message);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 my-2 mr-2 text-black rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-1 my-2 mr-2 text-black rounded"
          />
          <button
            type="submit"
            className="p-2 text-sm rounded bg-orange-300 hover:bg-blue-500 hover:text-white"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="p-1 my-2 mr-2 text-sm rounded bg-orange-600 hover:bg-blue-500 hover:text-white"
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </button>
        {(localError || error) && (
          <p className="text-red-500">{localError || error}</p>
        )}
      </div>
      <div>
        <button
          onClick={handleGitHubSignIn}
          className="p-1 my-2 mr-2 text-sm rounded bg-orange-800 hover:bg-blue-500 hover:text-white"
        >
          Sign In with GitHub
        </button>
      </div>
    </div>
  );
}
