import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center p-4">
      {/* Search Bar */}
      <div className="hidden md:flex">
        <img src="/search.svg" alt="" />
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full px-2 py-1 ml-1"
        />
      </div>
      {/* Icons + User   */}
      <div className="flex items-center gap-6">
        <img
          src="/message.svg"
          alt=""
          className="bg-zinc-50 border rounded-full h-8 w-8 p-1 flex items-center justify-center cursor-pointer"
        />
      </div>
      <div>
        <img
          src="/bell.svg"
          alt=""
          className="bg-zinc-50 border rounded-full h-8 w-8 p-1 flex items-center justify-center cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
