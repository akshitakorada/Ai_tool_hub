import React from 'react';
import Each_Tool from './Each_Tool';
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react";

const AiTools = () => {
    const [aiData, setAiData] = useState([]);
    const [search,setSearch] = useState("");


  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:2222/api/fetchtools", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setAiData(data); // Update state with fetched data
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Load Data Called");
    loadData();
  }, []); 
    

  return (
    <div className='bg-red-300 pb-7'>

    <div className='flex items-center justify-center bg-red'>
      <div className="flex w-full mx-10 rounded bg-red mt-5">
        <input className="w-full border-none bg-white px-4 py-1 text-gray-600 outline-none focus:outline-none" type="search" name="search" placeholder="Search..." onChange={(e)=>{setSearch(e.target.value);}} />
        <button type="submit" className="m-2 rounded bg-red-600 px-4 py-2 text-white">
          <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style={{enableBackground: 'new 0 0 56.966 56.966'}} xmlSpace="preserve" width="512px" height="512px">
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.33-1.547,0.738-2.451  c-0.001-0.001-0.001-0.001-0.002-0.002L55.146,51.887z M10.966,24c0-9.374,7.626-17,17-17s17,7.626,17,17s-7.626,17-17,17  S10.966,33.374,10.966,24z"/>
          </svg>
        </button>
      </div>
    </div>

    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 mx-16">

      {aiData != [] ? (
        aiData.filter((item) => (item.name.toLowerCase().includes(search)))
        .map((data) => {
            return(
                <div key={data.name}>
                <Link to={`/aiTooldesc/${data.name}`}>
                <Each_Tool name={data.name} type={data.type} image={data.image} />
                </Link>
                </div>
            )
        })
      ) : (<div>No such Items</div>)}

      
      {/* Add more li items as needed */}
    </ul>
    </div>
  );
};

export default AiTools;
