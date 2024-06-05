import { useEffect } from "react";
import UseFireStore from "../../firebase/UseFireStore";
import { filterProductsBySearch } from "../../Store/productsStore";
import { useDispatch } from "react-redux";

import "./style.css";
const FilterBySearch = () => {
  const { products } = UseFireStore();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProductsBySearch(products));
  }, [products, dispatch]);
  const handleInput = (e) => {
    const inputValue = e.target.value;
    const filteredItems = products.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    dispatch(
      filterProductsBySearch(inputValue === "" ? products : filteredItems)
    );
  };

  return (
    <form
      className="bg-white py-3 px-2 "
      style={{borderRadius: "10px" }}
    >
      <input
        style={{
          width: "100%",
          borderRadius: "30px",
          border: "1px solid black",
        }}
        type="text"
        placeholder="Search Product"
        onChange={handleInput}
        className="form-group py-2 px-3 "
      />
    </form>
  );
};

export default FilterBySearch;
