import "@/App.css";

import Filters from "./Filters";
import ProductList from "./ProductList";
import ProductState from "@/components/shared/ProductState";

import useFetch from "@/hooks/useFetch";
import useFilters from "@/hooks/useFilters";
import useDebounce from "@/hooks/useDebounce";

import type { ProductsResponse } from "@/types/product";

const API = {
  PRODUCTS_PAGINATED: "https://dummyjson.com/products",
  CATEGORIES: "https://dummyjson.com/products/category-list",
  PRODUCTS_BY_CATEGORY: "https://dummyjson.com/products/category/",
  SEARCH: "https://dummyjson.com/products/search?q=",
};

const CatalogPage = () => {
  const { search, selectedCategory, onSearchChange, onCategoryChange } =
    useFilters();

  const debouncedSearch = useDebounce(search);
  const normalizedSearch = debouncedSearch.trim().toLowerCase();

  const productsUrl = normalizedSearch
    ? `${API.SEARCH}${encodeURIComponent(normalizedSearch)}`
    : selectedCategory
      ? `${API.PRODUCTS_BY_CATEGORY}${selectedCategory}`
      : API.PRODUCTS_PAGINATED;

  const {
    data: productsData,
    isLoading: productsLoading,
    error: productsError,
    refetch,
  } = useFetch<ProductsResponse>(productsUrl);

  const { data: categoriesData } = useFetch<string[]>(API.CATEGORIES);

  const categories = categoriesData ?? [];

  const products = productsData?.products ?? [];

  return (
    <>
      <h1>Catalog Page</h1>

      <Filters
        search={search}
        onSearchChange={onSearchChange}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />

      <ProductState
        isLoading={productsLoading}
        error={productsError}
        isEmpty={!productsLoading && !productsError && products.length === 0}
        onRetry={refetch}
      />

      {!productsLoading && !productsError && (
        <ProductList products={products} />
      )}
    </>
  );
};

export default CatalogPage;
