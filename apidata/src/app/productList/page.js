"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [prodata, setProdata] = useState([]);

  const getdata = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    setProdata(data.products);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      
      {/* Parent grid for two-column layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {prodata.map((item) => {
      
          return (
            <div
              className="border border-gray-200 rounded-lg p-4 flex flex-col items-center"
              key={item?.id}
            >
              <h3 className="text-lg font-semibold mb-2">{item?.title}</h3>
              <img
                src={item?.thumbnail}
                alt={item?.title}
                className="w-full h-48 object-contain rounded-lg shadow-md aspect-square"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
