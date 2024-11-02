"use client";
import React from 'react';

const Page = ({ params }) => {
  const lecture = params?.lecture || []; // Fallback to empty array if lecture is undefined

  console.log(lecture);

  return (
    <div>
      <h1>{lecture[0] || "No Lecture"}</h1>
      <h1>{lecture[1] ? `${lecture[1]} of my college` : "College not specified"}</h1>
    </div>
  );
};

export default Page;
