import React from 'react'
import LogIn from './LogIn'

const GreetMessage = (props) => {
    console.log(props.status);
    if(props.status){
       return <h2 className="Welcome">Welcome User ! 🎉</h2>
    }
    else{

        return <LogIn/>
    }
}

export default GreetMessage