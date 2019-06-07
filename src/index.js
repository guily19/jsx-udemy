import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () => {
  const buttonText = 'Click';
  const style = { backgroundColor: 'blue', color: 'white'}
  return (
    <div>
      <label className="label" htmlFor="name" >Enter Name:</label>
      <input id="name" type="text"></input>
      <button style={style}>{buttonText}</button>
    </div>
  )
}


ReactDOM.render(
  <App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker∫.unregister();
