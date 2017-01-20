import React from "react";
import ReactDOM from "react-dom";
{/* Only return one element at the time */}
class Layout extends React.Component {
	render(){
		const name = "will";
		return(
			<div>
				<h1>It working123!</h1>
				<h1>It working123!</h1>
				<p> its {name} </p>
				<p> its {1+2}</p>
			</div>
		);
	}
}

const app = document.getElementById('app');
{/*Render Layout into App*/}
ReactDOM.render(<Layout/>, app);


