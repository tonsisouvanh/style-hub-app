// Login.tsx

import React, { useState } from "react";

const Login: React.FC = () => {
  // const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Implement login logic here
    // If login is successful, redirect to the home page
    // router.push("/");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-center text-3xl font-bold">Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border-gray-300 p-3 focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-4 w-full rounded-md border-gray-300 p-3 focus:border-blue-500"
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-md bg-blue-500 p-3 text-white hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
