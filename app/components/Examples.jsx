var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h3 className="text-center">Examples</h3>
      <p>Here are a few locations to try out:</p>
      <ol>
        <li>
          <Link to='/?locations=Seattle'>Seattle, WA</Link>
        </li>
        <li>
          <Link to='/?locations=Tokyo'>Tokyo, Japan</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;