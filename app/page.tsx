"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-slate-950 p-2 text-center">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Smart Inventory Management</h1>
        <p className="text-lg text-gray-600">
          Track stock instantly, reduce manual errors, and manage your products
          with ease. Our system helps you stay organized and operate
          efficiently.
        </p>

        <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
          <Link
            href="/sign-in"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white rounded-xl shadow hover:shadow-lg active:scale-95 transform transition-all"
          >
            Sign In
          </Link>

          <Link
            href="/learn-more"
            className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 text-white rounded-xl shadow hover:shadow-lg active:scale-95 transform transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
}
