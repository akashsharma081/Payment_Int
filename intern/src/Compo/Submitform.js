// npm i lottie-web --save
import React,{useEffect,useRef} from 'react'
import lottie from 'lottie-web';
function Submitform() {
    const container = useRef(null);
    useEffect(() => {
      lottie.loadAnimation({
          container:container.current,
          renderer:'svg',
          loop:true,
          autoplay:true,
          animationData: require('./payment-successfully.json')
      })  
    }, []);

    return (
        <div>
           <div className="container" ref={container} style={{width:"200px", height:"200px"}}></div> 
           <div class=" text-center">
           <h1>Thank you</h1>
           <br/>
           <p>Your  Transaction  Has  Been  Successfully  Completed</p>
           </div>
        </div>
    )
}

export default Submitform
