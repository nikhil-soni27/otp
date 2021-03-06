import React,{useState} from 'react';

const ConfirmPassword=()=> {
    
const [otp, setOtp] = useState(new Array(4).fill(""));
const [otp2, setOtp2] = useState(new Array(4).fill(""));

const handleChange = (element, index) => {
    console.log(element.nextSibling,'sibling')
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if(!element.value==""){
        if (otp.length+1 || element.nextSibling) {
            element.nextSibling.focus();
        }
    }
  
    if(element.value === ""){
         element.previousSibling.focus()
     }
}

const handleChange2 = (element, index) => {
   
    if (isNaN(element.value)) return false;
    setOtp2([...otp2.map((d, idx) => (idx === index ? element.value : d))]);
    if(!element.value==""){
        if (otp.length+1 || element.nextSibling) {
            element.nextSibling.focus();
        }
    }
  
    if(element.value === ""){
         element.previousSibling.focus()
     }
    }
    const openmodalHandler=()=>{
        if(JSON.stringify(otp) === JSON.stringify(otp2)){
            alert("pin changed successfully")
            }else{
                alert("pin doesn't match")
            }      
}

    const handleSubmit=(e)=>{
     e.preventDefault()    
}
         return(
            <>
           <div className="container">
               <div className="userInput">
            <form onSubmit={handleSubmit}>
            <h2>Change Credit Card Pin</h2>
            <p>Enter New Pin</p>
            {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="password"
                                name="password"
                                maxLength="1"
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                            />           
                        );
                    })}        
            <p>Re-Enter New PIN</p>
            {otp2.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="password"
                                name="password_repeat"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange2(e.target, index)}
                                />
                                  )
                                })}
                                      
            <div className="button-div">
                <button type="button" className='cancel-btn'>Cancel</button>
            <button type="Submit" value="submit" className="confirm-btn"onClick={openmodalHandler}>Create Pin</button>
            </div>  
            </form>
               </div>
           </div>
        
            </>
        )   
    }
        export default ConfirmPassword