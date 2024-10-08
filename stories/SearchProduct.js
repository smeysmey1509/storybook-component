import "./searchProduct.css";

export const createSearchProduct = ({
  placeholder,
  fontSize,
  searchProductBackgroundColor,
} = {}) => {
  const products = [
    { name: "Tesla Model S", brand: "Tesla" },
    { name: "Tesla Model 3", brand: "Tesla" },
    { name: "Ford Mustang", brand: "Ford" },
    { name: "Ford F-150", brand: "Ford" },
    { name: "Chevrolet Camaro", brand: "Chevrolet" },
    { name: "Chevrolet Malibu", brand: "Chevrolet" },
    { name: "BMW 3 Series", brand: "BMW" },
    { name: "BMW X3", brand: "BMW" },
    { name: "Audi A3", brand: "Audi" },
    { name: "Audi Q5", brand: "Audi" },
    { name: "Chevrolet Silverado", brand: "Chevrolet" },
    { name: "BMW 5 Series", brand: "BMW" },
    { name: "Ford Escape", brand: "Ford" },
    { name: "Audi A4", brand: "Audi" },
    { name: "Tesla Model Y", brand: "Tesla" },
    { name: "Ford Focus", brand: "Ford" },
    { name: "Chevrolet Equinox", brand: "Chevrolet" },
    { name: "BMW Z4", brand: "BMW" },
    { name: "Audi A6", brand: "Audi" },
    { name: "Tesla Roadster", brand: "Tesla" },
  ];

  const brands = [...new Set(products.map((product) => product.brand))];
  const searchProduct = document.createElement("div");
  searchProduct.classList = "search-product";
  searchProduct.style.backgroundColor = searchProductBackgroundColor;

  const search = document.createElement("div");
  search.classList = "search";

  const searchInput = document.createElement("input");
  searchInput.type = "search";
  searchInput.placeholder = placeholder;
  searchInput.style.fontSize = fontSize;
  searchInput.style.outline = "none";
  searchInput.style.border = "none";

  const filterIcon = document.createElement("i");
  filterIcon.classList = "fa-solid fa-filter";

  const filterPopup = document.createElement("ul");
  filterPopup.classList = "filter-popup";
  filterPopup.style.display = "none"; // Initially hidden

  // Add Clear Filter option
  const clearFilterItem = document.createElement("li");
  clearFilterItem.textContent = "Clear Filter";
  clearFilterItem.style.fontWeight = "bold"; // Highlight Clear Filter
  clearFilterItem.style.cursor = "pointer"; // Indicate it's clickable
  filterPopup.appendChild(clearFilterItem);

  // Add brand filter options
  brands.forEach((brand) => {
    const filterPopupItem = document.createElement("li");
    const brandTitle = document.createElement("span");
    brandTitle.textContent = brand;
    filterPopupItem.append(brandTitle);
    filterPopup.appendChild(filterPopupItem);

    // Add click event to filter by brand
    filterPopupItem.addEventListener("click", () => {
      searchInput.value = ""; // Clear search input when filtering by brand
      filterProductsByBrand(brand);
      filterPopup.style.display = "none"; // Hide popup after selecting brand
    });
  });

  // Add click event to clear the filter
  clearFilterItem.addEventListener("click", () => {
    searchInput.value = ""; // Clear search input
    filterProducts(); // Show all products
    filterPopup.style.display = "none"; // Hide popup after clearing filter
  });

  const list = document.createElement("div");
  list.classList = "list";

  const listProduct = document.createElement("ul");
  listProduct.className = "product-list";

  // Function to filter and update the product list based on search input
  const filterProducts = () => {
    const query = searchInput.value.toLowerCase();
    listProduct.innerHTML = ""; // Clear the list before updating

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    filteredProducts.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${product.name}`;
      listProduct.appendChild(listItem);
    });
  };

  // Function to filter products by brand
  const filterProductsByBrand = (brand) => {
    listProduct.innerHTML = ""; // Clear the list before updating

    const filteredProducts = products.filter(
      (product) => product.brand.toLowerCase() === brand.toLowerCase()
    );

    filteredProducts.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${product.name}`;
      listProduct.appendChild(listItem);
    });
  };

  // Initial population of the product list
  filterProducts();

  // Add event listener to search input for filtering products
  searchInput.addEventListener("input", filterProducts);

  // Toggle the popup when clicking the filter icon
  filterIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from propagating to document
    filterPopup.style.display =
      filterPopup.style.display === "none" ? "block" : "none";
  });

  // Hide the popup when clicking outside
  document.addEventListener("click", () => {
    filterPopup.style.display = "none";
  });

  // Prevent closing the popup when clicking inside
  filterPopup.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  searchProduct.append(search);
  search.appendChild(searchInput);
  search.appendChild(filterIcon);
  searchProduct.appendChild(list);

  // Append filterPopup to search after appending filterIcon
  search.appendChild(filterPopup);

  list.append(listProduct);

  return searchProduct;
};
