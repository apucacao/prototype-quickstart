/*** @jsx React.DOM */

'use strict';

var master = require('./stylesheets/master.less');

var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var Prototype = require('./components/Prototype');
var Example = require('./components/Example');

var routes = (
  <Route handler={Prototype}>
    <Route name="example" handler={Example} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.body);
});