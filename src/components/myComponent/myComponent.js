import React, { Component } from 'react';
import { Button} from 'react-bootstrap';


class MyComponent extends Component {
  constructor() {       
      super();        
       this.click3 = this.click1.bind(this);  
         } 
 
  click1() {      
       console.log("Click1");  
  } 

  click2 = () => {   
          console.log("Click2"); 
   }; 


  render(){
    return (            
       <div>          
                <Button onClick={this.click1}>Button1</Button>         
                <Button onClick={this.click2}>Button2</Button>       
                <Button onClick={this.click3}>Button3</Button>          
                <Button onClick={this.click1()}>Button4</Button>           
                <Button onClick={() => { this.click1() }}>Button5</Button>    
       </div>       
         )   
  }
}

export default MyComponent;
