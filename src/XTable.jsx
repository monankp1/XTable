import React,{useState} from 'react'

const XTable = () => {


    const [sortedData, setSortedData] = useState([
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
    ]);

    const data = [
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
    ];

    const handleSortDate = () => {
        let sorting = data;
        sorting.sort((a,b) => new Date(b.date) - new Date(a.date));
        setSortedData(sorting);
    }

    const handleSortViews = () => {
        let sortingByViews = data;
        sortingByViews.sort((a,b) => b.views - a.views);
        setSortedData(sortingByViews);
        console.log(sortedData)
    }
    
  return (
    <div>
        <h1>Date and Views Table</h1>
        <button onClick={handleSortDate}>Sort by Date</button>
        <button onClick={handleSortViews} >Sort by Views</button>
        <table style={{display:'flex', justifyContent: 'center'}}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
                    {sortedData.map((item) => {
                        return (
                            <tr>
                                <td>{item.date}</td>
                                <td>{item.views}</td> 
                                <td>{item.article}</td>
                            </tr>
                        )
                    })}
            </thead>
        </table>
    </div>
  )
}

export default XTable