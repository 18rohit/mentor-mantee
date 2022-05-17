import React from 'react';
import Header from '../components/Header.js'
import Styles from '../css/screens/signup.module.css';
import { useState } from 'react'
import { signup } from '../util/cognito';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import {useHistory} from 'react-router-dom';
import 'react-notifications/lib/notifications.css';
// import {useEffect} from 'react'


function Signup(props) {

    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnfpass, setcnfpass] = useState('');
    const topic = "bandi nahi pat rahi";

    const signupButtonFunction = async() => {
        if (name === '') {
            NotificationManager.error('Name cannot be empty', 'Error',1000);
        }else{
            if(email===''){
                NotificationManager.error('Enter email address', 'Error',1000);
            }else{
                if(password.length<6){
                    NotificationManager.error('Password length must be greater than 6', 'Error',1000);
                }else{
                    if(password!==cnfpass){
                        NotificationManager.error("Confirm password does not match",'Error',1000);
                    }else{
                        const info ={
                            name:name,
                            email:email,
                            topic:topic,
                        };
                        await signup(email, password, info).then((usr)=>{
                            if(usr){
                                history.push("/profile")
                            }
                        })
                    }
                }
            }
        }
    }
    console.log(window.innerWidth);
    return (
        <div>
            <Header />{password}and{cnfpass}
            <div style={{display: 'flex',justifyContent: 'center', width:'100%' }}>
                <div className={Styles.signupmain}  >
                    <div className={Styles.signupForm}>
                        <h3 className="signid"> SignUp</h3>
                        <p className="topline">Enter your correct information</p>
                        <div>
                            <input type="text" className={Styles.formcontorlsignup} placeholder="Full Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                            <br />
                            <input type="email" className={Styles.formcontorlsignup} placeholder="Email Address" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <br />
                            <input type="password" className={Styles.formcontorlsignup} placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <br />
                            <input type="password" className={Styles.formcontorlsignup} placeholder="Confirm Password" value={cnfpass} onChange={(e) => { setcnfpass(e.target.value) }} />
                            <br />
                            <button className={Styles.signupbtn} onClick={signupButtonFunction}>Sign Up</button>
                        </div>
                        <p className={Styles.alreadyacc}>Already have an account? <a href="/login">Login</a></p>
                    </div>
                </div>
            </div>
            <NotificationContainer />
        </div>
    );
}

export default Signup;