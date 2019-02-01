import React, { Component } from 'react';

import Cards from './components/cards';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      dvds: [{
          id: 1,
          title: 'Card title',
          description: 'Some quick example text to build on the card title and make up the bulk of the cards content',
          image: 'http://placekitten.com/318/180',
      },{
          id: 2,
          title: 'Card title 2',
          description: 'Some 2 quick example text to build on the card title and make up the bulk of the cards content',
          image: 'http://placekitten.com/g/318/180',
      }]
    };

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
