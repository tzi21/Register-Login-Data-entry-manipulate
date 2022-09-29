import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import '../../App.css'
import Select from 'react-select'
import axios from 'axios'
import { useState} from 'react'





var options21= [];
const options = [
   
    { 
      label: "1", 
      value: "1",
    }, 
    {
      label: "2",
      value: "2",
    }
  ];

  const options1 = [
    
    { 
      label: "Male", 
      value: "M",
    }, 
    {
      label: "Female",
      value: "F",
    }
  ];

  const options11 = [
    { 
      label: "No", 
      value: "N",
    }, 
    {
      label: "Yes",
      value: "Y",
    }
  ];

  var data;
  const getPaynames = () => {
    var config = {
        method: 'get',
        url: 'http://192.168.1.15:4600/getNamePlan',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        data = response.data.name_plans;  
        
        createOpt(data)

      })
      .catch(function (error) {
        console.log(error);
      });
      
      }

    

 const createOpt =()=>{
   var test = data
   
 
for (var i = 0; i < test.length; i++) {
    options21.push({
        label: test[i],
        value: test[i]
    });
 }


}

  getPaynames()


export default function RegisterPage() {
    const [cId, setcId] = useState("");
    const [cDate, setcDate] = useState("");
    const [cFname, setFname] = useState("");
    const [cLname, setLname] = useState("");
    const [cGender, setcGender] = useState("");
    const [cAddr, setcAddr] = useState("");
    const [cPost, setcPost] = useState("");
    const [cVill, setcVill] = useState("");
    const [cProv, setcProv] = useState("");
    const [cCity, setcCity] = useState("");
    const [cLong, setcLong] = useState("");
    const [cLat, setcLat] = useState("");
    const [cEmail, setcEmail] = useState("");
    const [cPnumb, setcPnumb] = useState("");
    const [cMnumb, setcMnumb] = useState("");
    const [cPlan, setcPlan] = useState("");
    const [cMembers, setcMembers] = useState("");
    const [cMmemb, setcMmemb] = useState("");
    const [cFmemb, setcFmemb] = useState("");
    const [cDpaym, setcDpaym] = useState("");
    const [cDdownp, setcDdownp] = useState("");
    const [cDlastp, setcDlastp] = useState("");
    const [cDnextp, setcDnextp] = useState("");
    const [cCopena, setcCopena] = useState("");
    const [cTotalpr, setcTotalpr] = useState("");
    const [cType, setcType] = useState("");
    const [cOwn, setcOwn] = useState("");
    const [cAgent, setcAgent] = useState("");
    const [cAddinf, setcAddinf] = useState("");


    const handleChangeGend = e => {
        setcGender(e.value);}
    
    const handleChangePlan = e => {
        setcPlan(e.value);}

    const handleChangeType = e => {
        setcType(e.value);}

    const handleChangeOwn = e => {
        setcOwn(e.value);}

        const handleSubmit = async (e) => {
            e.preventDefault();
    
           
            var data = JSON.stringify({
                "Customer_ID": cId,
                "Customer_name_last": cLname,
                "Customer_name_first": cFname,
                "Customer_address_f1": cAddr,
                "Customer_address_f2": cPost,
                "Customer_address_f3": cCity,
                "Customer_sex": cGender,
                "Customer_village": cVill,
                "Customer_province": cProv,
                "Longitude": cLat,
                "Latitude": cLong,
                "Customer_email": cEmail,
                "Customer_phone1": cPnumb,
                "Customer_phone2": cMnumb,
                "Customer_extra": cAddinf,
                "Household_male": cMmemb,
                "Household_female": cFmemb,
                "Downpayment":cDpaym,
                "Next_payment_date": cDnextp,
                "Last_payment_date": cDlastp,
                "Open_amount": cCopena,
                "System_price": cTotalpr,
                "System_type": cType,
                "Household_own": cOwn,
                "Downpayment_date":cDdownp,
                "Customer_agent_id": cAgent,
                "Customer_plan": cPlan,
                "Household_number": cMembers,
                "Customer_date": cDate
            });
            
            var config = {
              method: 'post',
              url: 'http://192.168.1.15:4600/registerCustomer',
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
            window.alert("Customer added");
            window.location.href = '/register';


          }



    return (
<div>
        <div id="content1">
        <Link to="/home">
        <img src="https://images.squarespace-cdn.com/content/v1/5f2ab9544376675a2380db21/1611678854913-YO19B4V5IR5DODO6II6X/Header+Logo.png?format=1500w" className="ribbon" alt="" />
       </Link>
        </div>   
        <div className="text-center m-5-auto">
            
            <h5>Register a new Customer</h5>
            <form  onSubmit={handleSubmit}>
            <Grid container spacing={5}>
                <Grid item xs={6}>
                
                <p>
                    <label>Customer ID</label><br/>
                    <input type="text" name="cId" value={cId} required
                    onChange={(e) => setcId(e.target.value)} />
                </p>
                <p>
                    <label>Date of initiation </label><br/>
                    <input  type="date"  name="cDate" value={cDate} required
                    onChange={(e) => setcDate(e.target.value)} />
                </p>
                <p>
                    <label>First name</label><br/>
                    <input type="text" name="cFname" value={cFname} required
                    onChange={(e) => setFname(e.target.value)} />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="cLname" value={cLname} required 
                    onChange={(e) => setLname(e.target.value)}/>
                </p>
                
                    <label>Gender</label><br/>
                    <Select  
               

               options={options1}
               value={options1.find(obj => obj.value === cGender)} 
               onChange={handleChangeGend}
              
              />
                
                <p>
                    <label>Address</label><br/>
                    <input type="text" name="cAddr" value={cAddr} required 
                    onChange={(e) => setcAddr(e.target.value)}/>
                </p>
                <p>
                    <label>Post Code</label><br/>
                    <input type="text" name="cPost" value={cPost} required 
                    onChange={(e) => setcPost(e.target.value)}/>
                </p>
                <p>
                    <label>City</label><br/>
                    <input type="text" name="cCity" value={cCity} required
                    onChange={(e) => setcCity(e.target.value)} />
                </p>
                <p>
                    <label>Village</label><br/>
                    <input type="text" name="cVill" value={cVill} required
                    onChange={(e) => setcVill(e.target.value)} />
                </p>
                <p>
                    <label>Province</label><br/>
                    <input type="text" name="cProv"  value={cProv} required
                    onChange={(e) => setcProv(e.target.value)} />
                </p>
               
                
                <p>
                    <label>Longtitude</label><br/>
                    <input type="text" name="cLong" value={cLong} required 
                    onChange={(e) => setcLong(e.target.value)}/>
                </p>
                <p>
                    <label>Latitude</label><br/>
                    <input type="text" name="cLAt"  value={cLat} required
                    onChange={(e) => setcLat(e.target.value)} />
                </p>
                <p>
                    <label>Email Address</label><br/>
                    <input type="email" name="cEmail" value={cEmail} required 
                    onChange={(e) => setcEmail(e.target.value)}/>
                </p>
                <p>
                    <label>Phone Number</label><br/>
                    <input type="text" name="cPnumb" value={cPnumb} required 
                    onChange={(e) => setcPnumb(e.target.value)}/>
                </p>
               
               
              
                </Grid>
                <Grid item xs={6}>
                <p>
                    <label>Mobile Number</label><br/>
                    <input type="text" name="cMnumb" value={cMnumb} required 
                    onChange={(e) => setcMnumb(e.target.value)}/>
                </p>
                
                    <label>Customer Plan</label><br/>
                    <Select  
               options={options21}
              
               value={options21.find(obj => obj.value === cPlan)} 
               onChange={handleChangePlan}
              
              /><br/>
                <p>
                    <label>Number of household members</label><br/>
                    <input type="text" name="cMembers" value={cMembers} required 
                    onChange={(e) => setcMembers(e.target.value)}/>
                </p>
            
                <p>
                    <label>Number of minor male members </label><br/>
                    <input type="text" name="cMmemb" value={cMmemb} required 
                    onChange={(e) => setcMmemb(e.target.value)}/>
                </p>
                <p>
                    <label>Number of minor female members </label><br/>
                    <input type="text" name="cFmemb" value={cFmemb} required 
                    onChange={(e) => setcFmemb(e.target.value)}/>
                </p>
                <p>
                    <label>Amount of Downpayment </label><br/>
                    <input type="text"  name="cDpaym" value={cDpaym} required 
                    onChange={(e) => setcDpaym(e.target.value)}/>
                </p>
                <p>
                    <label>Date of Downpayment </label><br/>
                    <input type="date" name="cDdownp" value={cDdownp} required 
                    onChange={(e) => setcDdownp(e.target.value)}/>
                </p>
                <p>
                    <label>Date of Last payment </label><br/>
                    <input type="date" name="cDlastp"  value={cDlastp} required 
                    onChange={(e) => setcDlastp(e.target.value)}/>
                </p>
                <p>
                    <label>Date of Next payment </label><br/>
                    <input type="date" name="cDnextp" value={cDnextp} required
                    onChange={(e) => setcDnextp(e.target.value)} />
                </p>
                <p>
                    <label>Current Open ammount </label><br/>
                    <input type="text" name="cCopena" value={cCopena} required
                     onChange={(e) => setcCopena(e.target.value)} />
                </p>
                <p>
                    <label>Total System Price </label><br/>
                    <input type="text" name="cTotalpr" value={cTotalpr} required 
                     onChange={(e) => setcTotalpr(e.target.value)}/>
                </p>
                
                    <label>Type of ASW System</label><br/>
                    <Select  
               

               options={options}
              
               value={options.find(obj => obj.value === cType)} 
               onChange={handleChangeType}
              
              />
                
                
                    <label>Owner of System</label><br/>
                    <Select  
               

               options={options11}
              
               value={options11.find(obj => obj.value === cOwn)} 
               onChange={handleChangeOwn}
              
              />
                <p>
                    <label>Agent ID </label><br/>
                    <input type="text" name="cAgent" value={cAgent} required
                     onChange={(e) => setcAgent(e.target.value)} />
                </p>
               
                </Grid></Grid>
                <p>
                  <br/>  <label>Additional Information (optional)</label><br/>
                    <textarea type="text" name="cAddinf" value={cAddinf} 
                     onChange={(e) => setcAddinf(e.target.value)}/>
                </p>
               
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </div>
    )

}
