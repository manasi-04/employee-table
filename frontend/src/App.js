import './App.css';
import React, { useEffect, useState } from 'react';
import Table from './pages/table.page';
import Pagination from './components/pagination/pagination.component';
import Search from './components/search/search.component';
import { searchResults } from './helpers/search.helpers';

function App() {
  const [data, setData] = useState([]);
  const [displayRows, setDisplayRows] = useState(10);
  const [filteredDataLength, setFilteredDataLength] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/api').then(resp => resp.json()).then(data => {setData(data); setSearchData(data);});
  }, []);

  useEffect(() => {
    if (search.length > 1) {
      setSearchData(searchResults(data, search));
    } else {
      setSearchData(data);
    }
  }, [search]);

  const onInputChange = (e) => {
    setDisplayRows(+e.target.value);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  if (data.length === 0) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      <div className='filter-results'>
        <div className='filter-results-value'>
          <label>Show</label>
          <input type="number" defaultValue="10" min="10" onChange={onInputChange} max={data.length}/>
          <label>entries</label>
        </div>
        <Search onSearch={onSearch}/>
      </div>
      <div className='table'>
        <Table data={searchData} displayRows={displayRows} selectedPage={selectedPage}
          setStartIndex={setStartIndex} setFilteredDataLength={setFilteredDataLength}/>
      </div>
      <div className='footer'>
        <div className='show-results'>Showing {startIndex+1} to {startIndex + filteredDataLength} of {data.length} entries</div>
        <Pagination range={displayRows} data={data} onPageChanged={setSelectedPage}/>
      </div>
    </div>
  );
}

export default App;
