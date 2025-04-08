"use client";

import Image from "next/image";
import { useState } from "react";
import Popup from "../components/Popup";

export default function Home() {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState({ visible: false, message: "", isError: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://test-react.free.beeceptor.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setPopup({ visible: true, message: `Email registered: ${email}`, isError: false });
        setEmail("");
      } else {
        setPopup({ visible: true, message: "Failed to register email. Please try again.", isError: true });
      }
    } catch (error) {
      console.error("Error:", error);
      setPopup({ visible: true, message: "An error occurred. Please try again.", isError: true });
    }
  };

  const closePopup = () => setPopup({ ...popup, visible: false });

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundImage: "url('/background.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center sm:items-start w-full max-w-md"
        >
          <label htmlFor="email" className="text-sm font-medium">
            To subscribe our newsletter please register your email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Register
          </button>
        </form>
      </main>
      <Popup
        visible={popup.visible}
        message={popup.message}
        isError={popup.isError}
        onClose={closePopup}
      />
    </div>
  );
}
