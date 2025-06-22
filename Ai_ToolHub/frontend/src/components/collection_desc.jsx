// import React from 'react'

// export default function Collection_desc() {
//   return (
//     <div>collection_desc</div>
//   )
// }

import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Collection_desc() {
  const { id } = useParams();
  const [aiData, setAiData] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch(
        "http://localhost:2222/api/fetchcollections",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const new_data = data.filter((item) => {
        if (item._id === id) return item;
      });
      setAiData(new_data[0].tools_data); // Update state with fetched data
      console.log(aiData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Load Data Called");
    loadData();
  }, []);

  return (
    <>
      {aiData != [] ? (
        aiData.map((item) => {
          return (
            <div
              className="bg-red-200 shadow mt-6 rounded-lg p-6 m-5 border"
              key={item._id}
            >
              <ul className="flex items-center justify-center space-x-2">
                <li className="flex flex-col items-center space-y-2">
                  <a className="block bg-white p-1 rounded-full" href={item.link}>
                    <img
                      className="shadow-xl w-16 rounded-full"
                      src={item.image}
                      alt="Jett"
                    />
                  </a>

                  <h3
                    className="text-gray-600 text-xl font-semibold mb-4"
                    style={{ textAlign: "center" }}
                  >
                    {item.name}
                  </h3>
                </li>
              </ul>
              <div
                className="mb-7"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className="flex-row" style={{ flex: 1 }}>
                  {item.step}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <div>no such items</div>
      )}
    </>
  );
}
