import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import {BiSolidMessageError} from "react-icons/bi"
import CusBox from './components/CusBox'
function App() {
  const [submit,setSubmit] = useState(false)
  return (
    <main className='w-full min-h-screen bg-[#F0EBF8] pt-2 p-8 flex items-center flex-col'>
      <Header/>
      {
        submit ?
          <CusBox>
            <h2 className='text-2xl'>Form Submitted</h2>
          </CusBox>
        :<Form setSubmit={setSubmit}/>

      }
      <BiSolidMessageError className='fixed text-gray-600 bottom-6 left-2 text-2xl'/>
      <h2 className='text-2xl mt-2 '>
        <span className='text-gray-600 font-semibold'>Google</span>
        &nbsp; 
        <span className='text-gray-500'>Forms</span>
      </h2>
    </main>
  )
}

export default App
