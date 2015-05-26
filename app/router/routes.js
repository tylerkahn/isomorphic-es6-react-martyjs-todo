var React = require('react');
var Route = require('react-router').Route;

module.exports = [
  <Route name="home" path="/" handler={require('../views/home')} />,
  <Route name="hello" path="/hello" handler={require('../views/hello')} />
];
