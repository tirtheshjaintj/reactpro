import React from 'react'
import PropTypes from 'prop-types'

function alert(props) {
  return (
   props.alert&& <div className="container">
      <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.alert}</strong>
</div>
    </div>
  )
}

alert.propTypes = {

}

export default alert

