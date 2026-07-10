import { Search, Tags } from "lucide-react";
import Input from "@/components/shared/Input";
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
  const handleSearchChange = (value: string) => {
    onSearchChange(value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onCategoryChange(event.target.value);
  };

  return (
    <section className="filters">
      <Input
        icon={Search}
        value={search}
        onChange={handleSearchChange}
        placeholder="Search products..."
        className="filters__search-wrapper"
        inputClassName="filters__search"
      />

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
