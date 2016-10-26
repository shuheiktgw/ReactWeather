var React = require('react');

var WeatherMessage = (props) => {
  var {temp, location} = props;
  retunr(
    <h3>{location}'s temperature is {temp}</h3>
  );
};


module.exports = WeatherMessage;