import React from "react";
{/*Component's name always start with capital letter*/}
{/* Only return one element at the time */}
export default class Tittle extends React.Component {
	render(){
		console.log(this.props.title);
		return(
			<h1>{this.props.title}</h1>
		);
	}
}