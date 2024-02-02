/*
  React hook = Special function that allows functional components
               to use React features without writing class components (React v16.8)
               (useState, useEffect, useContext, useReducer, useCallback, and more...)

  useState() = A react hook that allows the creation of stateful variable
               And a setter function to update its value in the Virtual DOM.
               [name, setName]
*/

// import MyComponent from "./MyComponent"
import Counter from "./Counter"



function App() {

  return (
    <>
      <Counter />
    </>
  )
}

export default App
