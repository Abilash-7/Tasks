import React, { useContext } from 'react'
import { Button,TextField } from '@mui/material'
import { multiStepContext } from '../StepContext'


export const SecondPage = () => {
    
    const {setStep,userData,setUserData} = useContext(multiStepContext)
  return (
    <>
    <h2 className='text-center py-3'>Education Details</h2>
        <div className='d-flex flex-column  px-5 justify-content-center w-100 align-items-center' >
            <form onSubmit={() => {setStep(3)}}>
                <div  className='w-100'>
                    <TextField label="University Name" value={userData.university} onChange={(e) => setUserData({...userData,"university":e.target.value})} fullWidth required type='text' margin='normal' variant='outlined' autoFocus></TextField>
                </div>
                <div className='w-100'>
                    <TextField label="Year of passing" type='number' value={userData.passyear} onChange={(e) => setUserData({...userData,"passyear":e.target.value})} fullWidth required margin='normal' variant='outlined' ></TextField>
                </div>
                <div className='w-100 d-flex justify-content-between'>
                    <TextField className='me-3' fullWidth label="Course" value={userData.course} onChange={(e) => setUserData({...userData,"course":e.target.value})}  required type='text' margin='normal' variant='outlined'></TextField>
                    <TextField fullWidth label="Dept" required type='text' value={userData.dept} onChange={(e) => setUserData({...userData,"dept":e.target.value})} margin='normal' variant='outlined'></TextField>
                </div>
                <div className='w-100'>
                    <TextField label="No. of Arrers" required type='number' value={userData.arrear} onChange={(e) => setUserData({...userData,"arrear":e.target.value})} fullWidth  margin='normal' variant='outlined' ></TextField>
                </div>
                <div className='my-5  px-5 d-flex w-100 justify-content-between'>  
                    <Button onClick={() => setStep(1)}  variant='contained' className='px-5 me-5' color='error' >Back<i class="ms-2 fa-solid fa-arrow-left"></i></Button>
                    <Button type='submit' className='px-5'  variant='contained'>Next <i class="ms-2 fa-solid fa-arrow-right"></i></Button>
                </div>
            </form>
        </div>
    </>
  )
}
