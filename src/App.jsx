import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Teammembercard from './components/TeamMemberCard';

//creating an array for storing the team members details and using in 'map':
const Teammembers = ()=>{
  [
    {Name :"John doe", Jobtitle : "Software Engineer"},
    {Name: "Mark smith",Jobtitle: "Software developer"}
  ]
}

function App() {
  //1. Using 'map' from the above array of details:
  return (
  //   <div className='card'>
  //     {Teammembers.map(member,index)=>{
  //       <Teammembercard
  //           {key} = {index}
  //           {Name}={member.Name}
  //           {Jobtitle}={member.Jobtitle}
  //       />
  //     }
  //   }
  //   </div>

  //2. Using the Teammembercard directly from the components folder:

  <Teammembercard/>

    
  )

  

}

export default App
