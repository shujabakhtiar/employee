import logo from './logo.svg';
import './App.css';
import employees from './EmployeeData.json'
import { useState, useEffect } from 'react';
import headerImage from "./assets/_images/Header image/headerImage.jpg"
import Vito from "./assets/_images/Profile pics/Vito Corleone.jpg"
import Caro from "./assets/_images/Profile pics/Carmelia Corleone.jpg"
import riz from "./assets/_images/Profile pics/Carlo Rizzi.jpg"
import godlogo from "./assets/_logo/the-godfather.svg"
import luci from "./assets/_images/Profile pics/Luci Mancini.jpg"
function App() {
  const [profilePic, setprofilePic]=useState(Vito);
  const [name,setName]=useState('Vito Corleone');
  const [range,setRange]=useState(0);
  const [bioData, setBioData]=useState("");
  const [textSize,setTextSize]=useState(200);
  const [emp,setEmp]=useState([]);
  useEffect(() => {
    var arr=0;
    setEmp(employees.employees)
    console.log(emp);
    setBioData(employees.employees[arr].biography);
    setName(employees.employees[arr].name);
    setRange(employees.employees[arr].popularity)
  }, []);
  const handleClick = (arr,img) => {
    setBioData(employees.employees[arr].biography);
    setName(employees.employees[arr].name);
    setprofilePic(img)
    setRange(employees.employees[arr].popularity)


  };
 
  return (
    <div className="App">
      <div className='sidebarfade'/>
      <div className='sidebar'> 
        <div className='sb-pp'>
        <img src={godlogo} className='god-logo'/>
        </div>
        <div className='sidebar-options'>
        {emp.map((i)=>{
          <h1>w</h1>
        })}
          
          <div onClick={()=>handleClick(0,Vito)} className='options'>Vito Corleone</div>
          <div onClick={()=>handleClick(1,Caro)} className='options'>Carmelia Corleone</div>
          <div onClick={()=>handleClick(2,riz)} className='options'>Carlo Rizzi</div>
          <div onClick={()=>handleClick(3,luci)} className='options'>Luci Mancini</div>

        </div>
      </div>
      <header className='header' style={{backgroundImage: `url(${headerImage}) `}}> 
      
      </header>
      <div className='body'>
        <div className='pp-container'>
        <img src={profilePic} className='profilePic'/>
        </div>
        <div className='name'>{name}</div>
        <div className='popularity'>
          Popularity <input className='slider' type="range" min="1" max="10"value={range} readonly ></input>
        </div>
        <div className='bio-container'>
          <h1>
            Biography
          </h1>
          <div>
            {bioData}
          </div>
        </div>
 
      </div>

    </div>
  );
}

export default App;
