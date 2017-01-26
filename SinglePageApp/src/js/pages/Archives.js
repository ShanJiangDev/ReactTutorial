import React from "react";

{/*
	"http://localhost:8080/#/archives/some--article123123?_k=b02gxa"
	"some--article123123", this variable is located at "this.props. params.article"

	CLEAN VARIABLE NAME
	<h1>Archives ({this.props.params.article})</h1>
	==
	const{params} = this.props;
	+
	<h1>Archives ({params.article})</h1>
	==
	const{article} = params;
	+
	<h1>Archives ({article})</h1>

	Use query variable
	previous url: http://localhost:8080/#/archives/articlename?_k=fotnhb
	add one query variable: http://localhost:8080/#/archives/articlename?_k=fotnhb?date=today
	add two quesy variable: http://localhost:8080/#/archives/articlename?_k=fotnhb?date=tomorrow&filter=none
	this "today" value can be find under this.props.location.query.date
	Get this query variable by:
	const{query} = this.props.location;
	const{date, filter} = query;


*/}

export default class Archives extends React.Component{
	render(){
		console.log(this.props);
		const{params} = this.props;
		const{article} = params; 

		const{query} = this.props.location;
		const{date, filter} = query;
		return(
			<div>
				<h1>Archives ({article})</h1>
				<h4>date: {date}, filter: {filter}</h4>
			</div>
		);
	}
}