import React from 'react'

export default function spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg
        className="animate-spin h-10 w-10 mr-3 border-t-2 border-r-2 border-orange-500 rounded-full"
        viewBox="0 0 24 24"
      ></svg>
      Loading...
    </div>
  );
}
