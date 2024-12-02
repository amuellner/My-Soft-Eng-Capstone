//import React from "react";
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

const myApp = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        //const myUrl = 'https://vote-for-nebraska-361.com/'?api-key=${process.env.REACT_APP_API};
        fetch('https://vote-for-nebraska-361.com/')
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error returned', error);
                setLoading(false);
    });
}, []);

return(
    <div> {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>} </div>
);
};
export default myApp;
