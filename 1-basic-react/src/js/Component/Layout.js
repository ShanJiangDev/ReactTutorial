import React from "react";
import Header from "./Header";
{/*Component's name always start with capital letter,
	Because they are structor, they are not a render DOM element yet.
	They have the capacity to render*/}
{/* Only return one element at the time */}
export default class Layout extends React.Component {
	constructor(){
	{/*Super() is need everytime for the first line inside constructor*/}
		super();
		this.name = "Shan"
	}
	getVale(){
		return 9;
	}
	getSecondVal(val){
		return val*val;
	}
	render(){
		{/*Componet can add directly inside render, anywhere HTML is*/}
		var listHeader = [
			<Header />,
			<Header />,
			<Header />,
		];
		const name = "will";
		return(
			<div>
				<h1>It working123!</h1>
				<h1>It working123!</h1>
				<p> its {name} </p>
				<p> its {1+2}</p>
				<p> number from function: {this.getVale()} </p>
				<p> double amount of 2: {this.getSecondVal(2)} </p>
				<p> name from constructor: {this.name}</p>
				<Header />
				{listHeader}
			</div>
				
		);
	}
}