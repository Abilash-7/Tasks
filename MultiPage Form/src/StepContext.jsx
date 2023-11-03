import React, { useState } from 'react'
import App from './App';
import axios from 'axios';

export const multiStepContext = React.createContext();

const StepContext = () => {

    const [currentStep, setStep] = useState(1);
    const [userData,setUserData] = useState({
        agreed:'false'
    });

    const submitData = () => {
        console.log(userData);
        axios.post("http://localhost:3000/users",userData)
        .then(res => alert('hello'))
        .catch(err => alert(err))
        setUserData('');
        setStep(5)
    }
    return (
    <div>
        <multiStepContext.Provider value={{submitData,currentStep,setStep,userData,setUserData}}>
            <App/>
        </multiStepContext.Provider>
    </div>
    )
}
export default StepContext