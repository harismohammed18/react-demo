import React from 'react';
import PropTypes from 'prop-types'

const Navbar = (props) =>{
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand" >{props.name}</span>
    </nav>
  )
}

Navbar.prototype = {
  'name': PropTypes.string.isRequired
}

Navbar.defaultProps = {
  name: 'demo Reacts'
}

export default Navbar;