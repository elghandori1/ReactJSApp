import React from 'react';
import trains from './data';
import Train from './Train';

function App() {
  return (
    <>
      <Train data={trains}/>
    </>
  )
}

export default App
