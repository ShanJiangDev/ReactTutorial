import React from "react";
import Tittle from "./Header/Tittle";
{/*Component's name always start with capital letter*/}
{/* Only return one element at the time */}
export default class Header extends React.Component {
	render(){
		const name = "will";
		return(
			<div>
				<header>header</header>
				<Tittle />
			</div>
		);
	}
}