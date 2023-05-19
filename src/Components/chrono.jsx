import { useState, useEffect } from "react"



let inter = null;
function Chrono(){

  const [time, setTime] = useState(15);
  useEffect(()=>{
      if(time > 0) {
        inter = setInterval(function(){
           setTime(() => time - 1)
        }, 1000)
      }
 return ()=> clearInterval(inter)
  },[time])
  
  return (<div className="chrono">
              <span>Time</span>

              <span> : {time}</span>
         </div>)
}
// const Obj ={
//   key : "bonjour",
//   kea : "bonsoir"
// }
export default Chrono