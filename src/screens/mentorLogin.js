import React from 'react';
import Header from '../components/Header.js'


function mentorLogin(props) {
    return (
        <div>
            <Header />
            <div className="mainmentorlogin" style={{width:'100%',textAlign:'center', border:'10px solid black'}}>
                <h3 id="login"> Login</h3>
                <p id="topline">Enter your Login Credentials</p>
                <form>
                   
                    <input type="email" id="email" placeholder="Email Address" name="email" />
                    <br/>
                    <input type="password" id="pass" placeholder="Password" name="password" />
                    <br/>
                    <button id="btn">Login</button>
                </form>
            </div>
        </div>
    );
}

export default mentorLogin;