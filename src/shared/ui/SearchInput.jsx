import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";

function SearchInput({ query, setQuery, setFocused, focused }) {
  return (
    <div className="flex w-full items-center gap-3 h-10 p-3 pl-4 justify-between bg-white text-md rounded">
      <CiSearch className={`fill-black  ${focused ? "w-6 h-6" : "w-8 h-8"}`} />
      <input
        type="text"
        className="w-full rounded border-0 not-[]:focus:outline-none 
            focus:ring-0 focus:border-transparent focus:text-bold focus-visible:outline-none caret-cyan-950
             text-cyan-950 placeholder-gray-500 font-semibold placeholder:font-normal"
        placeholder="Что хочешь послушать?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
      />

      {query && (
        <MdOutlineClose
          onClick={() => setQuery("")}
          className="fill-black w-7 h-7 cursor-pointer"
        />
      )}
    </div>
  );
}

export default SearchInput;
