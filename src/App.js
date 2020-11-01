import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav';
import Aside from './components/Aside';
import Main from './components/Main';
import dataSet from './review.min.json';
import { getProductList, getReviewList, sortByDate, getFilterContent, getFilteredData } from './functions';

function App() {
  const data = sortByDate(dataSet);
  let products= getProductList(data);
  let [product, setProduct] = useState(products[0]);
  let [reviewList, setReviewList] = useState(getReviewList(data, product));
  let [filterData, setFilterData] = useState(getFilterContent(reviewList));
  let [newestOldest, setNewestOldest] = useState('Newest First');
  let [filters, setFilters] = useState({time: 'All time', rating: 'all', version: 'all', countryName: 'all'});
  let [page, setPage] = useState(1);

  const navChangeHandler = (e) => {
    if ((e.target.className === 'product') && (e.target.innerHTML !== product)) {
      const tempProduct = e.target.innerHTML;
      const tempReviewList = getReviewList(data, tempProduct);
      const tempFilterData = getFilterContent(tempReviewList);
      setProduct(tempProduct);
      setReviewList(tempReviewList);
      setFilterData(tempFilterData);
      setNewestOldest('Newest First');
      setPage(1);
      setFilters({time: 'All time', rating: 'all', version: 'all', countryName: 'all'});
    }
    else if ((e.target.className === 'sort') && (e.target.innerHTML !== newestOldest)) {
      setReviewList([...reviewList.reverse()]);
      setNewestOldest(e.target.innerHTML);
    }
  }
  const pageChangeHandler = (e, val) => {
    setPage(val);
  }
  const filterHandler = (e) => {
    let row = e.target.parentElement;
    if (e.target.className === 'time' && e.target.innerHTML !== filters.time) {
      const val = e.target.innerHTML;
      console.log(val)
      setFilters({...filters, time: val})
    }
    else if (row.parentElement.parentElement.id === 'filter-by-rating') {
      row = row.parentElement;
      setFilters({...filters, rating: filters.rating === row.dataset.value ? 'all' : row.dataset.value});
      setPage(1);
    } 
    else if (row.parentElement.id === 'filter-by-rating') {
      let row = e.target.parentElement;
      setFilters({...filters, rating: filters.rating === row.dataset.value ? 'all' : row.dataset.value});
      setPage(1);
    } 
    else if (row.parentElement.id === 'filter-by-version') {
      console.log('yes')
      setFilters({...filters, version: filters.version === row.dataset.value ? 'all' : row.dataset.value})
      setPage(1);
    }
    else if (row.parentElement.id === 'filter-by-country') {
      console.log('yes')
      setFilters({...filters, countryName: filters.countryName === row.dataset.value ? 'all' : row.dataset.value})
      setPage(1);
    }
  }
  
  return (
    <div className="app">
      <Nav product={product} products={products} newestOldest={newestOldest} handler={navChangeHandler}/>
      <Aside filterData={filterData} filters={filters} filterHandler={filterHandler}/>
      <Main reviews={getFilteredData(reviewList, filters)} page={page} pageChangeHandler={pageChangeHandler}/>
    </div>
  );
}

export default App;
