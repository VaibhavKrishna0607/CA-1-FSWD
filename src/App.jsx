import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Teammembercard from './components/TeamMemberCard';

const Teammembers = ()=>{
  [
    {Name :"John doe", Jobtitle : "Software Engineer"},
    {Name: "Mark smith",Jobtitle: "Software developer"}
  ]
}

function App() {
  //1-Method. Using Map from the above array of details:
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

  //2-Method. Using the Teammembercard directly from the components folder:

  <Teammembercard/>

    
  )

  

}

export default App
