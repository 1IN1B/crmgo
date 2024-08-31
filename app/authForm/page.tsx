"use client";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { useAuth } from "@/app/hooks/useAuth";


export default function AuthPage() {

  console.log(useAuth())
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Access the form data
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // Log the data to the console
    console.log("Username:", username);
    console.log("Password:", password);

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const { success } = await res.json();
    if (success) {    
      router.push("/");
      router.refresh();
    } else {
      alert("Login failed");
    }

    // Handle login logic here
    // You can redirect using router.push('/some-path') after successful login
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center gap-20  relative overflow-hidden"
      
    >
      {" "}
      <style>
        {`
        #imager {
  animation: zoom 300s linear infinite;
}

@keyframes zoom {
  0% { transform: scale(1); }
  50% { transform: scale(3); }
  100% { transform: scale(1); }
}

        `}
      </style>
      <img
        id="imager"
        src="https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 object-cover w-full h-full transform scale-110 transition duration-500"
      />
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md opacity-90">
        <div className="flex justify-center mb-4">
          <p className="font-extrabold text-5xl">crmgo</p>
        </div>
        <h2 className="font-bold text-center text-gray-800">Please login</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="w-full p-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-black rounded hover:bg-slate-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
      <div className="hidden lg:block ">
        <h1 className="text-7xl text-white font-bold backdrop-invert bg-black/40 p-5">
          We are Vocal for local.
        </h1>
        <h1 className="text-5xl text-white font-bold backdrop-invert bg-black/40 w-fit p-5">
          We make it global
        </h1>
      </div>
    </div>
  );
}
