import React from 'react'

export default function Each_Tool(props) {
  return (
    <>
      <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:shadow-xl hover:-translate-y-[0.125rem]">
        <div className="flex flex-1 flex-col p-8">
          <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full shadow-xl" src={props.image} alt="" />
          <h3 className="mt-6 text-lg font-medium text-gray-900">{(props.name).toUpperCase()}</h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-black-500">{props.type}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
            </dd>
          </dl>
        </div>
      </li>
    </>
  )
}