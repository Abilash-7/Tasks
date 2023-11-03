import { SecondPage } from "./components/SecondPage"
import { ThirdPage } from "./components/ThirdPage"
import { FirstPage } from "./components/FirstPage"
import { Stepper,Step,StepLabel } from "@mui/material"
import { multiStepContext } from "./StepContext"
import { useContext, useState } from "react"
import { FourthPage } from "./components/FourthPage"
import { FifthPage } from "./components/FifthPage"
function App(){

  const {currentStep, userData} = useContext(multiStepContext);
 

  function showStep(step){

    switch(step){
      case 1:
        return <FirstPage/>
      case 2:
        return <SecondPage/>
      case 3:
        return <ThirdPage/>
      case 4:
        return <FourthPage/>
      case 5:
        return <FifthPage/>
    }
  }
  return (
    <>
   
    <div className="app">
      <div className="header fixed-top">
        <h2 className="text-center py-2 bg-white shadow" > J<i className="fa-solid fa-magnifying-glass ms-1"></i>P - SEEKER  </h2>
      </div>
      <div className="container-fluid w-100 h-100 d-flex align-items-center justify-content-center flex-column">
        <div className="stepper mt-3 shadow d-flex p-5 justify-content-center w-50">
          <Stepper activeStep={currentStep - 1} className="pt-3  position-relative"  style={{width:'100%',height:'100%'}} >
      
              <Step >
              <StepLabel ></StepLabel>
            </Step>
           
            <Step >
              <StepLabel ></StepLabel>
            </Step>
              <Step >
              <StepLabel ></StepLabel>
            </Step>
              <Step >
              <StepLabel ></StepLabel>
            </Step>
              <Step >
              <StepLabel ></StepLabel>
            </Step>
          </Stepper>
        </div>
        <div className="form shadow w-50 ">      
            {showStep(currentStep)}
        </div>
      </div>
    </div>
    </>
      
  )
}

export default App

