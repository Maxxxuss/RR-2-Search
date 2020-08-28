import React from 'react'
import PropTypes from 'prop-types'


const Note = ({content   }) => (
  <li>
    <div>
      {content}
    </div>
      
  </li>
)

Note.propTypes = {
  content: PropTypes.string.isRequired,
  
}

export default Note
