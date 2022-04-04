// TypeAheadDropDown.js
import './TypeAheadDropDown.css'
import MyComponent from "./GoogleMapSelector";
import React, { useState } from 'react';
import {gql, useQuery} from "@apollo/client";
import Papa from "papaparse";
import csvFile from './states.csv'


const GQL_GET_STATES = gql`
  query States($text: String!){
    states(text: $text){
      id
      name
    }
  }
`;

const TypeAheadDropDown = () => {
  const [text, setText] = useState("");
  const [googleLat, setGoogleLat] = useState(null);
  const [showResult, setshowResult] = useState(false);
      
  const { loading, error, data } = useQuery(GQL_GET_STATES,{
      variables: { text },
    });

  const onChange = (e) => {
    setText(e.target.value)
    setGoogleLat(null)
    setshowResult(true)
  };

  const onClick = (e) => {
    setText(e.target.innerText);
    setshowResult(false);

    console.log(e.target.innerText + " selected")

    Papa.parse(csvFile, {
        download: true,
        header: true,
        complete: results => {
          setGoogleLat(results.data.find(({ name }) => name === e.target.innerText))
        },
      });
  };


  function FilteredListComponent() {
    if (text.length === 0) return null;
    if (loading) return null;
    if (error) return `Error! ${error}`;
     return (
       <ul>
         {data.states.map(item => <li key={item.name} onClick={onClick}>{item.name}</li>)}
       </ul>
     )
   };

  return (
    <div className="TypeAheadDropDown">
      <input onChange={onChange} placeholder="Search US states or territories name" value={text || ''} type="text"/>
      {showResult ? <FilteredListComponent/> : null}
      <MyComponent text={googleLat}/>
     </div> 
  );
}

export default TypeAheadDropDown;


