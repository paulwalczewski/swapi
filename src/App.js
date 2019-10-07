import React, { memo, useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import Loader from './components/Loader/Loader';
import SearchResults from './components/SearchResults/SearchResults';
import Pagination from './components/Pagination/Pagination';
import { getPeople } from './utils/api.js';
import './App.css';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchFraze, setSearchFraze] = useState('');
  const [pagination, setPagination] = useState({ pageNr: 1, totalPages: 1});
  
  const handleSearch = async (searchFraze) => {
    setLoading(true);
    setSearchFraze(searchFraze);
  
    const response = await getPeople(searchFraze, 1);

    setResults(response.results);
    setPagination({ pageNr: 1, totalPages: Math.ceil(response.count / 10) });
    setLoading(false);
  }
  
  const handleChangePagination = async (pageNr) => {
    setLoading(true);
    const response = await getPeople(searchFraze, pageNr);

    setResults(response.results);
    setPagination({ pageNr: pageNr, totalPages: pagination.totalPages });
    setLoading(false);
  }

  useEffect(() => {
    handleSearch()
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <SearchForm onSearch={handleSearch} />
        {loading && <Loader />}
        {results.length > 0 &&
          <React.Fragment>
            <SearchResults results={results} />
            <Pagination
              onChange={handleChangePagination}
              currentPage={pagination.pageNr}
              totalPages={pagination.totalPages}
            />
          </React.Fragment>
        }
        {!loading && results.length === 0 && searchFraze.length > 0 && 
          <p>
            Sorry, there are no people in Star Wars named &quot;{searchFraze}&quot;!
          </p>
        }
      </main>
    </div>
  );
}

export default memo(App);
