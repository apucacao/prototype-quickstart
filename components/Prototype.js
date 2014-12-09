/*** @jsx React.DOM */

'use strict';

var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var Prototype = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li><Link to="example">Example</Link></li>
        </ul>

        <RouteHandler/>
      </div>
    );
  }
});

module.exports = Prototype;