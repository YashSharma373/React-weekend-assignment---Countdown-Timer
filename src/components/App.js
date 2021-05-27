import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';



const App = () => {
	const [time,setTime] = useState();
	const [isActive,setisActive] = useState(false);
	// // const [testtime,settestTime] = useState();

	// // function handleChange(e){
	// // 	const t = e.target.value;
	// // 	settestTime(t);
	// // }
		
	useEffect(()=>{
			let intervalId;
			if(isActive===true){
				// setTime(testtime);
				intervalId= setInterval(()=>{
					
					// const countersec = counter%60;
					const computedTime = time-1;
					// testtime=testtime
					if(computedTime>0){
						setTime(computedTime);
					}else{
						setTime(0);
					}
					
					// setCounter(counter => counter+1);
				},1000)
			}

			return ()=>clearInterval(intervalId);
		},[isActive, time]);	


		
	// 		// setTime(e.target.value);
		const handleKeyDown =(e)=>{
			

			if(e.key==='Enter'){
				let val;
				let input = e.target.value;
				if(isNaN(input) === true){
					val=0;
				}else{
					val = Math.floor(parseFloat(input));
				}
				setTime(val);
				setisActive(true);
			}
			}
			
				
			
		

	
	

  return (
	
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={handleKeyDown} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
	  

    </div>
  )
}


export default App;
