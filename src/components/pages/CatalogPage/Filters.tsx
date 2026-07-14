import { Search, Tags } from "lucide-react";
import type { ChangeEvent } from "react";

import Card from "@/components/shared/Card";
import Input from "@/components/shared/Input";

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
    <Card className="filters">
      <Input
        icon={Search}
        value={search}
        onChange={handleSearchChange}
        placeholder="Search products..."
        className="filters__search-wrapper"
      />

      <div className="filters__select-wrapper">
        <Tags size={20} className="filters__icon" />

        <select
          className="select"
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
    </Card>
  );
};

export default Filters;
