import React,{useState,useEffect} from "react";
import Header from "../components/Header";
import firebase from '../util/Firebase';
import Styles from '../css/screens/peoples.module.css';

function  Peoples(props){  
    const [ppls, setPpls] = useState([]);
    const [once, setOnce] = useState(true);

    function fetchdata(){
        const accountReference = firebase.database().ref('mentors');
        accountReference.once('value',(snapshot)=>{
            const mentorList = [];
            snapshot.forEach(data=>{
                const dataValue = data.val();
                mentorList.push(dataValue)
            })
            setPpls(mentorList);
        })
    }
    console.log(ppls);

    useEffect(()=>{
        if(once){
            fetchdata();
            setOnce(false);
        }
    },[ppls, setPpls,once, setOnce]);

    return(
        
        <div>
            <Header/>
            <div>
                {
                    ppls.length>0 && ppls.map((ppl,i)=><div className={Styles.infocard}>
                        {i}
                        <br/>
                        {ppl.name}
                    </div>)
                }
            </div>
        </div>
    );
}


export default Peoples;