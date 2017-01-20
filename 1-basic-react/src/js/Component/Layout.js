import React from "react";
import Header from "./Header";
import Footer from "./Footer";
{/*Component's name always start with capital letter,
	Because they are structor, they are not a render DOM element yet.
	They have the capacity to render*/}
{/* Only return one element at the time */}
export default class Layout extends React.Component {
	constructor(){
		{/*Super() is need everytime for the first line inside constructor*/}
		super();
		this.name = "Shan"
		{/*this.state default is null
			1. Always set State in the constructor()
			2. Whenever state changes on a component, the component iwll automatically re-render
			and update the Dom if there are any changes.
			2.1 If there is no changes, Dom wont get touched at all
			2.2 How this works:
				Whenever react renders out all the comonents (the component tree), it renders
				the layout the header the footer everything then it looks for changes from the 
				Virtual Dom to the actual Dom. If there are changes it will update only the 
				affected nodes in the most efficient way. If there is no changes at all it doesnt
				even touch the webpage
			3. Virtual Dom: Everything is updated behind the scenes and Only change in the real 
				dumb if there is differences --> Allows this applications to become extremelly fast
			4. State only get used if a component has an internal value that only affect that component
				and doesnt really affect any of the rest of the app if thereäs something that affects layout 
				and affects absolutely nothing else state maybe appropriate
			*/}
		this.state = {name: "Will"};
	}
	getVale(){
		return 9;
	}
	getSecondVal(val){
		return val*val;
	}


	render(){
		setTimeout(function() { 
			{/*Change state after one second*/}
			this.setState({name: "Bob"}); 
		}.bind(this), 3000);

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
				<Footer />
				{this.state.name}
				
			</div>
				
		);
	}
}