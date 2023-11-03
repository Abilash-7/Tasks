import React, { useContext } from 'react'
import { Button,TextField, Checkbox, FormControlLabel,} from '@mui/material'
import { multiStepContext } from '../StepContext'

export const FourthPage = () => {
    
    const {setStep,userData,setUserData,submitData} = useContext(multiStepContext)
  return (
    <>
        <h2 className='text-center py-3'>Industry Details</h2>
        <div className='d-flex flex-column  px-5 justify-content-center w-100 align-items-center' >
            <form onSubmit={() => {alert("registered !!!");  submitData(); setStep(5)}}>
            <div  className='w-100'>
                <TextField label="what type of industry, you want to work"  value={userData.industype} onChange={(e) => setUserData({...userData,"industype":e.target.value})}  fullWidth required type='text' margin='normal' variant='outlined' autoFocus></TextField>
            </div>
            <div className='w-100'>
                <TextField label="Job Location"  value={userData.location} onChange={(e) => setUserData({...userData,"location":e.target.value})} fullWidth required margin='normal' variant='outlined' ></TextField>
            </div>
            <div className='w-100'>
                <TextField label="Job Type" required fullWidth value={userData.jobtype} onChange={(e) => setUserData({...userData,"jobtype":e.target.value})}  margin='normal' variant='outlined' ></TextField>
            </div>
            
            <h2 className='pt-3'>Salary Expectation</h2>
            <div className='w-100'>
                <TextField label="Amount per annual" required type='number' value={userData.expectsalary} onChange={(e) => setUserData({...userData,"expectsalary":e.target.value})} fullWidth  margin='normal' variant='outlined' ></TextField>
            </div>

            <div className='' >
                    <FormControlLabel control={<Checkbox onClick ={(e) => setUserData({...userData,"agreed":!e.target.checked})} />} label="I agree to the JobSeeker Terms"></FormControlLabel> 
            </div>
            <div className='my-5 px-5 d-flex w-100 justify-content-between'>  
                <Button onClick={() => setStep(3)}  variant='contained' className='px-5 me-5' color='error' >Back<i class="ms-2 fa-solid fa-arrow-left"></i></Button>
                <Button type='submit' className='px-5'  variant='contained'>Submit</Button>
            </div>
            </form>
        </div>
    </>
  )
}
