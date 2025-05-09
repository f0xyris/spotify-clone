import React from "react";
import CartItem from "@shared/ui/CartItem";

export default function SearchHistory({
  historySearch,
  onSelect,
  onRemove,
  onClear,
}) {
  if (historySearch.length === 0) {
    return (
      <div className="flex flex-col mt-10 gap-5">
        <h2 className="font-bold text-xl">Слушай то, что нравится</h2>
        <h3 className="text-sm">
          Находи исполнителей, треки, подкасты и не только.
        </h3>
      </div>
    );
  }

  return (
    <>
      <CartItem
        data={historySearch}
        histored={true}
        onSelect={onSelect}
        onRemove={onRemove}
      />
      <button
        className="flex px-5 py-2 text-white rounded-xl font-semibold mx-auto mt-4 border-white border-1 cursor-pointer hover:bg-gray-700 transition-colors duration-300"
        onClick={onClear}
      >
        Очистить историю
      </button>
    </>
  );
}
