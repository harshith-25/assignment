import React from 'react';
import './App.css';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import InitialProduct from './InitialProduct';
import InitialVariant from './InitialVariant';
import ToDoList from './TodoList';

function App() {
  return (
    <div className="app">
      <div className="window">
        <ArrowBackOutlinedIcon/><span className='thumbnail'>Rules Creation</span>  
        <button className='Publish'>Publish Feed</button>
      </div>
      <InitialVariant/>
    </div>
  );
}

export default App;
