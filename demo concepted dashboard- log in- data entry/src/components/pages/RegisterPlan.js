import React from 'react'
import { Link } from 'react-router-dom'

import { useState} from 'react'

import '../../App.css'
import Select from 'react-select';
import axios from 'axios';



const options1 = [
    
  { 
    label: "Weekly", 
    value: "Weekly",
  }, 
  {
    label: "Monthly",
    value: "Monthly",
  }
  
];

const options11 = [
    { 
      label: "OFF", 
      value: "OFF",
    }, 
    {
      label: "ON",
      value: "ON",
    }
];
 

export default function RegisterPlan() {

  const [cPlanname, setName] = useState("");
  const [cInstallAm, setAmmount] = useState("");
  const [cSched, setSched] = useState("");
  const [remoteC, setRemote] = useState("");

  const handleChangeSched = e => {
    setSched(e.value);}

    const handleChangeRem = e => {
      setRemote(e.value);}
   
      const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(cPlanname)
        console.log(cInstallAm)
        console.log(cSched)
        console.log(remoteC)
        var data = JSON.stringify({
          "Name_payplan": cPlanname,
          "Time_installment": cSched,
          "Amount_installment": cInstallAm,
          "Autom_load": remoteC
        });
        
        var config = {
          method: 'post',
          url: 'http://192.168.1.15:4600/registerPaymentPlan',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        window.alert("Payment added");
      }

    return (
      <div>
        <div id="content1">
         <Link to="/home">
          <img src="https://images.squarespace-cdn.com/content/v1/5f2ab9544376675a2380db21/1611678854913-YO19B4V5IR5DODO6II6X/Header+Logo.png?format=1500w" className="ribbon" alt="" />
         </Link>
        </div>   
        <div className="text-center m-5-auto">
            
          <h5>Create a new Payment Plan</h5>
          <form onSubmit={handleSubmit} >                       
            <p>
                <label>Payment Plan Name</label><br/>
                 <input type="text" name="cPlanname" value={cPlanname} required 
                    onChange={(e) => setName(e.target.value)}/>

            </p>
            <p>
               <label>Installment Ammount </label><br/>
                <input  type="text"  name="cInstallAm" value={cInstallAm} required 
                    onChange={(e) => setAmmount(e.target.value)}/>
            </p>
                
                    <label>Payment schedule</label><br/>
                    <Select  
                    options={options1}
                     value={options1.find(obj => obj.value === cSched)} 
                      onChange={handleChangeSched}/>

                
                
                
                    <label>Remote Control </label><br/>
                    <Select 
                    options={options11}
                     value={options11.find(obj => obj.value === remoteC)} 
                      onChange={handleChangeRem}/>

               
              
                
            
        
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Create</button>
                </p>
            </form>
            <footer>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
      </div>
    )

}
