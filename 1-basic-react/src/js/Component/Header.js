import React from "react";
import Tittle from "./Header/Tittle";
{/*Component's name always start with capital letter*/}
{/* Only return one element at the time */}
export default class Header extends React.Component {
	render(){
		const name = "will";
		console.log(this.props);
		return(
			<div>
				<Tittle title={this.props.title} />
			</div>
		);
	}
}