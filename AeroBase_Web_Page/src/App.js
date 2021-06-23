import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './Components/users/Search';
import Users from './Components/users/Users';
import Char from './Components/users/Char';
import Alert from './Components/layout/Alert';
import './App.css';
import axios from 'axios';




class App extends Component {

  state = {
    nsn: [],
    loading: false,
    alert: null,
    char:[]
  };

  
  searchUsers = async (text) => {
    
    this.setState({ loading: true });
    this.setState({ nsn: [] });
    const res = await axios.get(`http://localhost:3001/get_first_10`);
   
    this.setState({nsn:res.data,loading:false});
    if(res.data==[]){
      this.setAlert('No Data Present', 'light');
    }
  }
  searchUsers1 = async (text) => {
    
    this.setState({ loading: true });
    this.setState({ nsn: [] });
    const res = await axios.get(`http://localhost:3001/get_Search/${text}`);
  
    this.setState({nsn:res.data,loading:false});
    if(res.data==[]){
      this.setAlert('No Data Present', 'light');
    }
  }
  searchNiin = async (number) => {
   
    this.setState({ loading: true });
    this.setState({ char: [] });
    const res = await axios.get(`http://localhost:3001/get_Char/${number}`);
  
    this.props.setState({char:res.data,loading:false});
    if(res.data==[]){
      this.setAlert('No Data Present', 'light');
    }
  }

  clearUsers = () => {
    this.setState({ nsn: [], loading: false})
    
  }
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => this.setState({ alert: null }), 5000)
  }

  componentDidMount(){
    this.searchUsers();
  }
  render() {
    const { nsn, loading,char} = this.state;
    
    return (

      <Router>
        <div className="App">
          <div className="container">
            <Alert alert={this.state.alert} />
              <Switch>
                
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Search
                      searchUsers1={this.searchUsers1}
                      clearUsers={this.clearUsers}
                      RetrieveData={this.RetrieveData}
                      mysql={this.mysql}
                      showClear={nsn.length > 0 ? true : false}
                      setAlert={this.setAlert} />
                      <Users loading={loading} nsn={nsn}  />
                  </Fragment>)}
                />
                <Route exact path='/nsn' render={props => (
                  <Fragment>
                    
                      <Char searchNiin={this.searchNiin} setAlert={this.setAlert} loading ={loading} niin={props.location.state}/>
                     
                  </Fragment>)}
                />
              </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;