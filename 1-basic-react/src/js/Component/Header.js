import React from "react";
import Tittle from "./Header/Tittle";
{/*Component's name always start with capital letter*/}
{/* Only return one element at the time */}

{/* Whenever you are binding a value, you also need to setup a change 
	listener for that "onChange={this.handleChange.bind(this)}", 
	so it actually changes when the value changes */}
	
export default class Header extends React.Component {	
	handleChange(e){
	{/* e.target -> Element receive changes */}
		const title = e.target.value;
    	this.props.changeTitle(title);
	}
	render(){
		const name = "will";
		return(
			<div>
				<Tittle title={this.props.title} />
				<input value = {this.props.title} onChange={this.handleChange.bind(this)} />
			</div>
		);
	}
}