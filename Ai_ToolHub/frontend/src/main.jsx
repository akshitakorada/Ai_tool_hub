import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact.jsx'
import AiTools from './components/AiTools.jsx'
import AiDescription from './components/AiDescription.jsx'
import AiCollections from './components/AiCollections.jsx'
import AddTool from './components/AddTool.jsx'
import Collection_desc from './components/collection_desc.jsx'
// import User from './Components/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children : [
//       {
//         path : '',
//         element : <Home/>
//       },
//       {
//         path : 'about',
//         element : <About/>
//       },
//       {
//         path : 'contact',
//         element : <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='aiTools' element={<AiTools/>} />
    <Route path='aiCollections' element={<AiCollections/>} />
    <Route path='aiTooldesc/:name' element={<AiDescription/>} />
    <Route path='addtool' element={<AddTool/>} />
    <Route path='collectiondesc/:id' element={<Collection_desc/>} />
    {/* <Route path='user/:userid' element={<User/>}/> */}
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
