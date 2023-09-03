import './App.css';
import React, {useState} from 'react';
import MyComponent from './components/MyComponent';
import TabsDisplay from './components/TabsDisplay';
import TabsShow from './components/TabsShow';

function App() {
  const [data,setData] = useState("");
  

  const newContent = (content) => {
    setData(content);
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* All in one Component */}
        {/* <MyComponent/>  */}

        {/*Lifting Components*/}
        <TabsShow data={newContent}/>
        <TabsDisplay content={data}/>
        
      </header>
    </div>
  );
}

export default App;