import { useState } from "react";

const useFilters = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const onSearchChange = (value: string) => {
    setSearch(value);
  };

  const onCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("");
  };

  return {
    search,
    selectedCategory,
    onSearchChange,
    onCategoryChange,
    resetFilters,
  };
};

export default useFilters;
