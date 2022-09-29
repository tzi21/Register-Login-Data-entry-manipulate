import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import Select from 'react-select'



  const options1 = [
  
    { 
      label: "Via Agent", 
      value: "Via Agent",
    }, 
    {
      label: "Online",
      value: "Online",
    }
    
  ];



export default function FinancialTrans() {

    return (
<div>
        <div id="content1">
        <Link to="/home">
        <img src="https://images.squarespace-cdn.com/content/v1/5f2ab9544376675a2380db21/1611678854913-YO19B4V5IR5DODO6II6X/Header+Logo.png?format=1500w" className="ribbon" alt="" />
       </Link>
        </div>   
        <div className="text-center m-5-auto">
            
            <h5>Add a new transaction</h5>
            <form >
         
                
                <p>
                    <label>Customer ID</label><br/>
                    <input type="text" name="cCustID" required />
                </p>
               
                <p>
                    <label>Payment Method</label><br/>
                    <Select  >

                {options1.map((option) => (

                <option width="100%" value={option.value} required>{option.label}</option>

                ))}
                </Select>
                </p>
                <p>
                    <label>Agent ID</label><br/>
                    <input placeholder="For payments via agent ONLY" type="text" name="cCustID" required />
                </p>

                <p>
                    <label>Online payment ID</label><br/>
                    <input placeholder="For online payments ONLY" type="text" name="cCustID" required />
                </p>
                <p>
                    <label>Date of Payment</label><br/>
                    <input type="datetime-local" name="cCustID" required />
                </p>
                <p>
                    <label>Ammount Paid</label><br/>
                    <input type="text" name="cCustID" required />
                </p>
               
            
        
                {/* <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p> */}
                <p>
                    <button id="sub_btn" type="submit">Add new payment</button>
                </p>
            </form>
            <footer>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    )

}
