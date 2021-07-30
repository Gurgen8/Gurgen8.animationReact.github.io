
import React, { Component } from 'react';
import _, { set } from "lodash";
import './App.css';
import { ReactComponent as Ball } from './assets/images/sport.svg';
import { ReactComponent as Bottle} from './assets/images/water-bottle.svg';





class App  extends Component {
  constructor(props){
    super(props)
    this.state={
      start:false,
      float:false,  
    }
  }



  start=()=>{
const time=_.random(3000,10000)
    this.setState({
      start:true,
      time,
    })
    
 setTimeout(()=>{
   const x=0;
   if(x<time){
    this.setState({
      float:true,
      time:6500,
      color:true,
      
      
    })
   }
 },time) 
  }


reset=()=>{
  

     this.setState({
       float:false,
       start:false,
       color:false,
       time:250,
     })

 

  
}

  render(){
    const {time,start,float,color}=this.state
    return <div>
      <Ball style={{transition:`all ${time}ms `,marginTop:start? "110px":"0px" ,width: start? "80px":'300px',top: float? "120px":"-260px",fill:color? "blueviolet":"black"}} onClick={(this.start)} className="ball"/>
      <Bottle className="bottle"/>
      <button onClick={this.reset}>RESET</button>
    </div>
  }
}



export default App;
