import React,{useState} from 'react'

export default function Form() {
    const [myStyle, setMyStyle]=useState({
            color:'white',
            backgroundColor:'black'
        
        }
    )  
    const [mybtn, setMyBtn]=useState("Enable Dark Mode")
    
   const toggleStyle = () =>{
    if(myStyle.color === 'white'){
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setMyBtn("Enable dark Mode")
    }
    else{
        setMyStyle({
            color:'white',
            backgroundColor:'black'
        })
        setMyBtn("Enable light Mode")
    }
   }




  return (
  <>
 <div className='container' style={myStyle}>.

 <button onClick={toggleStyle} type="button" class="btn btn-secondary" style={{marginLeft:'85%'}}>{mybtn}</button>

    <form>
        <div className="form" style={myStyle}>
            <h1 style={{textAlign:'center', marginTop:'30px', fontSize:'28px', fontWeight:'bolder'}}>Login</h1>
            <div className='label'>
                <label style={myStyle}>First Name:</label>
                <br/>
                <input type="text" className='input'/>
                </div>

                <div className='label'>
                <label style={myStyle}>Last Name:</label><br/>
                <input type="text"  className='input'/>
                </div>
                <div className='label'>
                <label style={myStyle}>Email:</label><br/>
                    <input type="text"  className='input'/>
                </div>
                <div className='label'>
                <label style={myStyle}>Password:</label><br/>
                    <input type="text" className='input'/>
                </div>
             
            
                <button>Sign up</button>
                
                </div>
  
                </form>
                
</div>
            
  </>
  )
}