import React, { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`sidebar transition-all duration-300 ease-in-out ${
        isExpanded ? "h-96" : "h-12"
      } bg-gray-800 text-white flex flex-col items-center justify-start pt-4`}
    >
      <button onClick={toggleSidebar} className="w-full">
        Menu
      </button>
      {isExpanded && (
        <>
          <Link href={`/`}>Home</Link>
          <Link href={`/gigi-task-management`}>Tasks Dashboard</Link>
        </>
      )}
    </div>
  );
}
