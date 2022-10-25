import React, { useState, useEffect, useMemo } from "react";

import Table from "./components/Table/Table";
import axios from "axios";
import Header from "./components/Header/Header";

// Custom component to render Genres
const Genres = ({ values }) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    return (
        <>
            {values.map((genre, idx) => {
                return (
                    <span key={idx} className="text-blue-500">
                        {genre}
                    </span>
                );
            })}
        </>
    );
};
const Url = ({ value }) => {
    // Loop through the array and create a badge-like component instead of a comma-separated string
    return (
        <>
            <a
                href="www.facebook.com"
                className="text-purple-500 underline"
            >
                {value}
            </a>
        </>
    );
};

function App() {
    // data state to store the TV Maze API data. Its initial value is an empty array
    const [data, setData] = useState([]);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
        (async () => {
            const result = await axios(
                "https://api.tvmaze.com/search/shows?q=snow"
            );
            setData(result.data);
        })();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    /* 
    - Columns is a simple array right now, but it will contain some logic later on. It is recommended by react-table to memoize the columns data
    - Here in this example, we have grouped our columns into two headers. react-table is flexible enough to create grouped table headers
    */
    const columns = useMemo(
        () => [
            {
                Header: "More Info",
                columns: [
                    {
                        Header: "Type",
                        accessor: "show.type",
                    },
                    {
                        Header: "Url",
                        accessor: "show.url",
                        Cell: ({ cell: { value } }) => (
                            <Url value={value} />
                        ),
                    },
                ],
            },
            {
                Header: "Details",
                columns: [
                    {
                        Header: "Language",
                        accessor: "show.language",
                    },
                    {
                        Header: "Genre(s)",
                        accessor: "show.genres",
                        // Cell method will provide the cell value; we pass it to render a custom component
                        Cell: ({ cell: { value } }) => (
                            <Genres values={value} />
                        ),
                    },
                    {
                        Header: "Runtime",
                        accessor: "show.runtime",
                        // Cell method will provide the value of the cell; we can create a custom element for the Cell
                        Cell: ({ cell: { value } }) => {
                            const hour = Math.floor(value / 60);
                            const min = Math.floor(value % 60);
                            return (
                                <>
                                    {hour > 0
                                        ? `${hour} hr${hour > 1 ? "s" : ""} `
                                        : ""}
                                    {min > 0
                                        ? `${min} min${min > 1 ? "s" : ""}`
                                        : ""}
                                </>
                            );
                        },
                    },
                    {
                        Header: "Status",
                        accessor: "show.status",
                    },
                ],
            },
        ],
        []
    );

    return (
        <div>
            <Header />
            {/* {data?.length} */}
            <Table columns={columns} data={data} />
        </div>
    );
}

export default App;
