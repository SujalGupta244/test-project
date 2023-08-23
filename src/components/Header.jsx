import React from 'react'
import CusBox from './CusBox' 
import {BsCloudCheck} from 'react-icons/bs'
const Header = () => {
  return (
    <CusBox >
        <div className="bg-[#673AB7] w-full h-2.5 absolute top-0 left-0"></div>
        <h1 className='text-3xl mb-3'>Assignment Task</h1>
        <hr  className='my-2 w-full'/>
        <h3 className='flex items-center justify-between mb-3'>
          <span>
            <span className='font-bold opacity-60'>
              sujalgupta1221@gmail.com
            </span>  
            <span className='text-[#1A73EC] font-normal'>
              &nbsp; Switch accounts
            </span>
          </span>
          <span><BsCloudCheck/></span>
        </h3>
        <p className='text-sm text-gray-600'>The name and photo associated with your Google Account will be recorded when you upload files and submit this form. Your email address is not part of your response.</p>
        <hr className='my-2 w-full'/>
        <p className='text-red-600 text-sm'>* Indicates required question</p>
    </CusBox>
  )
}

export default Header