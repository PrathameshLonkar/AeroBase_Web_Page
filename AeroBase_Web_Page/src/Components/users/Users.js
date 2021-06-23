import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types'


const Users = ({nsn,loading}) => {
        
        return (
          <div>
            
            <div>
              
              {
                nsn.map((NSN,index) => ( 
                <UserItem key ={nsn.NIIN} NSN = {NSN}/>))}
            </div>
            
          </div>
        )
}

Users.propTypes ={
    nsn: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    
};

export default Users
