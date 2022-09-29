import React from 'react'
import { Link} from 'react-router-dom'
import { useState} from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

import '../../App.css'
import axios from 'axios';





export default function LoginPAge() {

    const [email1, setEmail] = useState("");
    const [pass1, setPassword] = useState("");

    const setAuthToken = token => {
      if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
      else
          delete axios.defaults.headers.common["Authorization"];
   }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log(email1)
      console.log(pass1)
      localStorage.setItem("email11",email1)
     
      //reqres registered sample user
      const loginPayload = {
        email: email1,
        password: pass1
      }
      const headers = {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin':'*'
          }
    
     await axios.post("http://192.168.1.15:4600/login", loginPayload, {headers: headers})
        .then(response => {
          //get token from response
          const token  =  response.data.token;
          const name = response.data.user.User_name_last;
    
          //set JWT token to local
          localStorage.setItem("token", token);
          localStorage.setItem("name",name);          
    
          //set token to axios common header
          setAuthToken(token);
          console.log(token)
          //redirect user to home page
          window.location.href = '/home'
        })
        .catch(err => console.log(err));
    };

    return (
    <div><div>
            <img className="center1" alt="" src="https://images.squarespace-cdn.com/content/v1/5f2ab9544376675a2380db21/1611678854913-YO19B4V5IR5DODO6II6X/Header+Logo.png?format=1500w"  />
           
        <div className="text-center m-5-auto fs-10">
               <form onSubmit={handleSubmit} >
                <p>
                    <label>Email or company ID</label><br/>
                    <input type="text" name="email1" value={email1}  required 
                     onChange={(e) => setEmail(e.target.value)}/>
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="pass1" value={pass1}
                     required
                    onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                
            </footer>
        </div>
        </div>
        <Box>
        
        <Container>
          <Row>
            <Column>
              <Heading>Product</Heading>
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Free demo</FooterLink>
              <FooterLink href="#">Download</FooterLink>
            </Column>
            <Column>
              <Heading>Contact</Heading>
              <FooterLink href="#">Find us</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Help</FooterLink>
             
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>
                    Facebook
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>
                    Instagram
                  </span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>
                    Twitter
                  </span>
                </i>
              </FooterLink>
             
            </Column>
            <Column>
              <Heading>Subscribe</Heading>
              <FooterLink href="#"><input placeholder="enter your email" size="3"></input></FooterLink>
              
            </Column>
            
          </Row>
        </Container>
      </Box>
      </div> 
    )
}
