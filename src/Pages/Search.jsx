const Search = () => {
  return (
    <form>
      <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
        <input
          className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
          type="text"
          name="search"
          placeholder="Enter Job Title"
          aria-label="Enter Job Title"
        />

        <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
