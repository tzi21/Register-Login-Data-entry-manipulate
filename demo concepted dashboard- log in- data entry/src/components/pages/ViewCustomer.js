import React from 'react'
import { Link } from 'react-router-dom'

import { useState} from 'react'
import Grid from '@material-ui/core/Grid'
import '../../App.css'



const empty = [];


export default function ViewCustomer() {
   
    const [test0, setUsers] = useState("")
    const [test1, setUsers1] = useState("")
    const [test, setUsers0 ] = useState([])

    const clearData = ()=>
    {
      setUsers0(empty);
    }

    const fetchData = async (e) => {
          e.preventDefault()


          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          
          var raw = JSON.stringify({
            "Customer_email": test1,
            "Customer_name_last": test0
          });
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("http://192.168.1.15:4600/viewCustomerDetails", requestOptions)
            .then(response => response.text())
            .then(result => setUsers0((JSON.parse(result)).customer[0]))
            .catch(error => alert('Wrong Email and/or L.Name', error)); 
        }
 

    return (
<div>
        <div id="content1">
        <Link to="/home">
        <img src="https://images.squarespace-cdn.com/content/v1/5f2ab9544376675a2380db21/1611678854913-YO19B4V5IR5DODO6II6X/Header+Logo.png?format=1500w" className="ribbon" alt="" />
       </Link>
        </div>   
        <div className="text-center m-5-auto">
          
            <h5>Search Customer </h5>
            <form onSubmit={fetchData}  >
            <Grid container spacing={5}>
                <Grid item xs={6}>
                
                <p>
                    <label>Last Name</label><br/>
                    <input  type="text" name="test" value={test0}
                    onChange={(e) => setUsers(e.target.value)}
                    />

                </p>      
                </Grid>
                 <Grid item xs={6}>
                <p>
                    <label>Email</label><br/>
                    <input  type="text" name="LastN" value={test1}
                    onChange={(e) => setUsers1(e.target.value)}
                    
                    />

                </p>        
                </Grid></Grid>        
                <p>
                <button 
                     id="sub_btn" type="submit">Search</button>

                   
                </p>
                <p>
                    <button 
                     className="btn1" type="button" onClick={clearData} >Clear</button>
                </p>
            

                
              
            </form>
            {/* <p>
                    <button 
                     className="btn1" type="button" onClick={clearData} >Clear</button>
                </p>
             */}
        </div>
        <div className="mt-2 p-2">
                  <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-5">
                            <h6 className="mb-0">Customer Id</h6>
                            </div>
                            <div className="col-lg-7 text-secondary">
                            {test.Customer_ID}
                            </div>
                        </div>
                      <hr/>
                        <div className="row">
                            <div className="col-lg-5">
                            <h6 className="mb-0">First Name</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                           {test.Customer_name_first}
                            </div>
                        </div>
                      <hr/>
                        <div className="row">
                            <div className="col-lg-5">
                            <h6 className="mb-0">Last Name</h6>
                            </div>
                            <div className="col-lg-7 text-secondary">
                           {test.Customer_name_last}
                            </div>
                        </div>
                      <hr/>
                        <div className="row">
                            <div className="col-lg-5">
                            <h6 className="mb-0">Email</h6>
                            </div>
                            <div className="col-lg-7 text-secondary">
                          {test.Customer_email}
                            </div>
                        </div>
                      <hr/>
                        <div className="row">
                            <div className="col-lg-5">
                            <h6 className="mb-0">Phone Number</h6>
                            </div>
                            <div className="col-lg-7 text-secondary">
                          {test.Customer_phone1}
                            </div>
                        </div>
                      <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Mobile Number</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                         {test.Customer_phone2}
                            </div>
                        </div>
                      <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Gender</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                            {test.Customer_sex}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Address</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                            {test.Customer_address_f1}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Post Code</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Customer_address_f2}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">City</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Customer_address_f3}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Village</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Customer_village}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Province</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Customer_province}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Longtitude & Latitude</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Longitude} & {test.Latitude}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Number of household Members</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Household_number}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Number of minor male members </h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Household_male}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Number of minor female members </h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Household_female}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Customer Plan</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Customer_plan}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Type of ASW System</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.System_type}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Total System Price</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.System_price}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Ammount of Downpayment</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Downpayment}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Current Open Ammount</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Open_amount}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Date of initiation</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Customer_date}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Date of Downpayment</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Downpayment_date}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Date of last Payment</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Last_payment_date}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Date of next Payment</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Next_payment_date}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Owner of System</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Household_own}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Agent Id</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Customer_agent_id}
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-5">
                            <h6 className="mb-0">Additional Info</h6>
                            </div>
                            <div className="col-sm-7 text-secondary">
                          {test.Customer_extra}
                            </div>
                        </div>
                        <hr/>
                    </div>
                    </div>
                  </div>
            
            </div>     
             
    )

    }
