import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
const Foo = ({ name }) => {
  return (
    
    <p>This is a component. It's name is {name}</p>
  )
}

const Item = (props) => {
  return (
    <div>
    <p>This is our first component. it is name is {props.name}</p>
    <Foo name={'Maria'}/>
    {item}
    </div>
  )
}

const item = <p>This is an item </p>
const element = <div><h1>Hello, element</h1>
 <p>This is a test</p>
 {item}
 <Item name={'Moawia'}/>
 <Item name={'Kajsa'}/>
 
</div> 
ReactDOM.render(  
  <React.StrictMode>
    <App />,
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
