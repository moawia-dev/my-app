import React from 'react';
import './App.css';
import PokedexHeader from'./components/PokedexHeader'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Maan"
    }
  }
  
  
  render() {
  return (
    <div className="App">
      <PokedexHeader name={this.state.name} author={'Mimo'} />
    </div>
  );
}
}
export default App;
