import React,{useState,useEffect} from 'react'
import logo from './logo.jpg';
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
import {  useNavigate  } from 'react-router-dom';
import axios from 'axios';
import Paymenthistory from '../History/Paymenthistory';
import { baseUrl } from "../config.js";
import Stylewinter from './Stylewinter.css';

function Winter1(props) {

    const [fullname, setfullname] = useState("");
    const [emailaddress, setemailaddress] = useState("");
    const [contactno, setcontactno] = useState("");
    const [collegename, setcollegename] = useState("");
    const [branch, setbranch] = useState("");
    const [year, setyear] = useState("");
    const [course, setcourse] = useState("");
    const [batch, setbatch] = useState("");
    const [amount,setamount]=useState("");
    const [coupon,setcoupon]=useState("");
    const [reference, setrefernce] = useState("");
    const [finaldiscountprice, setfinaldiscountprice] = useState("");
    const navigate = useNavigate();
    

function setValue(e){
        e.target.name=="FullName" && setfullname(e.target.value);
        e.target.name=="Emailaddress" && setemailaddress(e.target.value);
        e.target.name=="Contactno" && setcontactno(e.target.value);
        e.target.name=="Collegename" && setcollegename(e.target.value);
        e.target.name == "Branch" && setbranch(e.target.value);
        e.target.name == "Year" && setyear(e.target.value);
        e.target.name == "Batch" && setbatch(e.target.value);
        e.target.name == "Reference" && setrefernce(e.target.value);
        e.target.name == "Amount" && setamount(e.target.value);
        e.target.name == "Coupon" && setcoupon(e.target.value);
        e.target.name == "FinaldiscountPrice" && setfinaldiscountprice(e.target.value);
  }

  const setValue1=(e)=>{
    const findcourse=courses.filter(p=>p.name==e.target.value);
    setcourse(e.target.value);
    setamount(findcourse[0].price);
  
};
var courses=[
    {name:"Artificial Intelligence",price:5000*1.18 },
    {name:"Full Stack Development -MERN Strack",price:5000*1.18 },
    {name:"Data Engineering & DevOps",price:5000*1.18},
    {name:"Flutter App Development",price:5000*1.18 },
    {name:"Data Structures & Alogrithms",price:5000*1.18 },
    {name:"Internet of Things",price:5000*1.18 },
    {name:"Ethical Hacking & Cyber Security",price:5000*1.18 }
]
// .toLowwerCase()
const coupons=[{code:"Demo",discount:50}];
function checkcoupon(){
   var checking=coupons.filter(e=>e.code==coupon);
   if (checking.length>0){    
       var discount=checking[0]?.discount;
       var costdiscount=(discount*amount)/100;
    // setfinaldiscountprice(amount-costdiscount);
       setamount(amount-costdiscount);
       document.getElementById('btn1').style.display = "none";
       alert("Coupan apply succesfully");

   }
   else{
       alert("wrong coupan");
   }
  

};
// var p=(checkcoupon="true")?(finaldiscountprice):(amount);  

function sendData() {
    var amount1=parseInt(amount);
    var amount1=amount1*100;
    axios.post(baseUrl+'razorpay/create-order',{amount:amount1}).then((res)=>{
        // console.log(amount);
        var Orderid=res.data.orderid;
        console.log(Orderid);
        var options = {
            "key": "rzp_test_UwYYchGzh2FMiR", // Enter the Key ID generated from the Dashboard
            "amount": amount1, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "Acme Corp",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": Orderid, //This is a sample Order ID. Pass the `id` obtained in the previous step
            "handler": function (response){
                console.log("---success---");
                axios.post(baseUrl+'razorpay/capture',{orderid:Orderid,amount:amount})
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);

                var s = {
                    fullname, emailaddress,contactno, collegename, branch, year,course,batch,reference,amount,finaldiscountprice
                }
                console.warn("s is",s);
                axios.post(baseUrl+'create-student',s).then((res)=>{
                    alert("Thank you for Enroll course");          
                    console.log(res.data.data);  
                    navigate('/Submitform');
                 });

            },
            "prefill": {
                "name": fullname,
                "email": emailaddress,
                "contact": contactno
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open()
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
    })  
      
}
    return (
        <div>
            <div class="register">
                <div class="row">
                    <div class="col-md-3 register-left">
                    <div><img src={logo} alt="" /></div>
                        <h3>Learn and Build</h3>
                        {/* <p>You are 30 seconds away from earning your own money!</p> */}
                        {/* <form action="https://learnandbuild.in/auth/sign-in">  
                        <input type="submit"/>  
                        </form> */}
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Winter Training Regisatraion Form</h3>
                                <div class="register-form">
                                            <div class="row ">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label htmlfor="exampleInputEmail1">Full Name</label>
                                                        <input value={fullname} name="FullName" onChange={(e)=>{setValue(e)}} type="text" class="form-control" id="firstName" placeholder="Jem" required/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label htmlfor="state">Contact No.</label>
                                                        <input value={contactno} name="Contactno" onChange={(e)=>{setValue(e)}} type="text" class="form-control" id="contactno" placeholder="+91 9462681393" required/>
                                                        <div class="invalid-feedback">
                                                        Please provide a valid Contact No.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label htmlfor="country">Email address</label>
                                                        <input value={emailaddress} name="Emailaddress" onChange={(e)=>{setValue(e)}} type="email" class="form-control" id="exampleInputEmail1" placeholder="Jem@email.com" aria-describedby="emailHelp"/>               <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>     
                                                    </div>
                                                </div>  
                                            </div>    
                                            <div class="row ">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label htmlfor="country">College Name </label>
                                                        <input value={collegename} name="Collegename" onChange={(e)=>{setValue(e)}}type="text" class="form-control" id="collegename" placeholder="Xyz College" required/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label htmlfor="state">Current Year</label>
                                                        <select value={year} name="Year" onChange={(e)=>{setValue(e)}} class="custom-select d-block w-100" id="state" required>
                                                            <option value="">Choose...</option>
                                                            <option>1st Year</option>
                                                            <option>2nd Year</option>
                                                            <option>3rd Year</option>
                                                            <option>4th Year</option>
                                                        </select>  
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label htmlfor="state">Select Branch or Stream</label>
                                                        <select value={branch} name="Branch" onChange={(e)=>{setValue(e)}}class="custom-select d-block w-100" id="state" required>
                                                            <option value="">Choose...</option>
                                                            <option>Artificial intelligence</option>
                                                            <option>BCA / MCA</option>
                                                            <option>Biotechnology</option>
                                                            <option>Chemical</option>
                                                            <option>Civil</option>
                                                            <option>Computer Science</option>
                                                            <option>ECE</option>
                                                            <option>EI</option>
                                                            <option>Mechanical</option>
                                                            <option>Mechatronics</option>
                                                        </select>     
                                                    </div>           
                                                </div>                                 
                                            </div>
                                            <div class="row ">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                            <label htmlfor="country">Select Course</label>
                                                            <select value={course} name="Course"   
                                                                onChange={(e)=>{setValue1(e)}}
                                                                class="custom-select d-block w-100" id="country" required>
                                                                <option value="">Choose...</option>
                                                                {courses.map(e=><option value={e.name}>{e.name}</option>)}
                                                            </select> 
                                                    </div>
                                                    <div class="form-group">
                                                            <label htmlfor="zip">Reference</label>
                                                            <input value={reference} name="Reference" onChange={(e)=>{setValue(e)}} type="text" class="form-control" id="zip" placeholder="Reference" />
                                                    </div>
                                                    <div class="form-group">
                                                        <label htmlfor="zip">Amount</label>
                                                        <input value={amount} name="Amount" type="text" class="form-control" id="zip" placeholder="Amount" disabled="disabled" />                        
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label htmlfor="state">Select Batch</label>
                                                        <select value={batch} name="Batch" onChange={(e)=>{setValue(e)}}class="custom-select d-block w-100" id="state" required>
                                                            <option value="">Choose...</option>
                                                            <option>1 Dec. 2021</option>
                                                            <option>15 Dec. 2021</option>
                                                        </select>
                                                        <div class="invalid-feedback">
                                                        Please provide a valid state.
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label htmlfor="zip">Apply Coupon (If Any)</label>
                                                        <input value={coupon} onChange={(e)=>setValue(e)} name="Coupon" type="text" class="form-control" id="zip" placeholder="Coupon" />     
                                                        <button onClick={checkcoupon} class="btnRegister" id="btn1">Apply</button>
                                                                                         
                                                    </div>
                                                </div>                                 
                                            </div>                            
                                </div>
                                <button type="submit" class="btnRegister btn2"  onClick={sendData}>Enroll Now</button>
                                <br/>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>                      
        </div>
    )
}

export default Winter1
