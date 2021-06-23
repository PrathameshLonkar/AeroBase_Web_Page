import React from 'react';
import PropTypes from 'prop-types';
import Details from './Details';

const CharItem = (char) =>{

        return (
          <div>
            <table className="table">
              <tr>
                <th>ID</th>
                <th>NIIN</th> 
                <th>MRC</th>
                <th>REQUIREMENTS_STATEMENT</th>
                <th>CLEAR_TEXT_REPLY</th> 
                
              </tr>
              {
          char.char.map((obj,index) => (
            <Details key={obj.id} obj={obj} />))
            
               
        }
        </table>
        </div>)
    
}

CharItem.propTypes = {
  char: PropTypes.array.isRequired 
}

export default CharItem
