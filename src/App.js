import './App.css';
import React, { useState } from 'react';


function toRow(rowData, num) {
    const a = rowData['data'][num]
    return(
        <div className={"genre row"}>
            <div className={"data column"}>{a['Characters']}</div>
             <div className={"data column"}>{a['Form']}</div>
            <div className={"data column"}>{a['Genre']}</div>
        </div>
    )
}

const Header = <div className={"row"}>
        <h3 className={"column"}>{"Characters"}</h3>
        <h3 className={"column"}>{"Form"}</h3>
        <h3 className={"column"}>{"Genre"}</h3>
    </div>


function Randoms (data) {
    return(
        <div style ={{paddingBottom: '1.17em'}}>
            {Header}
            <div>{toRow(data, 0)}</div>
            <div>{toRow(data, 1)}</div>
            <div>{toRow(data, 2)}</div>
            <div>{toRow(data, 3)}</div>
            <div>{toRow(data, 4)}</div>
            <div>{toRow(data, 5)}</div>
        </div>
    );
}


function App() {

const [genres, setGenres] = useState(0);

  function fetchGenres() {
    fetch('https://side-projects-one.server.ashley-chang.me/random_genre')
        .then(response => response.json())
        .then(data => setGenres(data));
  }
  let table = <div/>
  if(genres !== 0) {
    table = <Randoms data={genres}/>
  }

  return (
    <div className={"core"}>
      <h1>Random Genre Generator</h1>
      <button onClick={() => fetchGenres()}>Click to Vibe</button>
      {table}
    </div>
  );
}

export default App;
