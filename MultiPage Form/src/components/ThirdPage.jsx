import React, { useContext } from 'react'
import { Button,TextField } from '@mui/material'
import { multiStepContext } from '../StepContext'

export const ThirdPage = () => {
    
    const {setStep,userData,setUserData,submitData} = useContext(multiStepContext)
  return (
    <>
        <h2 className='text-center py-3'>Experience  Details</h2>
        <div className='d-flex flex-column  px-5 justify-content-center w-100 align-items-center' >
            <form onSubmit={() => setStep(4)} >

            <div  className='w-100'>
                <TextField label="Company Name" value={userData.company} onChange={(e) => setUserData({...userData,"company":e.target.value})} fullWidth required type='text' margin='normal' variant='outlined' autoFocus></TextField>
            </div>
            <div className='w-100 d-flex justify-content-between'>
                <TextField label="Type" className='me-3' value={userData.exptype} onChange={(e) => setUserData({...userData,"exptype":e.target.value})} fullWidth required margin='normal' variant='outlined' ></TextField>
                <TextField label="Duration" fullWidth required type='number' value={userData.duration} onChange={(e) => setUserData({...userData,"duration":e.target.value})} margin='normal' variant='outlined' ></TextField>
            </div>
            
            <h2 className='pt-3'>Skills</h2>
            <div className='w-100 '>
                <TextField fullWidth label="Skills" value={userData.skills} onChange={(e) => setUserData({...userData,"skills":e.target.value})} required type='text' margin='normal' variant='outlined'></TextField>
            </div>
            <div className='d-flex justify-content-between my-5 px-5 w-100'>          
                <Button onClick={() => setStep(2)}  variant='contained' className='px-5 me-5' color='error'>Back<i class="ms-2 fa-solid fa-arrow-left"></i></Button>
                <Button type='submit' variant='contained' className='px-5' color='primary'>Next<i class="ms-2 fa-solid fa-arrow-right"></i></Button>
            </div>
            </form>
        </div>
    </>
  )
}
