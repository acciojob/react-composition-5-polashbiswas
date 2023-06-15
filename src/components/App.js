
import React from "react";
import './../styles/App.css';
import Tabs from "./Tabs";

let tabArr = [
  {title:"Tab 1", content:"Content for Tab 1"},
  {title:"Tab 2", content:"Content for Tab 2"},
  {title:"Tab 3", content:"Content for Tab 3"}
]
let newTabArr = [
  {title:"Tab A", content:"Content for Tab A"},
  {title:"Tab B", content:"Content for Tab B"},
  {title:"Tab C", content:"Content for Tab C"}
]
const App = () => {
  return (
    <div>
         <Tabs tabone={tabArr} tabtwo={newTabArr}/>
    </div>
  )
}

export default App
