var React = require('react');

var WeatherMessage = ({temp, location}) => {
  // var {temp, location} = props; the same with the above...
  return(
    <h3 className="text-center">{location}'s temperature is {temp}</h3>
  );
};


module.exports = WeatherMessage;