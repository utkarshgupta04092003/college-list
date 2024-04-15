# Infinite Scroll Table Implementation

## Wanna try - [https://cdassignment.netlify.app/](https://cdassignment.netlify.app/)

This project demonstrates an implementation of an infinite scroll table layout for displaying college data. It includes sorting functionality by collegedunia rating, fees, and user review rating in both ascending and descending orders. Additionally, it provides a search feature to filter colleges by name.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Dummy JSON](#dummy-json)
- [Implementation Details](#implementation-details)
- [Dependencies](#dependencies)
- [Screenshots](#screenshots)

## Overview

This project creates a table layout to display college data. Initially, it loads 10 rows, and as the user scrolls down, more rows are dynamically loaded into the table, providing an infinite scroll experience. Each row displays information about a college, including its name, featured flag, ratings, fees, and user review rating. Users can sort the table based on collegedunia rating, fees, and user review rating in both ascending and descending orders. Additionally, a search functionality allows users to filter colleges by name.

## Features

- Infinite scroll: Load additional rows dynamically as the user scrolls down.
- Sorting: Sort the table based on collegedunia(CDRating) rating, fees, and user review rating in both ascending and descending orders.
- Search: Filter colleges by name.
- Featured flag: Display a featured flag for colleges with a truthy featured value.

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/utkarshgupta04092003/college-list.git
   ```

2. Navigate to the project directory:

   ```bash
   cd college-list
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

Once the development server is running, open your web browser and navigate to `http://localhost:5173` to view the infinite scroll table. You can scroll down to load more college data dynamically. Use the sorting buttons to sort the table based on different criteria, and use the search bar to filter colleges by name.

## Dummy JSON

The project uses a dummy JSON file containing data for different colleges. This data is loaded into the table to demonstrate the functionality. You can replace this dummy data with your own college data as needed.

## Implementation Details

The project is built using React.js and leverages javascript concepts for infinite scrolling, sorting, and filtering functionality. The table layout is designed to optimize performance by only rendering the visible rows, and additional rows are loaded dynamically as the user scrolls down.

## Dependencies

- React.js
- Vite
- Other dependencies as specified in the `package.json` file.

## Screenshots
### Home Page
![image](https://github.com/utkarshgupta04092003/college-list/assets/63789702/bc4aee71-e0b9-48d1-b097-d3023a68fcb2)

### Sort by fees in ascending order
![image](https://github.com/utkarshgupta04092003/college-list/assets/63789702/4b3853b3-fa6b-48a7-b83c-ff1d38c3a37a)

### sort by user review in descending order
![image](https://github.com/utkarshgupta04092003/college-list/assets/63789702/77962b0f-fb62-4a02-9385-868b8af1fd63)

### Infinite Scroll (see the scrollbar)
![image](https://github.com/utkarshgupta04092003/college-list/assets/63789702/62d6ecb1-ae59-4697-bf4b-24a1a655004d)




