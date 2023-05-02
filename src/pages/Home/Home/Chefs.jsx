import React, { useEffect, useState } from 'react';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://savor-maxican-server-zubayer22.vercel.app/chef')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Chefs;