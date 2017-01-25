import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Bootstrap from "./vendor/bootstrap-Native";

import Layout from "./pages/Layout";
import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Settings from "./pages/Settings";

const app = document.getElementById('app');
ReactDOM.render(
	<Router history = {hashHistory}>
		<Route path="/" component={Layout}>
		</Route>
	</Router>,
app);