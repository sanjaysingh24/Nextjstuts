"use client"
import { useState } from "react";
import { adduser } from "@/utils/services/curdoperations";

export default function Home() {
  const [formData, setFormData] = useState({
    Name: "",
    Address: "",
    About: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
  try{
       let senddaata = await adduser(formData);
       console.log(senddaata);
  }catch(err){
    console.log(err);
  }
    setFormData({ name: "", address: "", about: "" });
  };

  return (
    <div className="mt-[200px] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">User Information</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Address Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* About Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              About
            </label>
            <textarea
              name="About"
              value={formData.About}
              onChange={handleChange}
              placeholder="Tell us about yourself"
              className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring focus:ring-blue-200"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
