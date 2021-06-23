import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {

    state={
        text:''
    };

    static propTypes={
        searchUsers1: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired

    };

    onSubmit = e => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please Enter Something', 'light');
        }
        else{
          
            this.props.searchUsers1(this.state.text);
            this.setState({text: ''});
        }
        
    }
    onChange = (e) =>this.setState({[e.target.name]: e.target.value})
    

    render() {
        const {clearUsers, showClear,mysql} = this.props;
        return (
            <div>
                <form 
                onSubmit={this.onSubmit} 
                className="form">
                    <input type="text" 
                    name="text" 
                    placeholder ="Search NSN..." 
                    value={this.state.text} 
                    onChange={this.onChange}/>
                    <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block"/>
                </form>
                {showClear && (<button className="btn btn-light btn-block" onClick={clearUsers} >Clear</button>)}
                
            </div>
        )
    }
}

export default Search
