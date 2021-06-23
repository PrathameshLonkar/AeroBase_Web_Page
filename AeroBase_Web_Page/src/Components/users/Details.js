import React from 'react';
import PropTypes from 'prop-types';


const Details = (obj) =>{
       
        return (
            
              <tr>
                <td>{obj.obj.id}</td>
                <td>{obj.obj.NIIN}</td>
                <td>{obj.obj.MRC}</td>
                <td>{obj.obj.REQUIREMENTS_STATEMENT}</td>
                <td>{obj.obj.CLEAR_TEXT_REPLY}</td>
              </tr>    
        )
    
}

Details.propTypes = {
    obj: PropTypes.object.isRequired
}

export default Details
