import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import RegisterPlan from './components/pages/RegisterPlan'
import FinancialTrans from './components/pages/FinancialTrans'
import ViewCustomer from './components/pages/ViewCustomer'
import './App.css'
import { history } from './components/history';
import { setAuthToken } from './components/pages/setAuthToken()'
import RouteGuard from './components/pages/RouteGuard'


export default function App() {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={ LandingPage } />
                    <Route path="/login" component={ LoginPage } />
                    <RouteGuard path="/finance" component={FinancialTrans}/>
                    <RouteGuard path="/createplan" component= {RegisterPlan}/>
                    <RouteGuard path="/register" component={ RegisterPage } />
                    <RouteGuard path="/viewcustomer" component={ViewCustomer}/>
                    <Route path="/forget-password" component={ ForgetPasswordPage } />
                    <RouteGuard path="/home" component={ HomePage } />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Designed & coded by tzi21</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "fixed",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}

const token = localStorage.getItem("token");
 if (token) {
     setAuthToken(token);
 }