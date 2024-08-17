const Pagination = ({start, setStart, pages}) => {
  

  
  return (
    <div className="flex justify-center">
    <button
    disabled={start === 1}
        onClick={() => setStart(start - 1)}
        className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-teal-600 disabled:cursor-not-allowed disabled:bg-base-200 disabled:text-black dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
      >
        <div className="flex items-center -mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-1 rtl:-scale-x-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="mx-1 text-lg">Previous</span>

        </div>
      </button>

      {pages.map((btn, ind) => (
        <button
        onClick={() => setStart(btn)}
        key={ind} className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300
        ${btn === start ? 'bg-teal-600 text-white font-bold' : 'bg-white '} 
        transform  rounded-md sm:inline  hover:bg-teal-600  hover:text-white text-lg `}>
          {btn}
        </button>
      ))}

      <button
      disabled={start === pages.length || pages.length === 0}
        onClick={() => setStart(start + 1)}
        className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white  disabled:cursor-not-allowed disabled:bg-base-200 disabled:text-black rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-teal-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200"
      >
        <div className="flex items-center -mx-1">
          <span className="mx-1 text-lg">Next</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mx-1 rtl:-scale-x-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Pagination;
