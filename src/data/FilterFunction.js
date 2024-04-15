export const sortByRatingAsc = (filterData) => {

    const sortedData = filterData.slice().sort((a, b) => {
        const cdRankA = a.cdRank;
        const cdRankB = b.cdRank;
        return cdRankA - cdRankB;

    });
    console.log(sortedData);
    return sortedData;
}

export const sortByRatingDesc = (filterData) => {

    const sortedData = filterData.slice().sort((a, b) => {
      const cdRankA = a.cdRank;
      const cdRankB = b.cdRank;
      return cdRankB - cdRankA;

    });
    console.log(sortedData);
    return sortedData;
}

export const sortByFeesAsc = (filterData) => {

    const sortedData = filterData.slice().sort((a, b) => {
        const feesA = a.courseDetails[0].amount;
        const feesB = b.courseDetails[0].amount;
        return feesA.localeCompare(feesB);

    });
    console.log(sortedData);
    return sortedData;
}
export const sortByFeesDesc = (filterData) => {

    const sortedData = filterData.slice().sort((a, b) => {
        const feesA = a.courseDetails[0].amount;
        const feesB = b.courseDetails[0].amount;
        return feesB.localeCompare(feesA);

    });
    console.log(sortedData);
    return sortedData;
}


export const sortByReviewAsc = (filterData) => {

    const sortedData = filterData.slice().sort((a, b) => {
        const reviewA = a.review.rating;
        const reviewB = b.review.rating;
        return reviewA - reviewB;

    });
    console.log(sortedData);
    return sortedData;
}
export const sortByReviewDesc = (filterData) => {

    const sortedData = filterData.slice().sort((a, b) => {
        const reviewA = a.review.rating;
        const reviewB = b.review.rating;
        return reviewB - reviewA;

    });
    console.log(sortedData);
    return sortedData;
}

export const searchByName = (filterData, search) => {
    const sortedData = filterData.filter((item) =>
      item.collegeName.toLowerCase().includes(search.toLowerCase())
    );
    return sortedData;
}