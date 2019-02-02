import React, { Component } from 'react';
import Axios from 'axios';
import Cards from './components/cards';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      dvds: []
    };

  }

  componentDidMount() {
    Axios.get('http://localhost:8000/api')
    .then(res => {
        const dvds = res.data;
        this.setState({ dvds });
      })
    .catch(function (error) {
      console.log(error);
    });
  }


  render() {
    return (
      <div className="container">
          <Cards dvds={this.state.dvds} />
      </div>
    );
  }
}

export default App;
