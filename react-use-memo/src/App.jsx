import { useState, useEffect, useCallback, useMemo } from 'react'

const getArray = () => {
  for (let i = 0; i < 1000000000; i++){

  }
  return ['Muhammad', "Fine Boy"]
}

const App = () => {
  const [userInput, setUserInput] = useState("")
  



  return (
    <main className='App'>
      <input type="text" 
        placeholder='Input' 
        value={userInput} 
        onChange={(e) => setUserInput(e.target.value)} 
      />
      <h1>Output: <span style={{color: "#3584de", fontSize: "40px"}}>{userInput || "..."}</span></h1>
    </main>
  )
}

export default App