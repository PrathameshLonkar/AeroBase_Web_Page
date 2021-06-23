import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = (NSN) =>{

        return (
            
            <div className="container">
              <Link to={{pathname: '/nsn',state:{NIIN:NSN.NSN["NIIN"]}}}>{NSN.NSN["FSC"]}{NSN.NSN["NIIN"]}</Link>
              <br/><br/>
            </div>  
               
        )
    
}

UserItem.propTypes = {
  NSN: PropTypes.object.isRequired 
}

export default UserItem
