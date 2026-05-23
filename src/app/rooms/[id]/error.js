"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { CircleChevronLeft } from "@gravity-ui/icons";
import { AlertTriangle, RefreshCcw } from "lucide-react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 px-6">
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-2xl rounded-[32px] border border-orange-100 bg-white/80 p-10 text-center shadow-[0_20px_80px_rgba(255,190,120,0.18)] backdrop-blur-xl">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-300 shadow-lg shadow-orange-200">
          <AlertTriangle size={45} className="text-white" />
        </div>

        {/* Error Code */}
        <h1 className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-7xl font-extrabold text-transparent">
          Error
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Something Went Wrong
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-gray-500">
          An unexpected error occurred while loading this page. Please try again
          or return to the homepage.
        </p>

        {/* Optional Error Message */}
        {error?.message && (
          <div className="mt-6 rounded-2xl border border-orange-100 bg-orange-50 p-4 text-sm text-orange-500">
            {error.message}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            radius="full"
            onPress={() => reset()}
            className="bg-gradient-to-r from-orange-400 to-amber-300 px-7 py-6 text-base font-semibold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:scale-105"
          >
            <RefreshCcw size={18} />
            Try Again
          </Button>

          <Link href="/">
            <Button
              radius="full"
              variant="bordered"
              className="border-orange-200 px-7 py-6 text-base font-medium text-orange-500 hover:bg-orange-50"
            >
              <CircleChevronLeft />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
