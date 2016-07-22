var React = require('react');
var render = require('react-dom').render;

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var useRouterHistory = require('react-router').useRouterHistory;
var createHashHistory = require('history').createHashHistory;
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
var Main = require('./home/main');

render((
	<Router history={appHistory}>
		<Route path="/" component={Main}>
			<Route path="#" component={Main}/>
		</Route>
	</Router>
), document.getElementById("app"));