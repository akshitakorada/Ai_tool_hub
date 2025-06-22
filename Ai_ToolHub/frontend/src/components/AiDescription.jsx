import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function AiDescription() {
  const {name} = useParams()
  const data = name
  var new_data = null

  const [aiData, setAiData] = useState([]);

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
      console.log(data)
      new_data = data.filter((item) => {if(item.name === name) return item})
      setAiData(new_data[0]); // Update state with fetched data
      // console.log("name is :",new_data[0].name)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Load Data Called");
    // console.log(data)
     loadData();
  }, []);

    return (
      <div className="app bg-white">
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 w-2xl container px-2 mx-auto">
        <aside>
          <div className="bg-red-200 border border-black-200 shadow rounded-lg p-5">
            <div className="flex flex-col gap-1 text-center items-center">
              <img
                className="h-32 w-32 bg-red-200 border border-black-200 p-2 rounded-full shadow mb-4"
                src={aiData.image}
                alt=""
              />
              <p className="font-semibold">{aiData.name}</p>
              {console.log(aiData.type)}
              <div className="text-sm leading-normal text-gray-400 flex justify-center items-center">
                {/* <svg
                  viewBox="0 0 24 24"
                  className="mr-1"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg> */}
                {aiData.type}
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 my-3">
              <div className="font-semibold text-center mx-4">
                <p className="text-black">{aiData.likes}</p>
                <span className="text-gray-400">Likes</span>
              </div>
              <div className="font-semibold text-center mx-4">
                <p className="text-black">102</p>
                <span className="text-gray-400">Shares</span>
              </div>
              <div className="font-semibold text-center mx-4">
                <p className="text-black">102</p>
                <span className="text-gray-400">Comments</span>
              </div>
            </div>
          </div>

          <div className="flex bg-red-200 border border-black-200 shadow mt-6 rounded-lg p-2">
            {/* <img
              src="https://images.unsplash.com/photo-1439130490301-25e322d88054?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1189&amp;q=80"
              alt="Just a flower"
              className="w-16 object-cover h-16 rounded-xl"
            /> */}
            <div className="flex flex-col justify-center w-full px-2 py-1">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h2 className="text-sm font-medium">{aiData.statement}</h2>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500 hover:text-red-400 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  ></path>
                </svg>
              </div>
              <div className="flex pt-2 text-sm text-gray-400">
                <div className="flex items-center mr-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="font-normal">4.5</p>
                </div>
                <div className="flex items-center font-medium text-gray-900">
                  $1800
                  <span className="text-gray-400 text-sm font-normal"> /wk</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid mt-5 grid-cols-2 space-x-4 overflow-y-scroll flex justify-center items-center w-full">
            <div className="relative flex flex-col justify-between bg-red-200 border border-black-200 shadow-md rounded-3xl bg-cover text-gray-800 overflow-hidden cursor-pointer w-full object-cover object-center rounded shadow-md h-64 my-2">
              <div className="absolute bg-gradient-to-t from-green-400 to-red-400 opacity-50 inset-0 z-0"></div>
              <div className="relative flex flex-row items-end h-72 w-full">
                <div className="absolute right-0 top-0 m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 p-2 text-gray-200 hover:text-red-400 rounded-full hover:bg-red-200 border border-black-200 transition ease-in duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    ></path>
                  </svg>
                </div>
                <div className="p-6 rounded-lg flex flex-col w-full z-10">
                  <h4 className="mt-1 text-white text-xl font-semibold leading-tight truncate">
                    {aiData.name}
                  </h4>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <h2 className="text-sm flex items-center text-gray-300 font-normal">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        Dubai
                      </h2>
                    </div>
                  </div>
                  <div className="flex pt-4 text-sm text-gray-300">
                    <div className="flex items-center mr-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                      </svg>
                      <p className="font-normal">4.5</p>
                    </div>
                    <div className="flex items-center font-medium text-white">
                      $1800
                      <span className="text-gray-300 text-sm font-normal"> /wk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col justify-between bg-red-200 border border-black-200 shadow-md rounded-3xl bg-cover text-gray-800 overflow-hidden cursor-pointer w-full object-cover object-center rounded shadow-md h-64 my-2">
              <div className="absolute bg-gradient-to-t from-red-500 to-yellow-400 opacity-50 inset-0 z-0"></div>
              <div className="relative flex flex-row items-end h-72 w-full">
                <div className="absolute right-0 top-0 m-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9 p-2 text-gray-200 hover:text-red-400 rounded-full hover:bg-red-200 border border-black-200 transition ease-in duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    ></path>
                  </svg>
                </div>
                <div className="p-5 rounded-lg flex flex-col w-full z-10">
                  <h4 className="mt-1 text-white text-xl font-semibold leading-tight truncate">
                    {aiData.name}
                  </h4>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <h2 className="text-sm flex items-center text-gray-300 font-normal">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        India
                      </h2>
                    </div>
                  </div>
                  <div className="flex pt-4 text-sm text-gray-300">
                    <div className="flex items-center mr-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        ></path>
                      </svg>
                      <p className="font-normal">4.5</p>
                    </div>
                    <div className="flex items-center font-medium text-white">
                      $1800
                      <span className="text-gray-300 text-sm font-normal"> /wk</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>/
          </div>
        </aside>
        <article className="">
          <form className="bg-red-200 border border-black-200 shadow rounded-lg mb-6 p-4">
            <textarea
              name="message"
              placeholder="Type something..."
              className="w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"
            ></textarea>
            <footer className="flex justify-between mt-2">
              <div className="flex gap-2">
                <span className="flex items-center transition ease-out duration-300 hover:bg-red-500 hover:text-white bg-white w-8 h-8 px-2 rounded-full text-red-400 cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                  </svg>
                </span>
                <span className="flex items-center transition ease-out duration-300 hover:bg-red-500 hover:text-white bg-white w-8 h-8 px-2 rounded-full text-red-400 cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </span>
                <span className="flex items-center transition ease-out duration-300 hover:bg-red-500 hover:text-white bg-white w-8 h-8 px-2 rounded-full text-red-400 cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                  </svg>
                </span>
              </div>
              <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-red-600 text-white shadow-lg">
                Send
                <svg
                  className="ml-1"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </footer>
          </form>

          <div className="bg-red-200 border border-black-200 shadow rounded-lg">
            <div className="flex flex-row px-2 py-3 mx-3">
              {/* <div className="w-auto h-auto rounded-full border-2 border-green-500">
                <img
                  className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                  alt="User avatar"
                  src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=200"
                />
              </div>
              <div className="flex flex-col mb-2 ml-4 mt-1">
                <div className="text-gray-600 text-sm font-semibold">Sara Lauren</div>
                <div className="flex w-full mt-1">
                  <div className="text-red-700 font-base text-xs mr-1 cursor-pointer">UX Design</div>
                  <div className="text-gray-400 font-thin text-xs">• 1 day ago</div>
                </div>
              </div> */}
            </div>
            <div className="border-b border-gray-100"></div>
            <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
              <img className="rounded w-full" src="https://picsum.photos/536/354" alt="Dummy" />
            </div>
            <div className="text-black font-semibold mb-2 mx-3 px-2">
              Description
            </div>
            <div className="text-gray-500 text-sm mb-6 mx-3 px-2">
              {aiData.description}
            </div>
            <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
              <img
                className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer"
                alt="User avatar"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-none hover:text-red-500"
                >
                  <svg
                    className="w-6 h-6 transition ease-out duration-300 hover:text-red-500 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>
              </span>
              <input
                type="search"
                className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-red-200 border border-black-200 focus:outline-none focus:border-red-500 focus:text-gray-900 focus:shadow-outline-red"
                style={{ borderRadius: "25px" }}
                placeholder="Post a comment..."
                autoComplete="off"
              />
            </div>
          </div>
        </article>
      </main>
    </div>


    );
}
