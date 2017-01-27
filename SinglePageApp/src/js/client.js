import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
{/*
	import Bootstrap from "./vendor/bootstrap-Native";

	Add more details (paramaters) to router
	<Route path="archives:" component={Archives}></Route>
	"http://localhost:8080/#/archives?_k=loefsj"
	---->
	<Route path="archives/:article" component={Archives}></Route>
	"http://localhost:8080/#/archives/some--article123123?_k=b02gxa"
	"some--article123123", this variable is located at "this.params.article"
	
	Optionals
	Make parameters optionals:
	not optionals: <Route path="archives/:article" component={Archives}></Route>
	Optionals: <Route path="archives(/:article)" component={Archives}></Route>
	"archives" do not requried a parameters all the time, it can be empty also

	<Route path="/" component={Layout}>
	<IndexRoute component={Featured}></IndexRoute>
	if the path is end with /, then browser will load the Feature page

	<Route path="archives(/:article)" name="archives" component={Archives}></Route>
	if the url goes to "archives(/:article)" then goes to Archives page
*/}

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);