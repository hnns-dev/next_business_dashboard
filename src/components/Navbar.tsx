import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b-2">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-1 ring-zinc-300 px-2">
        <img src="/search.svg" alt="" />
        <input
          type="text"
          placeholder="Search"
          className="w-52 p-2 bg-transparent outline-none"
        />
      </div>
      {/* Icons + User   */}
      <div className="flex items-center gap-4 justify-end w-full">
        <div className="bg-zinc-50 border rounded-full h-8 w-8 p-1 flex items-center justify-center cursor-pointer relative">
          <img src="/message.svg" alt="" />
          <div className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center bg-red-600 rounded-full text-white text-xs">
            2
          </div>
        </div>
        <div>
          <img
            src="/bell.svg"
            alt=""
            className="bg-zinc-50 border rounded-full h-8 w-8 p-1 flex items-center justify-center cursor-pointer"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-zinc-500 text-right">Admin</span>
        </div>
        <img src="/user.png" alt="" width={36} height={36} />
      </div>
    </div>
  );
};

export default Navbar;
