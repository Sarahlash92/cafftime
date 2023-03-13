import { Link } from "react-router-dom";
import { useState } from "react";
import Search from '../components/Search';
import SearchResult from '../components/SearchResult';
import DataDetail from '../components/DataDetail';

type foobDdp = {

  _id: string;
  name: string;
  baseAmount: number;
  caffeine: number;
  timestamp: string;
  imageUrl: string;

}
type foodDbProps = {
foodDb: foobDdp[]
}


function AddData({ foodDb, setItemAdded } : foodDbProps) {
  const [selectedItem, setSelectedItem] = useState<foobDdp>({_id: '', name: '', baseAmount: 0, caffeine: 0, timestamp: '', imageUrl: ''});
  const [searchResult, setSearchResult] = useState<foobDdp[]>([]);

  const handleSelectedItemChange = (item: foobDdp) => {
    setSelectedItem(item);
  };


  return (
    <div className="rounded-t-2xl h-[calc(80vh-64px)] overflow-scroll bg-white relative">
      <Link to="/">
        <button className="bg-gray-300 hover:bg-gray-700 font-bold py-1 px-3 rounded border-gray-600 absolute top-4 right-4">
          X
        </button>
      </Link>
      <Search
        database={foodDb}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
      />
      {(searchResult.length > 0 && !selectedItem._id)&&
        <SearchResult
          searchResult={searchResult}
          setSelectedItem={handleSelectedItemChange}

        />
      }
      <DataDetail setItemAdded={setItemAdded}
        selectedItem={selectedItem}
      />
    </div>
  );
}

export default AddData;
