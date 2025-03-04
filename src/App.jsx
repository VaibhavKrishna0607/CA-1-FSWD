import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Teammembercard from './components/TeamMemberCard';

// Creating an array for storing the team members' details and using it in 'map':
const Teammembers = () => [
    { Name: "John Doe", Jobtitle: "Software Engineer" },
    { Name: "Mark Smith", Jobtitle: "Software Developer" }
];

function App() {
    //1. Using 'map' from the above array of details:
  const teamMembers = Teammembers();

  return (
    <div className='card'>
      {teamMembers.map((member, index) => (
        <Teammembercard
          key={index}
          Name={member.Name}
          Jobtitle={member.Jobtitle}
        />
      ))}
    </div>
    //2. Using the Teammembercard directly from the components folder:
    
  //<Teammembercard>
  );
}

export default App;
