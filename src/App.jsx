import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import Filters from './Components/Filters'
import { BrowserRouter } from 'react-router-dom'
import { collegeData } from './data/collegeData'
import { sortByRatingAsc, sortByRatingDesc, sortByFeesAsc, sortByFeesDesc, sortByReviewAsc, sortByReviewDesc, searchByName } from './data/FilterFunction';



export default function App() {
  const [filterData, setfilterData] = useState();
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = () =>{
    setfilterData((prev)=>(prev.concat(collegeData)));
  }
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    }
    console.log('function fetched called');
    fetchData();
  };


  useEffect(() => {
    setfilterData(collegeData);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    console.log(sortBy, sortOrder);

    if (sortBy === "rating" && sortOrder === "asc") {
      console.log("rating", "ase");
      const sortedData = sortByRatingAsc(filterData);
      setfilterData(sortedData);

    }
    else if (sortBy === "rating" && sortOrder === "desc") {
      console.log("rating", "desc");
      const sortedData = sortByRatingDesc(filterData);
      setfilterData(sortedData);
    }
    else if (sortBy === 'fees' && sortOrder === 'asc') {
      console.log("fees asc");
      const sortedData = sortByFeesAsc(filterData);
      setfilterData(sortedData);
    }
    else if (sortBy == 'fees' && sortOrder == 'desc') {
      console.log('fees desc');
      const sortedData = sortByFeesDesc(filterData);
      setfilterData(sortedData);
    }
    else if (sortBy == 'userReview' && sortOrder == 'asc') {
      console.log('user review asc');
      const sortedData = sortByReviewAsc(filterData);
      setfilterData(sortedData);
    }
    else if (sortBy == 'userReview' && sortOrder == 'desc') {
      console.log('user review desc');
      const sortedData = sortByReviewDesc(filterData);
      setfilterData(sortedData);
    }




  }, [sortBy, sortOrder]);

  const handleFilterChange = (filters) => {
    if (filters.sortBy) {
      setSortBy(filters.sortBy);
      console.log(filters);
    }
    if (filters.sortOrder) {
      setSortOrder(filters.sortOrder);
      console.log(filters);
    }
  };
  const handleInputChange = (search) => {
    console.log('serach', search)
    setSearchTerm(search);
    const sortedData = searchByName(collegeData, search);
    setfilterData(sortedData);
  };





  return (
    <BrowserRouter>
      <Filters onFilterChange={handleFilterChange} handleInputChange={handleInputChange} />

      <Home collegeData={filterData} />
    </BrowserRouter>
  )
}
