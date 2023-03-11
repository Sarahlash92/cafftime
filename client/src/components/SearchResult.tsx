import React from 'react';

type SearchResultProps = {
   searchResult:  Array<{
    _id: string;
    id: string,
    name: string,
    baseAmount: number,
    caffeine: number,
    imageUrl: string
 }> ,
   setSelectedItem: React.Dispatch<React.SetStateAction<{}>>,
}

function SearchResult({ searchResult, setSelectedItem }:SearchResultProps) {

  const handleClick = (result: {
      _id: string;
      id: string,
      name: string,
      baseAmount: number,
      caffeine: number,
      imageUrl: string
    }) => {
      setSelectedItem(result);
  };

    return (
      <div >
          <ul className="results mx-10">
          {searchResult.map((result) => {
              return (
                <li
                  key={result._id}
                  className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50 hover:bg-amber-300 active:bg-amber-300"
                  onClick={() => handleClick(result)}
                >
                  <span>{result.name}</span>
                </li>
              );
            })}
          </ul>
      </div>


          );
  }


export default SearchResult;
