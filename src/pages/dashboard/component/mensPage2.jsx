import React from 'react';
import '../styles/mensPage3.css'
import { Link } from 'react-router-dom';

function MensPage2(){



    function clearText(event){
        event.target.value = " "
    }


  
    function getFutureDates(){
        let periodLenghts = document.querySelector(".inputs2").value;

        let cycleLengths = parseInt(document.querySelector(".inputs3").value);
        let lpd = document.querySelector(".inputs1").value;
        let lastDate = new Date(lpd);
        let nextFlowDate = lastDate;

        nextFlowDate.setDate(lastDate.getDate()+ parseInt(periodLenghts) + cycleLengths+1)
        const dateOptions = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }
        let nextDate = nextFlowDate.toLocaleDateString('en-US', dateOptions)
        document.querySelector(".rp").innerHTML = "Your next flow starts: " + nextDate;
        console.log(document.querySelector(".rp"));
        console.log(nextFlowDate);     
     
    }

    function getNextDate(){
        let cycleLengths = parseInt(document.querySelector(".cycleLength").value);
        let lpd = document.querySelector(".rp").innerHTML;
        let lastDate = new Date(lpd);
        let nextFlowDate = lastDate;
        nextFlowDate.setDate(lastDate.getDate() + cycleLengths+1)
        const dateOptions = { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' }
        let nextDate = nextFlowDate.toLocaleDateString('en-US', dateOptions)
        document.querySelector(".rp").innerHTML = "Your next flow starts: " + nextDate;

        console.log(document.querySelector(".rp"));
        console.log(nextFlowDate); 
        
    }





    return(
        <div className="mcc">
             <div className='topnav'>
                <Link to="/">
                <button className='back'>
                    BACK
                </button>
                </Link>
            <div>
                <p className='flo'>FLow-her</p>
            </div>

            <li>
                <p>FAQ</p>
            </li>

            <li>
                <p>TIps & Advice</p>
            </li>

            <li>
                <p>Contact Us</p>
            </li>

    

        </div>

        <div className="innercontainer">
            <div className="input">
                <div className="inputimg">
                    <h4 className="question">Please answer the following questions below </h4>
                    <label htmlFor="inputs1">  
                    {/* <p className='pclass'>When was your last day of period:  </p>    */}
                        <input className="inputs1" type = "date"  onClick={clearText} placeholder=''></input>
                    </label>

                    <label htmlFor="inputs2">
                        <input className="inputs2" type = "text" onClick={clearText} placeholder='What is your period length' min={2} max={7}></input>
                    </label>
                
                    <label htmlFor="inputs3">
                    <input className="inputs3" type='text' onClick={clearText} placeholder='what is your cycle length' min={0} max={31}></input>

                    </label>
                
                <div className="submit" onClick={getFutureDates}>Submit</div>
                </div>
            </div>
            <div className="results">
                <div className="result"> <p className='rp'>RESULTS</p> </div>
                
                <div className='button' onClick={getNextDate}>
                    <p className='btnText'>
                    NEXT
                    </p>
                    <div className='btnTwo'>
                    <p className='btnText2'>Flow</p>
                </div>

                </div>

            </div>
        </div>

        </div>
        
    )
}
export default MensPage2;