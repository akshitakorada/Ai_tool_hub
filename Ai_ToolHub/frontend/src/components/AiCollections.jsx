import React from "react";
import {Link} from 'react-router-dom'
import { useState,useEffect } from "react";

export default function AiCollections() {

  const [aiData, setAiData] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch("http://localhost:2222/api/fetchcollections", {
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
    console.log(aiData)
  }, []); 

  return (
    <>
    {aiData != [] ? 
    aiData.map((item) => {
      return(
        <Link to={`/collectiondesc/${item._id}`}>
          <div className="bg-red-200 shadow mt-6 rounded-lg p-6 m-5 border" key={item._id}>
      <h3 className="text-gray-600 text-xl font-semibold mb-4" style={{ textAlign: 'center' }}>{item.field}</h3>
      <ul className="flex items-center justify-center space-x-2">
        
        {item.tools_data.map((tool) => {
          return(
            <li className="flex flex-col items-center space-y-2">
          
          <a className="block bg-white p-1 rounded-full" href="#">
            <img className="shadow-xl w-16 rounded-full" src={tool.image} alt="Jett" />
          </a>
          
          <span className="text-xs font-bold text-black">{tool.name}</span>
        </li>
          )
        })}
        
      </ul>
      <div className="mb-7" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p className="flex-row" style={{ flex: 1 }}>Generate 50 animated images ideas related to nature photography. Enter one image idea to generate, <br /> then hit create once you have 50 images. Type '/' and select 'animate'. Upload images and select <br /> the motion brush, then press the cursor on the part of the image that you want to animate.</p>
    </div>
    </div>
        </Link>
        
      )
    }) 
    : <div>no such items</div>}
     
    </>
  );
}
