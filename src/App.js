import { useState, useEffect } from 'react';
import './App.css';
function App() {
  let time = document.getElementsByClassName('timeInput').value || 0;
 
  const [ctime, setCtime] = useState(time)
  const [sec, setSec] = useState(0); 
  // const [min, setMin] = useState(0);
  let timer;
  useEffect(()=>{
    if(ctime===sec){
      console.log("rafi")
    } 
    console.log(ctime);
    // console.log(sec);
     timer =setInterval(() => {
      setSec(sec+1);
    //   if(sec === 59){
    //     setMin(min+1);
    //   setSec(0);
    // }
     }, 1000);
 
 
 return ()=> clearInterval(timer);});
let dim = ()=>{
  setCtime(document.getElementsByClassName('timeInput').value);
  console.log(document.getElementsByClassName('timeInput').value)
  setSec(0);
  // setMin(0);
}
  return (
    <div className="App">
        <h1>Set A schadule To Dim the Browser</h1>
        
        <input id="timeInput" onChange={(e)=>{setCtime(e.target.value)}} type="number"/><br/>
        {sec} 
        <button onClick={dim}>Set the time</button>
    </div>
  );

  }
export default App;

















/*Raf
new Date().toLocaleTimeString('default', {
    hour: '2-digit',
    minute: '2-digit'});
  const [ctime, setCtime] = useState(time)


  let dim = ()=>{
 let result 
  if(time == ctime){
    console.log('..............................')
  }
  console.log(ctime);
  console.log(time);
  return result;
}


*/ 