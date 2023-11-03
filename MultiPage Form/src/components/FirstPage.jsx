import React, { useContext } from 'react'
import { Button,TextField } from '@mui/material'
import { multiStepContext } from '../StepContext'

export const FirstPage = () => {

    const {setStep,userData,setUserData} = useContext(multiStepContext)

  return (
    <>
    <h2 className='text-center py-3'>Personal Details</h2>
        <div className='d-flex flex-column justify-content-center px-5 w-100 align-items-center'>
           <form onSubmit={() => setStep(2)}>
            <div className='w-100 d-flex justify-content-between'>
                <TextField className='me-3' fullWidth type='text' required label="First Name" value={userData.fname} autoFocus onChange={(e) => setUserData({...userData,"fname":e.target.value})} margin='normal' variant='outlined'></TextField>
                <TextField type='text' fullWidth label="Last Name" required value={userData.lname} onChange={(e) => setUserData({...userData,"lname":e.target.value})} margin='normal' variant='outlined' ></TextField>
            </div>
            <div className='w-100'>
                <TextField type='email' label="Email Address" value={userData.email} onChange={(e) => setUserData({...userData,"email":e.target.value})} required margin='normal' variant='outlined' fullWidth ></TextField>
            </div>
            <div className='w-100'>
                <TextField label="Phone Number" fullWidth type='number' required value={userData.ph_no} onChange={(e) => setUserData({...userData,"ph_no":e.target.value})} margin='normal' variant='outlined' ></TextField>
            </div>
            <div className='w-100'>
                <TextField label="Address" value={userData.address} onChange={(e) => setUserData({...userData,"address":e.target.value})} fullWidth type='text' margin='normal' required variant='outlined' ></TextField>
            </div>
            <div className='w-100 d-flex justify-content-between '>
                <TextField className='me-3' value={userData.city} onChange={(e) => setUserData({...userData,"city":e.target.value})} label="City" type='text' required fullWidth margin='normal' variant='outlined' ></TextField>
                <TextField label="State" type='text' value={userData.state} onChange={(e) => setUserData({...userData,"state":e.target.value})} fullWidth margin='normal' required variant='outlined' ></TextField>
            </div>
            <div className="m-5 text-center">   
                <Button type='submit' variant='contained' className='px-5 ' color='primary'>Next<i className="ms-2 fa-solid fa-arrow-right"></i></Button>
            </div>
            </form>
        </div>
    </>
)
}
