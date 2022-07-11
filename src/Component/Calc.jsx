import React, { useState } from 'react';
import "./Calc.css";
import Midelbox from './Midelbox';


const Calc =()=> {
    const [result,setResult]=useState("");
    
   const calculate = () => {
    setResult(eval(result).toString());
  }

    const clickHandler = (e) => {
        setResult(result.concat(e.target.value))
      }
    
    return(
      <>
      <div className='mainContainer'>
      <div className='calculator'>
        <input type="text" placeholder='0' id='screen' value={result}/>

      <Midelbox/>
        
        <div className='btnContainer'>
        <input type="button" value="7" className='button' onClick={clickHandler}/>
        <input type="button" value="8" className='button'  onClick={clickHandler}/>
        <input type="button" value="9" className='button'  onClick={clickHandler}/>
        <input type="button" value="/" className='button'  onClick={clickHandler}/>
        <input type="button" value="4" className='button'  onClick={clickHandler}/>
        <input type="button" value="5" className='button'  onClick={clickHandler}/>
        <input type="button" value="6" className='button'  onClick={clickHandler}/>
        <input type="button" value="*" className='button'  onClick={clickHandler}/>
        <input type="button" value="1" className='button'  onClick={clickHandler}/>
        <input type="button" value="2" className='button'  onClick={clickHandler}/>
        <input type="button" value="3" className='button'  onClick={clickHandler}/>
        <input type="button" value="-" className='button'  onClick={clickHandler}/>
        <input type="button" value="0" className='button'  onClick={clickHandler}/>
        <input type="button" value="." className='button' onClick={clickHandler} />
        <input type="button" value="+" className='button' onClick={clickHandler}/>
        <input type="button" value="=" className='button red ' onClick={calculate}/>
        </div>
        </div>

</div>



</>
     
    );
}
export default Calc;