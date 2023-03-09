import { useState, useEffect } from "react";

function Search({ database, searchResult, setSearchResult, /*setShowList, setShowDetail*/ }) {
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    const filteredResult =
      searchKeyword.length > 0
        ? database.filter((item) => {
            return item.name.toLowerCase().includes(searchKeyword);
          })
        : [];

    const uniqueResults = filteredResult.filter((result) => {
      return !searchResult.some(
        (existingResult) => existingResult.id === result.id
      );
    });
    setSearchResult(uniqueResults);
  }, [searchKeyword]);

  function handleChange(e) {
    const keyword = e.target.value.toLowerCase();
    setSearchKeyword(keyword);
    // setShowList(true);
    // setShowDetail(false);
  }


  return (
    <div>
      <form>
        <div className="relative mt-16 mx-10">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-amber-500"
            placeholder="Search keyword"
            value={searchKeyword}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;