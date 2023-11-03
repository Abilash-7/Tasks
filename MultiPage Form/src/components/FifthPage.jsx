import React, { useContext } from 'react'
import { Button} from '@mui/material'
import { multiStepContext } from '../StepContext'

export const FifthPage = () => {
    
    const {setStep,userData,setUserData} = useContext(multiStepContext)
  return (
    <>
        <h2 className='text-center py-3'>Acknowledgement</h2>
        <div className='d-flex flex-column text-center  px-5 justify-content-center w-100 align-items-center' >
            <h5>Your Registeration is Completed.</h5>
            <img src="/images/acknowladge.png" alt="succes" width={50} className='py-4' />
            <h5 className='text-center p-3'>Job vacancies are send to the Email Id provided during registeration.</h5>
            <Button onClick={() => setStep(1)} color='info' className='px-5 m-3' variant='contained'>Done</Button>
        </div>
    </>
  )
}
