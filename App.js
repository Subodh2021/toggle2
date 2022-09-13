//import logo from './logo.svg';
//import './App.css';

import React, { Component } from "react";
import ON from "./On.jpg";
import OFF from "./Off.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arr: [
        {
          button: false,
        },
        {
          button: false,
        },
        {
          button: false,
        },
        {
          button: false,
        },
        {
          button: true,
        },
      ],
    };
  }
  update = (index) => {
     let temp = [...this.state.arr]
     temp[index].button = !temp[index].button
    // this.setState((prestate1)=>{

    //   return { 
    //     ...prestate1, 
    //     arr : [
    //       ...prestate1.arr,
    //       [index] = 0
    //     ]
    //   }  
    
    console.log("clicked Index",index+1);
    console.log("Changed to ",temp[index].button);
    console.log("Full Object", this.state);
    
   }

    // const abc = (prestate1, index) => {
    //   return { 
    //     ...prestate1, 
    //     arr : [
    //       ...prestate1.arr,
    //       prestate1.arr[index] = {
    //         ...prestate1.arr[index],
    //         button : !prestate1.arr[index].button
    //       }
    //     ]
    //   };
    // };
    
    // console.log("ORIGINAL", this.state, index);
    
    // let tmp = abc(this.state, index)
    // console.log("UPDATED", tmp);
  
  render() {
    return (
      <div>
        {alert("Open Console")}
        {this.state.arr.length && (this.state.arr) instanceof Array && this.state.arr.map((ele, index) => {
          return (
            <>
            
              { <img src={this.state.arr[index].button ? OFF : ON} alt="Button"  width='20px' height='20px'/>}{" "} 
              <button onClick={() => this.update(index)}>
                {ele.button ? "OFF" : "On"}
              </button>
              <br />
            </>
          );
        })}
      </div>
    );
  }

}

