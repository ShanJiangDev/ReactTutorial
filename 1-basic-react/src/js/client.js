import React from "react";
import ReactDOM from "react-dom";
{/* Only return one element at the time */}
class Layout extends React.Component {
	getVale(){
		return 9;
	}
	getSecondVal(val){
		return val*val;
	}
	render(){
		const name = "will";
		return(
			<div>
				<h1>It working123!</h1>
				<h1>It working123!</h1>
				<p> its {name} </p>
				<p> its {1+2}</p>
				<p> number from function: {this.getVale()} </p>
				<p> double amount of 2: {this.getSecondVal(2)} </p>
			</div>
		);
	}
}

const app = document.getElementById('app');
{/*Render Layout into App*/}
ReactDOM.render(<Layout/>, app);


