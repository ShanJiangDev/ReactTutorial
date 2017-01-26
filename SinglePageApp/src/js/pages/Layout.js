import React from "react"
import {Link} from "react-router";

	{/*
		<Link to="archives">archives</Link>:
		1. url will contains archives.....
		2. it will load archives
		3. it will grab the components from client.js
		<Route path="archives" component={Archives}></Route>
		and inject this component "Archives" as a child component
		to Layout.js
		So its basically going to send this.props.children is going
		to be this one:
		<Route path="archives" component={Archives}></Route>
		

		<Link to="archives">archives</Link> 
		-----------------------
		--Link to="archives"-->--Route path="archives"---
		------------------------>
		<Route path="archives" component={Archives}></Route>

	
		this.props.history.pushState(null,"/");	
		1. Goes back to the root
		2. Once use "pushState", the "Goes back button" enabled from browser, 
			which allowed user to go back to the previous this.state.
		this.props.history.replaceState(null,"/");	
		1. Replace current state to the parameter
		2. Will not provide the "goes back button"

		Check if the class is active or not:
		console.log(history.isActive("archives"));
	*/}

export default class Layout extends React.Component {
	navigate(){
		this.props.history.replaceState(null,"/");	
	}
  	render() {
  		const{history} = this.props;
  		console.log(history.isActive("archives"));
    	return (
    		<div>
    			<h1>KillerNews.net</h1>
    			{this.props.children}
    			<Link to="archives" activeClassName="Test" class="btn btn-danger">archives</Link>
    			<Link to="settings"><button class="btn btn-success">settings</button></Link>
    			<button onClick={this.navigate.bind(this)}>featured</button>
    		</div>
    );
  }
}