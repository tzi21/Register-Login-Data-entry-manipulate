import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {

    const handleLogout = () =>{
        localStorage.clear();    
    }



    return (
        <div >
           <div id="content">
            <img src="https://images.squarespace-cdn.com/content/v1/5f2ab9544376675a2380db21/1611678854913-YO19B4V5IR5DODO6II6X/Header+Logo.png?format=1500w" className="ribbon" alt="" />
          
            <div className="topright">
                <ul>Welcome, {localStorage.getItem("name")}</ul>
                {/* <ul>{localStorage.getItem("email11")}</ul> */}
            </div>

            
            <Link to="/register"  style={{ textDecoration: 'none' }}>
                <button >Register New Customer</button>
            </Link>            
            <Link to="/viewcustomer" style={{ textDecoration: 'none' }}>
                <button >View Customer Details</button>
            </Link>
                <button >Search Solar System</button>
                <button >Send SMS</button>
            <Link to="/createplan" style={{ textDecoration: 'none' }}>
                <button >Payment Plans</button>
            </Link>
            <Link to="/finance" style={{ textDecoration: 'none' }}>
                <button >Company Finance</button>
            </Link>
                <button >Total Overeview</button>
                <button >Company Details</button>
                <button >Wifi Settings</button>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button onClick={handleLogout}>Log out</button>
            </Link>
         
    
          </div>

            <div id="centercont" >
                <h3 >Solar Home System Administration</h3>
                <br/><br/><br/><br/>
                <p>Some Company Statistics:</p>
                <ul><strong>245</strong> Active systems registered</ul>
                <ul><strong>709 Kwh</strong> Energy produced since July 2022</ul>
                <ul><strong>89 Kwh</strong> Energy produced this month</ul>
                <ul><strong>2.450 Watt</strong> Solar Capacity</ul>
                <ul><strong>36</strong> Fully paid systems</ul>
                <ul><strong>5%</strong> Customers with a payment delay of {'>'}3 months</ul>
            </div>           
        </div>
    )
}
