import React, { useState, useEffect, useMemo } from "react";

import Table from "./components/Table/Table";
import axios from "axios";
import Header from "./components/Header/Header";
import Counter from "./Pages/Counter";

function App() {
    // data state to store the TV Maze API data. Its initial value is an empty array
    // const [data, setData] = useState([]);

    // Using useEffect to call the API once mounted and set the data
    // useEffect(() => {
    //     (async () => {
    //         const result = await axios(
    //             "https://api.tvmaze.com/search/shows?q=snow"
    //         );
    //         setData(result.data);
    //     })();
    // }, []);

    // useEffect(() => {
    //     console.log(data);
    // }, [data]);

    const columns = useMemo(() => [
        {
            // first group - TV Show
            Header: "TV Show",
            // First group columns
            columns: [
                {
                    Header: "Name",
                    accessor: "show.name",
                },
                {
                    Header: "Type",
                    accessor: "show.type",
                },
            ],
        },
        {
            // Second group - Details
            Header: "Details",
            // Second group columns
            columns: [
                {
                    Header: "Language",
                    accessor: "show.language",
                },
                {
                    Header: "Genre(s)",
                    accessor: "show.genres",
                },
                {
                    Header: "Runtime",
                    accessor: "show.runtime",
                },
                {
                    Header: "Status",
                    accessor: "show.status",
                },
            ],
        },
    ]);

    return (
        <div>
            <Header />
            {/* {data?.length} */}
        </div>
    );
}

export default App;
