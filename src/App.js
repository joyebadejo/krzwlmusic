import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Links from './Links';
import Works from './Works';
import Inquire from "./Inquire"
import Contact from "./Contact"

function App() {

  const [page, setPage] = useState("home")

  let content = <></>
  switch (page) {
    case "links":
      content = <Links setPage={setPage}/>
      break;
    case "works":
      content = <Works setPage={setPage}/>
      break;
    case "inquire":
      content = <Inquire setPage={setPage}/>
      break;
    case "contact":
      content = <Contact setPage={setPage}/>
      break;
    default: 
      content = <h4 className="vertCenter" onClick={()=>{setPage("links")}}>kurzweil.</h4>
      break;
  }


    return (
      <div className="App">
        <div id="main">
        {content}
        </div>
      </div>
    )
}

export default App;
