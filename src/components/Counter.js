import { useState } from "react"
import Actions from "./Actions";
import '../index.scss';

export const Counter = ({ClickSum,ClickRest}) => {
const [count,setCount] = useState(0)
  
    ClickSum = () =>{
       setCount(count+1)
   }
    ClickRest = () =>{
    setCount(count-1)
}

    return (
        <div>
            <div className='counter'>
                <h1>Contador:{count}</h1>
                <Actions ClickSum={ClickSum} ClickRest={ClickRest}/>
            </div>
        </div>
    )
}

export default Counter
