import React from 'react';
import PropTypes from 'prop-types';


function TechItem({tech , onDelete}) {
  return (
  <li >
    {tech}
    <button 
      onClick={onDelete} 
      type="button">
        remover
    </button>
  </li>)
}

TechItem.defautProps = {
  tech: 'oculto',
}

TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default TechItem;