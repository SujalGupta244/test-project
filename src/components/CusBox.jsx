import React from 'react'
import { Box } from '@mui/material'

const CusBox = ({children}) => {
  return (
    <Box className="bg-white max-w-[80vw] w-[800px] p-6 rounded-md my-2 border border-slate-300 flex flex-col relative overflow-hidden">
        {children}
    </Box>
  )
}

export default CusBox