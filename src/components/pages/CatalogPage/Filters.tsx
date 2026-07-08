import { Search, Tags } from "lucide-react";

import type { ChangeEvent } from "react";

interface FiltersProps {
  search?: string;
  onSearchChange: (value: string) => void;
  categories?: string[];
  selectedCategory?: string;
  onCategoryChange: (value: string) => void;
}

const Filters = ({
  search = "",
  onSearchChange,
  categories = [],
  selectedCategory = "",
  onCategoryChange,
}: FiltersProps) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value);
  };

  return (
    <section className="filters">
      <div className="filters__search-wrapper">
        <Search size={20} className="filters__icon" />

        <input
          className="filters__search"
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="filters__select-wrapper">
        <Tags size={20} className="filters__icon" />

        <select
          className="filters__select"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All categories</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Filters;
