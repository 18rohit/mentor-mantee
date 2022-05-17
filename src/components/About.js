import React from 'react'
import '../css/components/about.css';


function About(props) {
    return (
        <div style={{padding:'5%'}} >
            <h2 style={{color:'Black',textAlign:'center'}}>About</h2>
            <hr />
            <div>
            <p className = "description" style={{fontSize:'15px'}} > We at VSR are a group of IITians who aim to help the JEE aspirants by guiding them on the right path and preparing
                them for one of the most demanding exam. Having gone through the journey ourselves, we are well aware of the
                challenges and difficulties a student faces, and can not only empathize with your cause, but also provide ways
                of overcoming your obstacles and getting ahead of any failures you encounter on the way. We intend to do so by
                providing you with a schedule which has been individualized to best suit your needs, and a mentor who'll constantly
                be there to check up on you and guide you along the way. Our mentors have deep knowledge how student psychology works
                in jee exam as they have already faced and overcome that. We hope to make your mentor your personal JEE friend, 
                available to you at all times, whenever you're in need of any guidance or motivation.
            </p>
            </div>
        </div>
    );
}

export default About;