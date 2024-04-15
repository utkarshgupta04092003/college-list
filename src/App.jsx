import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import Filters from './Components/Filters'
import { BrowserRouter } from 'react-router-dom'
import { collegeData } from './data/collegeData'
import { sortByRatingAsc, sortByRatingDesc, sortByFeesAsc, sortByFeesDesc, sortByReviewAsc, sortByReviewDesc } from './data/FilterFunction';



export default function App() {
  const [filterData, setfilterData] = useState();
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');



  useEffect(() => {
    setfilterData(collegeData);
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
    else if(sortBy === 'fees' && sortOrder === 'asc'){
      console.log("fees asc");
      const sortedData = sortByFeesAsc(filterData);
      setfilterData(sortedData);
    }
    else if(sortBy == 'fees' && sortOrder=='desc'){
      console.log('fees desc');
      const sortedData = sortByFeesDesc(filterData);
      setfilterData(sortedData);
    }
    else if(sortBy == 'userReview' && sortOrder == 'asc'){
      console.log('user review asc');
      const sortedData = sortByReviewAsc(filterData);
      setfilterData(sortedData);
    }
    else if(sortBy == 'userReview' && sortOrder == 'desc'){
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





  return (
    <BrowserRouter>
      <Filters onFilterChange={handleFilterChange} />

      <Home collegeData={filterData} />
    </BrowserRouter>
  )
}
