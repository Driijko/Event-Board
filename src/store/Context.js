import React, {createContext, useState} from 'react';


// CREATE CONTEXT /////////////////////////////////////////////////////////////////////
const Context = createContext();




function ContextProvider(props) {

  const [dummyData, setDummyData] = useState("hey")

  return (
    <Context.Provider
      value={{dummyData}}
    >
      { props.children }
    </Context.Provider>
  )
}

// EXPORTS
export default Context;
export {ContextProvider};