const Search = ({
  setSort,
  searchFunc,
  handleTime,
  handleRange,
  resetAll,
  maxPrice,
  minPrice,
  setmaxPrice,
  setminPrice,
  setCategory,
  setBrand,
  category,
  brand,
}) => {
  return (
    <div>
      {/* <div className="gird grid-cols-4 gap-4 w-full py-3 "> */}
      <div className="flex w-full py-3 flex-col md:flex-row justify-center items-center gap-5 ">
        <div className=" w-full md:w-auto">
          <select
            value={category}
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            className="border w-full p-4 rounded-lg"
          >
            <option hidden disabled selected value="">
              Filter By Category
            </option>

            <option value="Laptops">Laptops</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Tablets">Tablets</option>
            <option value="Desktops">Desktops</option>
            <option value="Wearables">Wearables</option>
            <option value="Monitors">Monitors</option>
            <option value="Accessories">Accessories</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Drones">Drones</option>
            <option value="Televisions">Televisions</option>
          </select>
        </div>

        <form className="w-full md:w-auto" onSubmit={searchFunc}>
          <div className="flex relative p-2 overflow-hidden border  rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-teal-400 focus-within:ring-teal-300 w-full md:w-auto">
            <input
              className="px-2 md:w-[250px] py-2 text-gray-700  placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Product Name"
              aria-label="Enter Job Title"
            />

            <button className="px-1 md:px-4 py-3 absolute top-1/2 -translate-y-1/2 right-4 md:right-1 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <div className="w-full md:w-auto">
          <select
            name="category"
            id="category"
            onChange={(e) => setSort(e.target.value)}
            className="border p-4 rounded-md w-full "
          >
            <option value="">Sort By Price</option>
            <option value="asc">Low To High</option>
            <option value="dsc">High To Low</option>
          </select>
        </div>
        <button onClick={handleTime} className="btn">
          Sort By Creation Time
        </button>
      </div>
      <div className=" flex flex-col md:flex-row gap-8 justify-center">
        <div className="w-full md:w-auto">
          <select
            value={brand}
            name="category"
            id="category"
            onChange={(e) => setBrand(e.target.value)}
            className="border p-4 rounded-lg w-full"
          >
            <option hidden disabled selected value="">
              Filter By Brand
            </option>

            <option value="Apple">Apple</option>
            <option value="Dell">Dell</option>
            <option value="HP">HP</option>
            <option value="Samsung">Samsung</option>
            <option value="Asus">Asus</option>
            <option value="Microsoft">Microsoft</option>
          </select>
        </div>
        <form onSubmit={handleRange} className="flex gap-2 items-center">
          <input
            placeholder="Min Price"
            onChange={(e) => setminPrice(e.target.value)}
            value={minPrice === 0 ? "" : minPrice}
            required
            className="py-2 px-3 border rounded-md"
            type="number"
            name="min"
            id=""
          />
          <input
            placeholder="Max Price"
            onChange={(e) => setmaxPrice(e.target.value)}
            value={maxPrice === 100000 ? "" : maxPrice}
            required
            className="py-2 px-3 border rounded-md"
            type="number"
            name="max"
            id=""
          />
          <input
            type="submit"
            className="py-2 text-lg px-6 rounded-md bg-teal-600 text-white"
            value={"Search"}
          />
        </form>
        <button onClick={resetAll} className="btn btn-warning">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Search;
