import React, { Component } from 'react';
import CharItem from './CharItem';
import PropTypes from 'prop-types'
import axios from 'axios';

export class Char extends Component {
  //console.log(niin)

  state ={
    niin:0,
    char:[]
  }
  getChar = async e =>{
    e.preventDefault();
    if(this.props.niin.NIIN!==undefined){
    
    const res = await axios.get(`http://localhost:3001/get_Char/${this.state.niin.NIIN}`);
  
    this.setState({char:res.data});
    if(res.data.length==0){
      this.props.setAlert('No Data Available', 'light');
    }
    }
  
  }
    
       
        
    render() {
      const {searchNiin,niin} = this.props;
      const {char} = this.state;
      this.state.niin=niin;
    
        return (
          <div>
            
            <div>
              
            <form 
                onSubmit={this.getChar} 
                className="form">
                    <input 
                    type="submit" 
                    value="Show Details" 
                    className="btn btn-dark btn-block"/>
                </form>
                <CharItem key = {char.NIIN} char={char}  />
            </div>
            
          </div>
        )
}
}

Char.propTypes ={
    niin: PropTypes.object.isRequired,
    searchNiin:PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    
};

export default Char
