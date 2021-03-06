import React, { Component} from 'react';
import './App.css';
import axios from 'axios';
import Original from './components/Original';
import DeleteConfession from './components/DeleteConfession';
import NewConfession from './components/NewConfession';
import Header from './components/Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      myConfessions: [],
      text: ''
    }
   
  }
  componentDidMount() {
    axios
        .get('/api/confessions')
        .then(res => this.setState({ myConfessions: res.data }))
        .catch(err => console.log(err));
  }
  retrieveConfessions(confessionsResponse) {
    this.setState({ myConfessions: confessionsResponse })
  }
  render() {
    return (
      <div>
        <NewConfession getConfessions={this.getConfessions}/>
        <DeleteConfession
          myConfessions={this.state.myConfessions} deleteConfessions={this.getConfessions}  />
      
      </div>
    );
  }
}

export default App;