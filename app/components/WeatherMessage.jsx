var React = require('react');

var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props; the same with the above...
  retunr(
    <h3>{location}'s temperature is {temp}</h3>
  );
};


module.exports = WeatherMessage;