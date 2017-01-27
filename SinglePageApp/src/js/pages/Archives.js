import React from "react";
import Article from "../components/Article";

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

export default class Archives extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Archives</h1>
        article: {article}, date: {date}, filter: {filter}
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
