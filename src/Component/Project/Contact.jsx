import React from 'react'
import Layout from './Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

const Contact = () => {
  return (
    <div>
      <Layout>
      <Box sx={{my:10,ml:10,"& h4":{mb:2}}}>
      <Typography variant='h4'>
      Contact My Resturant
      </Typography>
      <p>
      Indulge your palate with mouth-watering food at My Resturant in
      Kolkata. This fine dining restaurant serves food round the clock in a
      wide spread of Indian as well as global cuisines in their menu.Some Bengali food
      dishes such as Prawn Malaikari, Bashonti pulao, Bhapa maach taste
      excellent Starters such as Fish and Chips and Crispy Chicken are worth
      trying Chicken babycord soup is amazing.
      </p>
      </Box>
      <Box sx={{m:3,width:'600px',ml:10}}>
      <TableContainer component={Paper}>
      <Table aria-aria-label='contact table'>
      <TableHead>
      <TableRow>
      <TableCell sx={{bgcolor:'black',color:'white',}} align='center'>Contact Detalis</TableCell>
      </TableRow>
      </TableHead>
      <TableBody>
      <TableCell>
       <SupportAgentIcon sx={{color:'cyan',}}/> 1800015300 (Tollfree)
      </TableCell>
      <TableRow>
      <TableCell>
       <MailIcon sx={{color:'red',}}/> help24hours@myres.com
      </TableCell>
      </TableRow>
      <TableRow>
      <TableCell>
       <CallIcon sx={{color:'green',}}/> 1344747478
      </TableCell>
      </TableRow>
      </TableBody>
      </Table>
      </TableContainer>
      </Box>
      </Layout>
    </div>
  )
}

export default Contact
