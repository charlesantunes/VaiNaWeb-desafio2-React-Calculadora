import React, { Component } from 'react';

import styled from 'styled-components';

export const Section = styled.section`
  background-color:rgb(200, 100, 50); 
	border: 3px outset rgb(200, 100, 50);
	border-radius: 10px;
	padding: 5px;
  width: 22em;
  height: 32em;
  margin: 2rem auto;
  position: relative;
  h1{
    margin-top: 0;
    padding-top: 1rem;
    text-align: center;
    color: white;
    }

    h1 {
    width: 192px;
    position: relative;
    left: 0%;
    animation: h1 5s linear infinite;
}
    @keyframes h1 {

    50% {
        left: 45%;
    }

}
  
`
export const Input = styled.div`
  background-color: #dddddd;
  border: 8px ridge white;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 1.7em;
  margin: 0 auto;
  color: black;
  
  h2{
    background-color: #dddddd;
    border: 8px ridge white;
    color: black;
    font-weight: bold;
    text-align: center;
    font-weight: bolder;
    font-size: 2rem;
    width: 22px;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 3px;
  }
  h3{
    /* background-color: #dddddd; */
    width: 42%;
    font-weight: bold;
    font-size: 20px;
    border: none;
    outline: 0;
    text-align: center;
  }  
  `
export const Result = styled.div`
  background-color: #dddddd;
  border: 8px ridge white;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 1.7em;
  margin: 0 auto;
  color: black;

  h2{
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    border: none;
    outline: 0;
  }
`
export const Teclado = styled.div`
  width: 90%;
  height: 22em;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  button{
    background-color: black; 
    color: white;
    margin: 6px;
    font-size: 20px;
    border:3px solid black; 
    border-radius: 10px;
    height: 60px;
    width: 60px;
    cursor: pointer;
    a{
      color: white;
      text-decoration: none;
    }
  }
  button:first-child{
    background-color: red;
    border: none;
  }
  button:hover{
    background-color: #C6C6C6; 
	  color: black;
	  border: 3px solid #C6C6C6; 
	  cursor: pointer;
  }
`

export default class Header extends Component{
  state = {
    n1:"",
    n2:"",
    result:"",
    operacao:"",
    mudarTela:""
  }
  
display = (e) => {
  const tela1 = e.target.value;

  if ((this.state.operacao === "+")||(this.state.operacao === "-")||(this.state.operacao === "x")||(this.state.operacao === "/")||(this.state.operacao === "p")){
    this.setState({n2:this.state.n2 + tela1});
  }else{
    this.setState({n1:this.state.n1 + tela1});
  }  
}
result = () => {
  const num1 = parseFloat(this.state.n1);
  const num2 = parseFloat(this.state.n2);

  if(this.state.operacao === "+"){
    this.setState({result:num1 + num2});
    document.body.style.background = "red";
  }
  if(this.state.operacao === "-"){
    this.setState({result:num1 - num2});
    document.body.style.background = "green";
  }
  if(this.state.operacao === "x"){
    this.setState({result:num1 * num2});
    document.body.style.background = "pink";
  }
  if(this.state.operacao === "/"){
    this.setState({result:num1 / num2});
    document.body.style.background = "blue";
  }
  if(this.state.operacao === "p"){
    this.setState({result:Math.pow(num1, num2)});
    document.body.style.background = "blue";
  }
}
ope = (e) => {
  const opera =  e.target.value;
  this.setState({operacao: opera})
}
erase = () =>{
  this.setState({n1:"", n2:"", result:"", operacao:""})
}

  render(){
    return(
      <Section>
        <h1>Calculadora</h1>
        <Input>
          <h3 size={10} maxLength={10}>{this.state.n1}</h3>
          <h2>{this.state.operacao}</h2>
          <h3 size={10} maxLength={10}>{this.state.n2}</h3>
        </Input>
        <Result>
          <h2>{this.state.result}</h2>
        </Result>
        <Teclado>
          <button onClick={this.erase}>C</button>
          <button><a href='https://www.linkedin.com/in/charlesantunes2022/' target={"blank"}>Link</a></button>
          <button><a href='https://github.com/charlesantunes' target={"blank"}>Git</a></button>
          <button onClick={this.ope} value={"p"}>y<sup>x</sup></button>
          <button onClick={this.display} value={7}>7</button>
          <button onClick={this.display} value={8}>8</button>
          <button onClick={this.display} value={9}>9</button>
          <button onClick={this.ope} value={"/"}>/</button>
          <button onClick={this.display} value={4}>4</button>
          <button onClick={this.display} value={5}>5</button>
          <button onClick={this.display} value={6}>6</button>
          <button onClick={this.ope} value={"x"}>x</button>
          <button onClick={this.display} value={1}>1</button>
          <button onClick={this.display} value={2}>2</button>
          <button onClick={this.display} value={3}>3</button>
          <button onClick={this.ope} value={"-"}>-</button>
          <button onClick={this.display} value={0}>0</button>
          <button onClick={this.display} value={"."}>.</button>
          <button onClick={this.result}>=</button>
          <button onClick={this.ope} value={"+"}>+</button>
        </Teclado>
      </Section>
    )
  }
}