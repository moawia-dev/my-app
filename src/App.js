import React from 'react';
import './App.css';
import PokedexHeader from'./components/PokedexHeader'
import {
  Input,
  Segment
} from 'semantic-ui-react'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: 'Mimo',
      name: "Maan"
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(event, data){
    this.setState({
      name: data.value
      
    })
  }
  
  render() {
    console.log(this.state)
  return (
    <div className="App">
      <PokedexHeader name={this.state.name} author={this.state.author} />
      <Segment basic>
        <Input 
        label={"Input Form"}
        onChange={this.onChange}
        value={this.state.name}
        />
      </Segment>
      
    </div>
  );
}
}
export default App;
