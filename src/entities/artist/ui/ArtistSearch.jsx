import React from "react";
import SearchInput from "@shared/ui/SearchInput";
import CartItem from "@shared/ui/CartItem";
import SearchHistory from "@features/search/ui/SearchHistory";
import { IoMdArrowBack } from "react-icons/io";
import useArtistSearch from "@hooks/useArtistSearch";
import AllCategories from "@shared/ui/AllCategories";
import BackButton from "@shared/ui/BackButton";

export default function ArtistSearch() {
  const {
    query,
    setQuery,
    focused,
    setFocused,
    navBack,
    data,
    isLoading,
    isError,
    error,
    historySearch,
    removeFromHistory,
    clearHistory,
    onSelectArtist,
  } = useArtistSearch();

  return (
    <div className="max-w-md mx-auto">
      <div className="flex flex-col p-4">
        {!focused && <h1 className="pb-5 text-white text-3xl">Искать</h1>}
        <div className="flex items-center gap-4 w-full">
          {focused && <BackButton onClick={navBack} />}
          <SearchInput
            query={query}
            setQuery={setQuery}
            setFocused={setFocused}
            focused={focused}
          />
        </div>
      </div>

      {focused && query === "" ? (
        <SearchHistory
          historySearch={historySearch}
          onSelect={onSelectArtist}
          onRemove={removeFromHistory}
          onClear={clearHistory}
        />
      ) : !focused ? (
        <AllCategories />
      ) : (
        query !== "" && (
          <CartItem data={data} query={query} onSelect={onSelectArtist} />
        )
      )}

      {isLoading && (
        <p className="mt-10 flex items-center justify-center">Загрузка...</p>
      )}
      {isError && (
        <p className="text-red-500">
          Ошибка: {error?.message || "Неизвестная ошибка"}
        </p>
      )}
    </div>
  );
}
