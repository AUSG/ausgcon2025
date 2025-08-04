"use client";

import { useState } from "react";

export default function TallyForm() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative flex w-full flex-col justify-center px-4 pt-10">
      {isLoaded ? undefined : (
        <div className="absolute inset-0 flex h-auto w-full items-center justify-center bg-gray-100">
          <svg
            className="h-8 w-8 animate-spin text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
      <iframe
        src="https://tally.so/embed/w447O5?alignLeft=1&hideTitle=1&transparentBackground=1"
        width="100%"
        height="480"
        title="AUSG로 문의하기"
        className="z-10"
        onLoad={() => setIsLoaded(true)}
      />
    </section>
  );
}
