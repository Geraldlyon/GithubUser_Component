import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Checkbox() {
  const [checked, toggle] = useReducer(checked => !checked, false);

  return (
    <>
    <input type="checkbox" value={checked} onChange={toggle} />
    <h5>{checked ? "checked" : "not checked"}</h5>
    </>
  )
}

function GithubUser(props) {
  const [data, setData] = useState(null);

  useEffect( () => {
    fetch(`https://api.github.com/users/${props.login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, [] );

  if(data) {
    return (
      <>
      <h1>{data.login}</h1>
      <h3>Profile Pic</h3>
      <img src={data.avatar_url} />
      <h3>{data.company}</h3>
      </>
    );
  }

  return null;

}

function App() {

  return (
    <>
    <Checkbox />
    <GithubUser login="eveporcello" />
    </>
  )

} 

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

