import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { searchArtists, getArtistAlbums } from "@shared/api/spotifyClient";
import { useDebounce } from "use-debounce";
import { useLocation } from "@tanstack/react-router";

export default function useArtistSearch() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [id, setId] = useState("");
  const [historySearch, setHistorySearch] = useState([]);
  const [debouncedQuery] = useDebounce(query, 500);
  const location = useLocation();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["tracks", debouncedQuery],
    queryFn: () => searchArtists(debouncedQuery),
    enabled: Boolean(debouncedQuery?.trim()),
    retry: 1,
  });

  useEffect(() => {
    const restoredQuery = location.state?.searchQuery || "";
    if (restoredQuery) {
      setQuery(restoredQuery);
      setFocused(true);
    }
  }, [location.state]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("historySearch") || "[]");
    setHistorySearch(saved);
  }, []);

  const addToHistory = (artist) => {
    setHistorySearch((prev) => {
      const exists = prev.some((a) => a.id === artist.id);
      if (exists) return prev;
      const updated = [artist, ...prev];
      localStorage.setItem("historySearch", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromHistory = (id) => {
    const updated = historySearch.filter((item) => item.id !== id);
    setHistorySearch(updated);
    localStorage.setItem("historySearch", JSON.stringify(updated));
  };

  const clearHistory = () => {
    localStorage.clear();
    setHistorySearch([]);
  };

  const navBack = () => {
    if (query !== "") {
      setQuery("");
      setFocused(true);
    } else {
      setFocused(false);
    }
  };

  return {
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
    addToHistory,
    removeFromHistory,
    clearHistory,
    onSelectArtist: (artist) => {
      setId(artist.id);
      getArtistAlbums(artist.id);
      addToHistory(artist);
    },
  };
}
